<template>
  <div>
    <el-container>
      <el-header>
        <el-button type="primary" icon="el-icon-edit"  @click="addModel">新增</el-button>
      </el-header>
      <el-main>
        <el-table
          :data="tableData5.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          style="width: 100%">

          <el-table-column
            label="电子票据模板id"
            prop="modelid">
          </el-table-column>
          <el-table-column
            label="电子票据编码"
            prop="bitycode">
          </el-table-column>
          <el-table-column
            label="模板版本号"
            prop="modelversion">
          </el-table-column>
          <el-table-column
            label="起止有效日期"
            prop="modelstartdate">
          </el-table-column>
          <el-table-column
            label="截止有效日期"
            prop="modelenddate">
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

        <el-dialog title="修改模板信息" :visible.sync="dialogFormVisible" width="500px" >
          <el-form :model="form" class="el-userform">
            <el-form-item label="电子票据模板ID" :label-width="formLabelWidth">
              <el-input v-model="form.modelid" auto-complete="off" class="el-form-name" disabled ></el-input>
            </el-form-item>
            <el-form-item label="票据种类编码" :label-width="formLabelWidth">
              <el-input v-model="form.bitycode" auto-complete="off" class="el-form-name" disabled ></el-input>
            </el-form-item>
            <el-form-item label="票样模板版本" :label-width="formLabelWidth">
              <el-input v-model="form.modelversion" auto-complete="off" class="el-form-name"  ></el-input>
            </el-form-item>
            <el-form-item   label="起止有效日期" :label-width="formLabelWidth">
              <!--              <el-input v-model="addform.startdate" auto-complete="off" class="el-form-name"  ></el-input>-->
              <el-date-picker type="date" placeholder="选择日期" v-model="addform.modelstartdate" value-format="yyyy-MM-dd" ></el-date-picker>
            </el-form-item>
            <el-form-item   label="截止有效日期" :label-width="formLabelWidth">
              <!--              <el-input v-model="addform.enddate" auto-complete="off" class="el-form-name"  ></el-input>-->
              <el-date-picker type="date" placeholder="选择日期" v-model="addform.modelenddate" value-format="yyyy-MM-dd" ></el-date-picker>

            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="editInfo">确 定</el-button>
          </div>
        </el-dialog>
        <el-dialog title="新增电子票据模板" :visible.sync="dialogAddFormVisible" width="500px" >
          <el-form  ref="addform" :model="addform" class="el-userform" >
            <el-form-item label="票据种类编码" :label-width="formLabelWidth">
<!--              <el-input v-model="addform.bitycode" auto-complete="off" class="el-form-name"  @change="checkBitycodeisExits"></el-input>-->
              <el-select size="medium" v-model="addform.bitycode" style="width: 200px"   placeholder="">
                <el-option
                  v-for="item in bitycodeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="票样模板版本" :label-width="formLabelWidth">
              <el-input v-model="addform.modelversion" auto-complete="off" class="el-form-name"  ></el-input>
            </el-form-item>
            <el-form-item   label="起止有效日期" :label-width="formLabelWidth">
              <el-date-picker type="date" placeholder="选择日期" v-model="addform.modelstartdate" value-format="yyyy-MM-dd" ></el-date-picker>
            </el-form-item>
            <el-form-item   label="截止有效日期" :label-width="formLabelWidth">
              <el-date-picker type="date" placeholder="选择日期" v-model="addform.modelenddate" value-format="yyyy-MM-dd" ></el-date-picker>
            </el-form-item>


            <el-form-item   label="上传板式文件" :label-width="formLabelWidth">
              <el-upload
                ref="upload"
                class="upload-demo"
                action="http://localhost:9080/springboot-vue/emodel/upload"
                :limit="1"
                :auto-upload="false">
                <el-button size="small" type="primary">上传电子票据模板</el-button>
              </el-upload>
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
        bitycodeList: [],
        tableData5: [],
        dialogFormVisible: false,
        dialogAddFormVisible: false,
        form: {
          bitycode2:'',
          modelversion: '',
          modelstartdate: '',
          modelenddate: '',
        },
        addform: {
          bitycode:'',
          modelversion: '',
          modelstartdate: '',
          modelenddate: '',
        },
        formLabelWidth: '120px',
        currentPage:1,
        pagesize:5,
        totalDataCount:0,
        addformFlag:true


      }
    },
    mounted() {
      this.getBitycode();
      this.$ajax.get('http://localhost:9080/springboot-vue/emodel/list').then( res => {
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
      addModel(){
        this.dialogAddFormVisible=true;
        this.resetForm('addform');

      },
      handleDelete(index,row){
        this.$ajax.get('http://localhost:9080/springboot-vue/emodel/deleteByPrimaryKey?id='+row.modelid).then( res => {
          //删除结束再次调用查询方法，刷新table里面的值
          this.getData()

        }).catch(err => {
          console.log(err)
        })
      },
      getData() {
        this.$ajax.get('http://localhost:9080/springboot-vue/emodel/list').then( res => {
          console.log(res.data);
          this.tableData5=res.data;
          this.totalDataCount=res.data.length;

        }).catch(err => {
          console.log(err)
        })
      },
      editInfo() {
        this.dialogFormVisible=false;
        this.$ajax({
          method:"post",
          url: "http://localhost:9080/springboot-vue/emodel/updateByPrimaryKey",
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
        //bitycode校验通过才能进行新增操作
        if(this.addformFlag){
            this.$refs.upload.submit();
            this.dialogAddFormVisible=false;
            this.$ajax({
              method:"post",
              url: "http://localhost:9080/springboot-vue/emodel/insert",
              data: {
                record: JSON.stringify(this.addform)
              }

            }).then(resp => {
              this.getData();
              this.addformFlag=true;
              // console.log(resp.data);
            }).catch(err => {
              console.log('请求失败：'+err.status+','+err.statusText);
            });
          }
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
      checkBitycodeisExits(value){
        this.$ajax.get('http://localhost:9080/springboot-vue/emodel/getByBitycode?bitycode='+value).then( res => {
          if (res.data!=null && res.data!=""){
            this.$message({
              message: res.data,
              type: 'warning'
            });
            this.addformFlag=false;
          }
        }).catch(err => {
          console.log(err)
        })


      },
      getBitycode(){
        this.$ajax.get('http://localhost:9080/springboot-vue/billtype/getSelectBox').then( res => {
          this.bitycodeList=res.data;
        }).catch(err => {
          console.log(err)
        });
      },


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
    width: 200px;
    height: 440px;
  }
  .mypagination{
    padding-left: 30%;
    padding-top: 20%;
  }


</style>
