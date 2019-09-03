<template>
  <div>
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="用户id:">
            <span>{{ props.row.userId }}</span>
          </el-form-item>
          <el-form-item label="用户名称:">
            <span>{{ props.row.username }}</span>
          </el-form-item>
          <el-form-item label="用户密码:">
            <span>{{ props.row.password }}</span>
          </el-form-item>
          <el-form-item label="用户昵称:">
            <span>{{ props.row.nickname }}</span>
          </el-form-item>
          <el-form-item label="联系方式:">
            <span>{{ props.row.telphone }}</span>
          </el-form-item>
          <el-form-item label="通讯地址:">
            <span>{{ props.row.address }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="UserID"
      prop="userId">
    </el-table-column>
    <el-table-column
      label="用户名"
      prop="username">
    </el-table-column>
    <el-table-column
      label="密码"
      prop="password">
    </el-table-column>
    <el-table-column
      label="用户昵称"
      prop="nickname">
    </el-table-column>
    <el-table-column
      label="联系方式"
      prop="telphone">
    </el-table-column>
    <el-table-column
      label="通讯地址"
      prop="address">
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

  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>

  </div>


</template>


<script>
  export default {
    name: "UserList",
    data() {
      return {
        tableData5: [],
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',

      }
    },
    mounted() {
        this.$ajax.get('http://localhost:9080/getUserList').then( res => {
          console.log(res.data)
          this.tableData5=res.data
        }).catch(err => {
          console.log(err)
        })

    },
    methods:{
      handleEdit(index,row){
        /*alert(row.userId)
        alert(row.username)*/
        this.dialogFormVisible=true;
        this.$ajax.get('http://localhost:9080/getUserList').then( res => {
          console.log(res.data)
          this.tableData5=res.data
        }).catch(err => {
          console.log(err)
        })
      },
      handleDelete(index,row){
        this.$ajax.get('http://localhost:9080/deleteUser?userid='+row.userId).then( res => {
          //删除结束再次调用查询方法，刷新table里面的值
          this.getData()

        }).catch(err => {
          console.log(err)
        })
      },
      getData() {
        this.$ajax.get('http://localhost:9080/getUserList').then( res => {
          console.log(res.data)
          this.tableData5=res.data
        }).catch(err => {
          console.log(err)
        })
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
</style>
