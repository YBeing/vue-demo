<template>
<!--  <div id="i1">-->
    <el-container v-bind:style="{width:'100%',height:'900px', margin:'0px',padding:'0px',backgroundColor:'#545c64' }">
      <el-header v-bind:style="{width:'100%',backgroundColor:'#545c64' }">

        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b" v-bind:style="{width:'100%',float:'center'}">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>

      </el-header>
      <el-container>
        <el-aside >
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
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
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
            <el-tab-pane
              v-for="(item, index) in editableTabs2"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
              <input2></input2>
              <span>{{item.name}}</span>

            </el-tab-pane>
          </el-tabs>
        </el-main>
        </el-container>
    </el-container>
<!--  </div>-->
</template>

<style>
  /*.el-menu-vertical-demo:not(.el-menu--collapse) {

    min-height: 800px;
  }
  .el-menu-demo{
    width: 100%;


  }
  #i1{

    height: 100%;


  }*/
</style>

<script>
  import  Input from  '../views/tabs/Input';
  import  Form from  '../views/tabs/Form';

  export default {

    name:'Main',
    components:{
      input1:Input,
      input2:Form
    },
    data() {
      return {
        isCollapse: true,
        editableTabsValue2: '2',
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }],
        tabIndex: 1,
        activeIndex: '1',
        activeIndex2: '1'


      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        alert(newTabName)

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
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
