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
          default-expand-all
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
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>





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
          /*console.log(obj)
          console.log(nodetmp)
          console.log(componenttmp)*/

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
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }]

        };
      },
      mounted:function () {
        this.$ajax.get('http://localhost:9080/unit/getUnitTree').then( res => {
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
