<template>
    <div>
      <audio autoplay="autoplay">
        <source src="../assets/images/一路向北.mp3" type="audio/mpeg">
      </audio>
      <el-container>
        <el-header >

          <el-menu    class="el-menu-demo" mode="horizontal" style="height: 70px" >
            <el-menu-item style="padding-right: 60%">
              <img src="../assets/images/重阳节.png" height="65px">
              <span style="font-family: 楷体; color: purple; font-size: 27px; padding-left: 20px">浙江省电子票据大数据系统</span>

            </el-menu-item>



            <!--<el-submenu index="2" >
              <template slot="title"  icon="el-icon-service" >admin</template>
              <el-menu-item index="2-2">登录状态</el-menu-item>
              <el-menu-item index="2-3">用户信息</el-menu-item>
            </el-submenu>-->
            <el-menu-item  index="2" @click="dialogVisible = true"><a class="el-icon-user-solid">用户</a></el-menu-item>
            <el-menu-item  index="1" @click="dialogVisible = true"><a class="el-icon-phone-outline">注销</a></el-menu-item>

          </el-menu>

        </el-header>
        <el-container >
          <el-aside  width="200px">
<!--            <el-col :span="12">-->
              <h5 style="padding-left: 30px">功能菜单</h5>
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">

                <el-submenu index="3">
                    <template slot="title">
                      <i class="el-icon-document"></i>
                      <span>电子票据</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="3-1" @click="addTab('电子票据种类管理')" >电子票据种类管理</el-menu-item>
                    </el-menu-item-group>
                  <el-menu-item-group>

                  <el-menu-item index="3-2" @click="addTab('执收项目管理')">执收项目管理</el-menu-item>
                    </el-menu-item-group>
                  <el-menu-item-group>
                    <el-menu-item index="3-2" @click="addTab('电子票据模板管理')">电子票据模板管理</el-menu-item>
                    </el-menu-item-group>
                  <el-menu-item-group>
                    <el-menu-item index="3-3" @click="addTab('电子票据开具')">电子票据开具</el-menu-item>
                    </el-menu-item-group>
                  <el-menu-item-group>
                    <el-menu-item index="3-4" @click="addTab('电子票据作废')">电子票据作废</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group>
                    <el-menu-item index="3-5" @click="addTab('电子票据换开')">电子票据换开</el-menu-item>
                  </el-menu-item-group>

                </el-submenu>

                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-shopping-cart-2"></i>
                    <span>商户管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1" @click="addTab('图表')" >图表</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>


                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-house"></i>
                    <span>库存管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="4-1" @click="addTab('电子票据库存管理')" >电子票据库存管理</el-menu-item>
                  </el-menu-item-group>


                </el-submenu>



                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>系统管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-2" @click="addTab('单位管理')" >单位管理</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item index="1-3" @click="addTab('用户管理')">用户管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
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
              <el-button type="primary" @click="loginout">确 定</el-button>
              <el-button @click="dialogVisible = false">取 消</el-button>
            </span>
      </el-dialog>




    </div>
</template>

<script>
    import  Carousel from './Carousel'
    import List from './systemSetting/UserList'
    import UnitTree from './systemSetting/UnitTree'
    import BillType from  './billManager/BillType'
    import ChargeItem from  './billManager/ChargeItem'
    import Model from  './billManager/Model'
    import BillStock from  './billStockManage/BillStock'
    import Index from './Index'
    import BillDeal from './billManager/BillDeal'

    export default {
        name: "MainNav",
        components:{
          carous:Carousel
        },
        data(){
          return {
            dialogVisible: false,
            editableTabs2: [
              {
                title: '首页',
                name: 'index',
                content: Index
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
            if(name=="单位管理"){
              component=UnitTree;
            }

            if(name=="电子票据种类管理"){
              component=BillType;
            }
            if(name=="执收项目管理"){
              component=ChargeItem;
            }
            if(name=="电子票据模板管理"){
              component=Model;
            }
            if(name=="电子票据库存管理"){
              component=BillStock;
            }
            if(name=="电子票据开具"){
              component=BillDeal;
            }
            if(name=="图表"){
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
            }
            this.activeName = name;

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
            this.$router.push("/loginPro");

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
    /*padding-left: 84%;*/
    /*background-color: red;*/
    /*background: url("../assets/images/background-cement-concrete-242236.jpg");*/

  }
  .el-icon-message{
    margin-right: 80px;
  }
</style>
