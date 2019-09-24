<template>
    <el-container class="mybody">
      <el-form ref="ruleForm3" :model="ruleForm2" status-icon :rules="rules2"  label-width="100px" class="demo-ruleForm" size="mini">
        <el-form-item  label="账号" prop="user" class="a1">
          <el-input v-model="ruleForm2.user" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass"  auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login()" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="拼命加载中"
                     element-loading-spinner="el-icon-loading"
                     element-loading-background="rgba(255,240,224,0)">登录</el-button>
          <el-button @click="resetForm('ruleForm3')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-container>
</template>

<script>
  export default {
    name:"LoginPro",

    data() {
      var checkuser = (rule, value, callback) => {
        if (value=="" || value==null) {
          return callback(new Error('账号不能为空'));
        }else{
         callback();
        }

      };
      var checkpass = (rule, value, callback) => {
        if (value=="" || value==null) {
          return callback(new Error('密码不能为空'));
        }else{
          callback();
        }
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
        },
        loginflag:false,
        fullscreenLoading: false

    };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push("/mainPro");
          } else {
            return false;
          }

        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      login() {
          this.fullscreenLoading = true;
          setTimeout(() => {
            this.fullscreenLoading = false;
          }, 2000);
           let user= this.ruleForm2.user;
           let password=this.ruleForm2.pass;
           this.$ajax.get('http://localhost:9080/springboot-vue/login?username='+user+"&&password="+password).then( res => {
              if(res.data=="登录失败！"){
                this.$message({
                  message: '登录失败，用户名或密码错误',
                  type: 'warning'
                });
              }else{
                this.$message({
                  message: '登录成功！',
                  type: 'success'
                });
                sessionStorage.setItem("key", "loginsuccess");
                this.$router.push("/mainNav");
              }
              console.log(res.data)
           }).catch(err => {
              console.log(err)
           })

      }
    },
    created() {
      var lett = this;
      document.onkeydown = function (e) {
        var key = window.event.keyCode;
        if (key == 13) {
          /*const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(255,240,224,0)'

          });*/
          // lett.login();
        }
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
  .mybody{
    width: 100%;
    height: 864px;
    background: url("../assets/images/beverage-blurred-background-breakfast-2410571.jpg");

  }
  .myloginbox {
    width: 100%;
    /*height: 900px;*/
    height: 100%;
    /*background-color: #42b983;*/
    background: url("../assets/images/beverage-blurred-background-breakfast-2410571.jpg");
  }

  .el-form-item__label{
    color: white;
  }



</style>

