<template>
  <el-container>
    <el-aside  width="15%">

        <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>
        <el-tree
          class="filter-tree"
          :data="unitTreeData"
          :props="defaultProps"
          :filter-node-method="filterNode"
          ref="tree2" @node-click="nodeclick">
        </el-tree>
    </el-aside>
    <el-main>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
        <el-form-item label="单位ID" :label-width="formLabelWidth">
          <el-input v-model="formInline.id" placeholder="单位ID"></el-input>
        </el-form-item>
        <el-form-item label="单位code" :label-width="formLabelWidth">
          <el-input v-model="formInline.unitcode" placeholder="单位code"></el-input>
        </el-form-item>
        <br/>
        <el-form-item label="单位名称" :label-width="formLabelWidth">
          <el-input v-model="formInline.unitname" placeholder="单位名称"></el-input>
        </el-form-item>
        <el-form-item label="父级ID" :label-width="formLabelWidth">
          <el-input v-model="formInline.pid" placeholder="父级ID"></el-input>
        </el-form-item>
        <!--<el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>-->
      </el-form>



      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="guid"
          label="GUID"
           >
        </el-table-column>
        <el-table-column
          prop="billtype.billcode"
          label="票据种类编码"
          >
        </el-table-column>
        <el-table-column
          prop="billtype.billname"
          label="票据种类名称">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleEdit(scope.$index, scope.row)">设置票据种类执收项目对应关系</el-button>
            <!--<el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="设置票据种类执收项目对应关系" :visible.sync="itemTreeShowFlag" width="500px" >
        <el-tree
          :data="itemcodeTree"
          show-checkbox
          node-key="id"
          ref="ref_itemTree">
        </el-tree>
        <div slot="footer" class="dialog-footer">
          <el-button @click="itemTreeShowFlag = false">取 消</el-button>
<!--          <el-button  >重置</el-button>-->
          <el-button type="primary" @click="updateBillChargeitem" >确 定</el-button>
        </div>
      </el-dialog>




      <!--<div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddFormVisible = false">取 消</el-button>
        <el-button @click="resetForm('addform')">重置</el-button>
        <el-button type="primary" @click="addInfo">确 定</el-button>
      </div>-->
    </el-main>
  </el-container>
</template>
<script>
    export default {
      name: "UnitTree",
      watch: {
        filterText(val) {
          this.$refs.tree2.filter(val);
        }
      },

      methods: {
        filterNode(value, data) {
          if (!value) return true;
          return data.label.indexOf(value) !== -1;
        },
        tableRowClassName({row, rowIndex}) {
          if (rowIndex === 1) {
            return 'warning-row';
          } else if (rowIndex === 3) {
            return 'success-row';
          }
          return '';
        },
        nodeclick(obj,nodetmp,componenttmp){
          this.formInline.id=obj.id;
          this.formInline.unitname=obj.label;
          this.formInline.unitcode=obj.unitcode;
          this.formInline.pid=obj.pid;
          this.$ajax({
            method:"post",
            url: "http://129.204.21.11:9080/springboot-vue/unitbilltb/getByUnitcode",
            data: {
              unitcode: obj.unitcode
            }

          }).then(resp => {
            this.tableData=resp.data;
            // this.getData()
          }).catch(err => {
            console.log('请求失败：'+err.status+','+err.statusText);
          });

        },
        handleEdit(index,row){
          this.itemTreeShowFlag=true;
          this.globalBillcode=row.billtype.billcode;
          this.$ajax({
            method:"post",
            url: "http://129.204.21.11:9080/springboot-vue/billchargeitem/getAllItem",

          }).then(resp => {
            this.itemcodeTree=resp.data;
            this.$refs.ref_itemTree.setCheckedKeys([1]);
            this.$ajax({
              method:"post",
              url: "http://129.204.21.11:9080/springboot-vue/billchargeitem/selectByBitycode",
              data: {
                bitycode: row.billtype.billcode
              }

            }).then(resp => {
              var  itemArray=new Array();
              for (var i=0;i<resp.data.length;i++){
                itemArray[i]=resp.data[i].id;
              }
              this.$refs.ref_itemTree.setCheckedKeys(itemArray);


            }).catch(err => {
              console.log('请求失败：'+err.status+','+err.statusText);
            });
          }).catch(err => {
            console.log('请求失败：'+err.status+','+err.statusText);
          });
        },
        updateBillChargeitem(){
          // console.log(this.$refs.ref_itemTree.getCheckedKeys());
          this.$ajax({
            method:"post",
            url: "http://129.204.21.11:9080/springboot-vue/billchargeitem/updateEbillChargeitem",
            data: {
              bitycode: this.globalBillcode,
              itemArray:this.$refs.ref_itemTree.getCheckedKeys()
            }

          }).then(resp => {
            this.itemTreeShowFlag=false;


          }).catch(err => {
            console.log('请求失败：'+err.status+','+err.statusText);
          });
        }

      },
      data() {
        return {
          filterText: '',
          unitTreeData:[],
          defaultProps: {
            children: 'children',
            label: 'label'
          },
          formInline: {
            id: '',
            unitcode: '',
            unitname: '',
            pid: '',
          },
          formLabelWidth:'90px',
          tableData: [],
          itemTreeShowFlag: false,
          itemcodeTree: [],
          globalBillcode:''


        };
      },
      mounted:function () {
        this.$ajax.get('http://129.204.21.11:9080/springboot-vue/unit/getUnitTree').then( res => {
          /*console.log(JSON.stringify(res.data))
          console.log(JSON.stringify(this.data2))*/
          this.unitTreeData=res.data;
        }).catch(err => {
          console.log(err)
        })
      }

    }
</script>

<style scoped>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }



</style>
