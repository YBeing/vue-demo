<template>
    <el-container class="el-menu-body">
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item class="el-icon-search"  index="1">发现音乐</el-menu-item>
          <el-menu-item class="el-icon-service" index="2">我的音乐</a></el-menu-item>
          <el-menu-item class="el-icon-star-on" index="3">音乐人</a></el-menu-item>

        </el-menu>
      </el-header>
      <el-main>
        <tabl></tabl>
      </el-main>

    </el-container>
</template>

<script>
  import  Table from  '../views/tabs/Table';
    export default {

      name: "MainPro",
      components:{
        tabl:Table
      },
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style lang="scss" scoped>
  .el-menu-body{
    /*background-color: #42b983;*/
  }
  .el-menu-demo{
    /*background-color: #42b983;*/
    padding-left: 600px;

  }
</style>
