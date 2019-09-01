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
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>系统管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-2" @click="addTab(editableTabsValue2)" >菜单管理</el-menu-item>
                  </el-menu-item-group>
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
                <el-menu-item index="3" >
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
            <!--<el-carousel :interval="4000" type="card" height="200px">
             &lt;!&ndash; <el-carousel-item v-for="item in 6" :key="item">
              </el-carousel-item>&ndash;&gt;
              <el-carousel-item id="i1">
              </el-carousel-item>
              <el-carousel-item id="i2">
              </el-carousel-item>
              <el-carousel-item id="i3">
              </el-carousel-item>
            </el-carousel>-->
            <!--<el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
              &lt;!&ndash;<el-tab-pane
                v-for="(item, index) in editableTabs2"
                :key="item.name"
                :label="item.title"
                :name="item.name"
              >
                {{item.content}}
              </el-tab-pane>&ndash;&gt;
              <el-tab-pane>
                <tree></tree>

              </el-tab-pane>
            </el-tabs>-->
            <el-tabs v-model="activeName">
              <el-tab-pane label="首页" name="first" :key="'first'">
                <carous></carous>
              </el-tab-pane>

            </el-tabs>
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
    import  MenuTree from '../views/tabs/MenuTree'
    import  Carousel from '../views/tabs/Carousel'
    export default {
        name: "MainNav",
        components:{
          tree:MenuTree,
          carous:Carousel
        },
        data(){
          return {
            dialogVisible: false,
            editableTabsValue2: '1',
            editableTabs2: [
              {
                title: 'Tab 1',
                name: '1',
                content: 'Tab 1 content'
              }
            ],
            tabIndex: 1,
            activeName: "first",

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
          addTab(targetName) {
            // alert(targetName);
            let newTabName = ++this.tabIndex + '';
            this.editableTabs2.push({
              title: 'New Tab',
              name: newTabName,
              content: 'New Tab content'
            });
            this.editableTabsValue2 = newTabName;
          },
          removeTab(targetName) {
            let tabs = this.editableTabs2;
            let activeName = this.editableTabsValue2;
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

            this.editableTabsValue2 = activeName;
            this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
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
