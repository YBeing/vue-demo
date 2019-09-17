<template>
  <div>
    <el-container>
      <el-header>
        <el-button type="primary" icon="el-icon-edit"  @click="adduser">新增</el-button>
      </el-header>
      <el-main>
        <el-table
          :data="tableData5.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="票据id:">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="票据种类编码:">
                  <span>{{ props.row.billcode }}</span>
                </el-form-item>
                <el-form-item label="票据种类名称:">
                  <span>{{ props.row.billname }}</span>
                </el-form-item>
                <el-form-item label="是否电子票据:">
                  <span>{{ props.row.isdzpj }}</span>
                </el-form-item>
                <el-form-item label="起止有效日期:">
                  <span>{{ props.row.startdate }}</span>
                </el-form-item>
                <el-form-item label="截止有效日期:">
                  <span>{{ props.row.enddate }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="票据id"
            prop="id">
          </el-table-column>
          <el-table-column
            label="票据种类编码"
            prop="billcode">
          </el-table-column>
          <el-table-column
            label="票据种类名称"
            prop="billname">
          </el-table-column>
          <el-table-column
            label="是否电子票据"
            prop="isdzpj"
            :formatter="formatter">
          </el-table-column>
          <el-table-column
            label="起止有效日期"
            prop="startdate"
          >
          </el-table-column>
          <el-table-column
            label="截止有效日期"
            prop="enddate"
            >
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
          :page-sizes="[10, 15, 20, 25]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalDataCount" class="mypagination">
        </el-pagination>

        <el-dialog title="修改电子票据种类信息" :visible.sync="dialogFormVisible" width="500px" >
          <el-form :model="form" class="el-userform">
            <el-form-item label="电子票据种类id" :label-width="formLabelWidth">
              <el-input v-model="form.id" auto-complete="off" class="el-form-name" disabled ></el-input>
            </el-form-item>
            <el-form-item label="票据种类编码" :label-width="formLabelWidth">
              <el-input v-model="form.billcode" auto-complete="off" class="el-form-name" disabled ></el-input>
            </el-form-item>
            <el-form-item label="票据种类名称" :label-width="formLabelWidth">
              <el-input v-model="form.billname" auto-complete="off" class="el-form-name"  ></el-input>
            </el-form-item>
            <el-form-item label="是否电子票据" :label-width="formLabelWidth">
              <el-input v-model="form.isdzpj" auto-complete="off" class="el-form-name"  ></el-input>
            </el-form-item>
            <el-form-item label="起止有效日期" :label-width="formLabelWidth">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.startdate" value-format="yyyy-MM-dd"></el-date-picker>
            </el-form-item>
            <el-form-item label="截止有效日期" :label-width="formLabelWidth">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.enddate" value-format="yyyy-MM-dd"></el-date-picker>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="editInfo">确 定</el-button>
          </div>
        </el-dialog>
        <el-dialog title="新增用户信息" :visible.sync="dialogAddFormVisible" width="500px" >
          <el-form  ref="addform" :model="addform" class="el-userform">
            <el-form-item   label="票据种类编码" :label-width="formLabelWidth">
              <el-input v-model="addform.billcode" auto-complete="off" class="el-form-name"  ></el-input>
            </el-form-item>
            <el-form-item   label="票据种类名称" :label-width="formLabelWidth">
              <el-input v-model="addform.billname" auto-complete="off" class="el-form-name"  ></el-input>
            </el-form-item>
            <el-form-item   label="是否电子票据" :label-width="formLabelWidth">
              <el-input v-model="addform.isdzpj" auto-complete="off" class="el-form-name"  ></el-input>
            </el-form-item>
            <el-form-item   label="起止有效日期" :label-width="formLabelWidth">
<!--              <el-input v-model="addform.startdate" auto-complete="off" class="el-form-name"  ></el-input>-->
              <el-date-picker type="date" placeholder="选择日期" v-model="addform.startdate" value-format="yyyy-MM-dd" ></el-date-picker>
            </el-form-item>
            <el-form-item   label="截止有效日期" :label-width="formLabelWidth">
<!--              <el-input v-model="addform.enddate" auto-complete="off" class="el-form-name"  ></el-input>-->
              <el-date-picker type="date" placeholder="选择日期" v-model="addform.enddate" value-format="yyyy-MM-dd" ></el-date-picker>

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
          id:'',
          billcode: '',
          billname: '',
          isdzpj: '',
          startdate: '',
          enddate: '',
        },
        addform: {
          id:'',
          billcode: '',
          billname: '',
          isdzpj: '',
          startdate: '',
          enddate: '',
        },
        formLabelWidth: '120px',
        currentPage:1,
        pagesize:10,
        totalDataCount:0

      }
    },
    mounted() {
        this.$ajax.get('http://129.204.21.11:9080/springboot-vue/billtype/list').then( res => {
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
        this.form.id=row.id;
        this.form.billcode=row.billcode;
        this.form.billname=row.billname;
        this.form.isdzpj=row.isdzpj;
        this.form.startdate=row.startdate;
        this.form.enddate=row.enddate;
      },
      adduser(){
        this.dialogAddFormVisible=true;
        this.resetForm('addform');

      },
      handleDelete(index,row){
        this.$ajax.get('http://129.204.21.11:9080/springboot-vue/billtype/deleteByPrimaryKey?id='+row.id).then( res => {
          //删除结束再次调用查询方法，刷新table里面的值
          this.getData()

        }).catch(err => {
          console.log(err)
        })
      },
      getData() {
        this.$ajax.get('http://129.204.21.11:9080/springboot-vue/billtype/list').then( res => {
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
          url: "http://129.204.21.11:9080/springboot-vue/billtype/updateByPrimaryKey",
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
          url: "http://129.204.21.11:9080/springboot-vue/billtype/insert",
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
      formatter(row, column){
        if(row.isdzpj=="1"){
          return "是"
        }else {
          return "否"
        }
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
    /*color: #99a9bf;*/
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
    height: 330px;
  }
  .mypagination{
    padding-left: 30%;
    padding-top: 20%;
  }

</style>
