<template>
  <div>
    <el-container>
      <el-aside width="200px">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1" >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="addTab(editableTabsValue2)">选项一</el-menu-item>
            <el-menu-item index="1-2">选项二</el-menu-item>
          </el-menu-item-group>

            <el-menu-item index="1-3">选项四</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

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
  </div>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 800px;
  }
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
      }
    }
  }
</script>
