<template>
    <div>
      <el-container>
        <el-header >
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          </el-menu>
        </el-header>
        <el-container>
          <el-aside width="400px">
            <el-col :span="12">
              <h5>默认颜色</h5>
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

    </div>
</template>

<script>
    export default {
        name: "MainNav"
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

  .el-carousel__item:nth-child(1n) {
    /*background-color: red;*/
    /*background: url("../assets/images/beverage-blurred-background-breakfast-2410571.jpg");*/
  }

  .el-carousel__item:nth-child(3n) {
    /*background-color: #d3dce6;*/
    /*background: url("../assets/images/beverage-blurred-background-breakfast-2410571.jpg");*/

  }
  #i1{
    background: url("../assets/images/beverage-blurred-background-breakfast-2410571.jpg");
  }
  #i2{
    background: url("../assets/images/120mm-120mm-film-analog-photography-2823132.jpg");
  }
  #i3{
    background: url("../assets/images/architecture-building-business-2225380.jpg");
  }
  .el-menu-demo{
    padding-left: 400px;
  }
</style>
