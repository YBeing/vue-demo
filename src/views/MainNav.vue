<template>
    <div>
      <el-container>
        <el-header >
          <el-menu   class="el-menu-demo" mode="horizontal" >
            <el-submenu index="2" >
              <template slot="title"  icon="el-icon-service" >admin</template>
              <el-menu-item index="2-2">登录状态</el-menu-item>
              <el-menu-item index="2-3">用户信息</el-menu-item>
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
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航一</span>
                </el-menu-item>
                <el-menu-item index="3" >
                  <i class="el-icon-document"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-location"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>系统管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-2" @click="addTab('菜单管理')" >菜单管理</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item index="1-3" @click="addTab('用户管理')">用户管理</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">消息管理</template>
                    <el-menu-item index="1-4-1" @click="addTab('消息设置')">消息设置</el-menu-item>
                  </el-submenu>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-aside>
          <el-main>
            <el-tabs v-model="activeName" closable  @tab-remove="removeTab">
              <el-tab-pane
                v-for="(item, index) in editableTabs2"
                :key="item.name"
                :label="item.title"
                :name="item.name"
              >
                <component :is="item.content"></component>
              </el-tab-pane>
            </el-tabs>
          </el-main>
        </el-container>
      </el-container>
      <el-dialog
        title="注销"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>确定要注销登录吗?</span>
        <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="loginout">确 定</el-button>
            </span>
      </el-dialog>




    </div>
</template>

<script>
    import  MenuTree from '../views/tabs/MenuTree'
    import  Carousel from '../views/tabs/Carousel'
    import  Form from '../views/tabs/Form'
    import  Table from '../views/tabs/Table'
    import List from '../views/user/List'
    export default {
        name: "MainNav",
        components:{
          tree:MenuTree,
          carous:Carousel
        },
        data(){
          return {
            dialogVisible: false,
            editableTabs2: [
              {
                title: '首页',
                name: 'index',
                content: Carousel
              }
            ],
            activeName: "index",

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
          },
          addTab(name) {
            let  component=null;
            if(name=="用户管理"){
              component=List;
            }
            if(name=="菜单管理"){
              component=Form;
            }
            if(name=="消息设置"){
              component=Table;
            }
            let tabs = this.editableTabs2;
            let addFlag=true;
            if (tabs.length>1){
              tabs.forEach((tab, index) => {
                if(tab.name==name){
                  addFlag=false;
                }
              });
            }
            if(addFlag){
              this.editableTabs2.push({
                title: name,
                name: name,
                content: component,
              });
              this.activeName = name;
            }
          },
          removeTab(targetName) {
            let tabs = this.editableTabs2;
            let activeName = this.activeName;
            if (activeName === targetName) {
              tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                  let nextTab = tabs[index + 1] || tabs[index - 1];
                  if (nextTab) {
                    activeName = nextTab.name;
                  }
                }
              });
            }

            this.activeName=activeName;
            this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
          },
          loginout(){

          }
        },

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
