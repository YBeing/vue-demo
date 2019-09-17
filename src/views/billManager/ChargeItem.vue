<template>
  <div>
    <el-container>
      <el-header>
        <el-button type="primary" icon="el-icon-edit"  @click="addChargeitem">新增</el-button>
      </el-header>
      <el-main>
        <el-table
          :data="tableData5.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          style="width: 100%">

          <el-table-column
            label="执收项目id"
            prop="guid">
          </el-table-column>
          <el-table-column
            label="执收项目编码"
            prop="itemcode">
          </el-table-column>
          <el-table-column
            label="执收项目名称"
            prop="itemname">
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
        <el-dialog title="新增执收项目信息" :visible.sync="dialogAddFormVisible" width="500px" >
          <el-form  ref="addform" :model="addform" class="el-userform">
            <el-form-item label="执收项目编码" :label-width="formLabelWidth">
              <el-input v-model="addform.itemcode" auto-complete="off" class="el-form-name"  ></el-input>
            </el-form-item>
            <el-form-item label="执收项目名称" :label-width="formLabelWidth">
              <el-input v-model="addform.itemname" auto-complete="off" class="el-form-name"  ></el-input>
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
        dialogFormVisible: false,
        dialogAddFormVisible: false,
        form: {
          guid:'',
          itemcode: '',
          itemname: '',
        },
        addform: {
          guid:'',
          itemcode: '',
          itemname: '',
        },
        formLabelWidth: '120px',
        currentPage:1,
        pagesize:5,
        totalDataCount:0

      }
    },
    mounted() {
        this.$ajax.get('http://localhost:9080/springboot-vue/xtchargeitem/list').then( res => {
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
        this.$ajax.get('http://localhost:9080/springboot-vue/xtchargeitem/list').then( res => {
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
          url: "http://localhost:9080/springboot-vue/xtchargeitem/insertXtChargeitem",
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
