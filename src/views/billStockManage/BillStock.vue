<template>
  <div>
    <el-container>
      <el-header>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="行政区划编码">
            <el-input v-model="formInline.regicode" placeholder="行政区划编码"></el-input>
          </el-form-item>
          <el-form-item label="单位编码">
            <el-input v-model="formInline.unitcode" placeholder="单位编码"></el-input>
          </el-form-item>
          <el-form-item label="票据种类编码">
            <el-input v-model="formInline.bitycode" placeholder="票据种类编码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onsearch">查询</el-button>
            <el-button type="warning" @click="addChargeitem">新增库存</el-button>
          </el-form-item>
        </el-form>
      </el-header>
      <el-main>
        <el-table
          :data="tableData5.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          style="width: 100%">

          <el-table-column
            label="行政区划"
            prop="regicode">
          </el-table-column>
          <el-table-column
            label="单位编码"
            prop="unitcode">
          </el-table-column>
          <el-table-column
            label="票据种类编码"
            prop="bitycode">
          </el-table-column>
          <el-table-column
            label="票据种类起始号码"
            prop="startno">
          </el-table-column>
          <el-table-column
            label="票据种类终止号码"
            prop="endno">
          </el-table-column>
          <el-table-column
            label="份数"
            prop="sheets">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 15, 20, 25]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalDataCount" class="mypagination">
        </el-pagination>

        <el-dialog title="修改执收项目信息" :visible.sync="dialogFormVisible" width="500px" >
          <el-form :model="form" class="el-userform">
            <el-form-item label="执收项目id" :label-width="formLabelWidth">
              <el-input v-model="form.guid" auto-complete="off" class="el-form-name" disabled ></el-input>
            </el-form-item>
            <el-form-item label="执收项目编码" :label-width="formLabelWidth">
              <el-input v-model="form.itemcode" auto-complete="off" class="el-form-name" disabled ></el-input>
            </el-form-item>
            <el-form-item label="执收项目名称" :label-width="formLabelWidth">
              <el-input v-model="form.itemname" auto-complete="off" class="el-form-name"  ></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="editInfo">确 定</el-button>
          </div>
        </el-dialog>
        <el-dialog title="新增电子票据库存" :visible.sync="dialogAddFormVisible" width="500px" >
          <el-form  ref="addform" :model="addform" class="el-userform">
            <el-form-item label="行政区划编码" :label-width="formLabelWidth">
              <el-input v-model="addform.regicode" auto-complete="off" class="el-form-name"  ></el-input>
            </el-form-item>
            <el-form-item label="单位编码" :label-width="formLabelWidth">
              <el-input v-model="addform.unitcode" auto-complete="off" class="el-form-name"  ></el-input>
            </el-form-item>
            <el-form-item label="票据种类编码" :label-width="formLabelWidth">
              <el-input v-model="addform.bitycode" auto-complete="off" class="el-form-name"  ></el-input>
            </el-form-item>
            <el-form-item label="份数" :label-width="formLabelWidth">
              <el-input v-model="addform.count" auto-complete="off" class="el-form-name"  ></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogAddFormVisible = false">取 消</el-button>
            <el-button @click="resetForm('addform')">重置</el-button>
            <el-button type="primary" @click="addInfo">确 定</el-button>
          </div>
        </el-dialog>
      </el-main>
    </el-container>
  </div>


</template>


<script>
  export default {
    name: "UserList",
    data() {
      return {
        tableData5: [],
        formInline: {
          regicode: '',
          unitcode: '',
          bitycode: ''
        },
        dialogFormVisible: false,
        dialogAddFormVisible: false,
        form: {
          guid:'',
          itemcode: '',
          itemname: '',
        },
        addform: {
          regicode:'',
          unitcode: '',
          bitycode: '',
          count:''
        },
        formLabelWidth: '120px',
        currentPage:1,
        pagesize:5,
        totalDataCount:0

      }
    },
    mounted() {
      this.$ajax.get('http://localhost:9080/springboot-vue/stock/list').then( res => {
        console.log(res.data)
        this.tableData5=res.data;
        this.totalDataCount=res.data.length;
      }).catch(err => {
        console.log(err)
      })

    },
    methods:{
      handleEdit(index,row){
        this.dialogFormVisible=true;
        this.form.guid=row.guid;
        this.form.itemcode=row.itemcode;
        this.form.itemname=row.itemname;
      },
      addChargeitem(){
        this.dialogAddFormVisible=true;
        this.resetForm('addform');

      },
      handleDelete(index,row){
        this.$ajax.get('http://localhost:9080/springboot-vue/xtchargeitem/deleteSingleXtChargeitem?id='+row.guid).then( res => {
          //删除结束再次调用查询方法，刷新table里面的值
          this.getData()

        }).catch(err => {
          console.log(err)
        })
      },
      getData() {
        this.$ajax.get('http://localhost:9080/springboot-vue/stock/list').then( res => {
          console.log(res.data)
          this.tableData5=res.data
        }).catch(err => {
          console.log(err)
        })
      },
      editInfo() {
        this.dialogFormVisible=false;
        this.$ajax({
          method:"post",
          url: "http://localhost:9080/springboot-vue/xtchargeitem/updateSingleXtChargeitem",
          data: {
            record: JSON.stringify(this.form)
          }

        }).then(resp => {
          this.getData()
        }).catch(err => {
          console.log('请求失败：'+err.status+','+err.statusText);
        });
      },
      addInfo() {
        this.dialogAddFormVisible=false;
        this.$ajax({
          method:"post",
          url: "http://localhost:9080/springboot-vue/stock/addStock",
          data: {
            record: JSON.stringify(this.addform)
          }

        }).then(resp => {
          this.getData()
          // console.log(resp.data);
        }).catch(err => {
          console.log('请求失败：'+err.status+','+err.statusText);
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleSizeChange(val) {
        this.pagesize=val;
      },
      handleCurrentChange(val) {
        this.currentPage=val;
      },
      onsearch(){
        this.$ajax({
          method:"post",
          url: "http://localhost:9080/springboot-vue/stock/selectByConditions",
          data: {
            record: JSON.stringify(this.formInline)
          }

        }).then(resp => {
          this.tableData5=resp.data

          // console.log(resp.data);
        }).catch(err => {
          console.log('请求失败：'+err.status+','+err.statusText);
        });
      }

    }


  }
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-form-name{
    width: 235px;
  }
  .el-userform{
    width: 100px;
    height: 240px;
  }
  .mypagination{
    padding-left: 30%;
    padding-top: 20%;
  }


</style>
