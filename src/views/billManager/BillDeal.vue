<template>
  <div  >
   <h3 style="font-family: 楷体; font-size: 26px; color: purple; text-align: center">浙江省财政电子票据</h3>
    <table style="margin-left: 13%; border-width: 2px; border-color: purple;border-style: solid; width: 70%;height: 500px">


    </table>
  </div>
</template>

<script>
    export default {
      name: "BillDeal",
      data() {
        return {
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          }
        }
      }
    }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .bg-purple{
    /*background-color: #a0cfff;*/
  }

</style>
