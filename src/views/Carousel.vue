<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        name: "Carousel"
    }
</script>

<style scoped>
  #i1{
    /*background: url("../assets/images/beautiful-blue-christmas-2011367.jpg");*/
    background: url("../assets/images/beautiful-blue-christmas-2011367.jpg");

  }
  #i2{
    background: url("../assets/images/astrophotography-background-dark-746393.jpg");
  }
  #i3{
    background: url("../assets/images/coast-island-mountain-2821285.jpg");
  }
</style>
