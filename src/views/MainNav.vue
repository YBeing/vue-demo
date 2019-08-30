<template>
    <div>
      <el-container>
        <el-header >
          <el-menu   class="el-menu-demo" mode="horizontal" >
            <el-submenu index="2" >
              <template slot="title"  icon="el-icon-service" >admin</template>
              <el-menu-item index="2-2">登录状态</el-menu-item>
              <el-menu-item index="2-3">用户信息</el-menu-item>
              <!--<el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>-->
            </el-submenu>
            <el-menu-item index="3" ><a class="el-icon-message">消息中心</a></el-menu-item>

            <el-menu-item  index="1" @click="dialogVisible = true"><a class="el-icon-phone-outline">注销</a></el-menu-item>

          </el-menu>

        </el-header>
        <el-container>
          <el-aside width="400px">
            <el-col :span="12">
              <h5 style="padding-left: 30px">功能菜单</h5>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-aside>
          <el-main>
            <el-carousel :interval="4000" type="card" height="200px">
             <!-- <el-carousel-item v-for="item in 6" :key="item">
              </el-carousel-item>-->
              <el-carousel-item id="i1">
              </el-carousel-item>
              <el-carousel-item id="i2">
              </el-carousel-item>
              <el-carousel-item id="i3">
              </el-carousel-item>
            </el-carousel>
          </el-main>
        </el-container>
      </el-container>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "MainNav",
        data(){
          return {
            dialogVisible: false
          };
        },
        methods:{
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          },
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }


  #i1{
    background: url("../assets/images/beautiful-blue-christmas-2011367.jpg");

  }
  #i2{
    background: url("../assets/images/astrophotography-background-dark-746393.jpg");
  }
  #i3{
    background: url("../assets/images/coast-island-mountain-2821285.jpg");
  }
  .el-menu-demo{
    padding-left: 1100px;
  }
  .el-icon-message{
    margin-right: 80px;
  }
</style>
