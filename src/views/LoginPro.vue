<template>
  <div class="myloginbox">
    <el-container>
      <el-form ref="ruleForm3" :model="ruleForm2" status-icon :rules="rules2"  label-width="100px" class="demo-ruleForm" size="mini">
        <el-form-item  label="账号" prop="user" class="a1">
          <el-input v-model="ruleForm2.user" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass"  auto-complete="off"></el-input>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm3')">提交</el-button>
          <el-button @click="resetForm('ruleForm3')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-container>
  </div>
</template>

<script>
  export default {
    name:"LoginPro",
    data() {
      var checkuser = (rule, value, callback) => {
        // alert(value)

        if (value=="" || value==null) {
          return callback(new Error('账号不能为空'));
        }else{
         callback();
        }

      };
      var checkpass = (rule, value, callback) => {
        // alert(value)
        if (value=="" || value==null) {
          return callback(new Error('密码不能为空'));
        }else{
          callback();
        }
        /*if (value === '') {
          callback(new Error('密码不能为空'));
        }*/
      };

      return {
        ruleForm2: {
          user: '',
          pass: '',
        },
        rules2: {
          user: [
            { validator: checkuser, trigger: 'blur' }
          ],

          pass: [
            { validator: checkpass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push("/mainPro");
          } else {
            // console.log('error submit!!');
            alert('submit!');
            return false;
          }

        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>


<style lang="scss">
  .demo-ruleForm{
    margin-top: 300px;
    margin-left: 1100px;
    /*background-color: white;*/
  }
  .myloginbox {
    width: 100%;
    height: 900px;
    /*background-color: #42b983;*/
    background: url("../assets/images/beverage-blurred-background-breakfast-2410571.jpg");
  }

  .el-form-item__label{
    color: white;
  }



</style>

