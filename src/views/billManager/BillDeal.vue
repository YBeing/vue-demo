<template>
  <div  >
   <h3 style="font-family: 楷体; font-size: 26px; color: purple; text-align: center">浙江省财政电子票据</h3>
    <table style="margin-left: 23%; border-width: 2px; border-color: purple;border-style: solid; width: 50%;height: 500px">
      <div style="border-bottom-width: 1px; border-bottom-color: purple;border-bottom-style: solid ; width: 100%">

        <tr>

            <td style="padding-right: 80px;padding-left: 5px;">
              <div style="width: 100%;border-right: purple 1px solid; padding-right: 30px">
              <span style="font-size: 17px; color: purple">执收单位</span><br>
              <input type="text"><br>
              <span style="font-size: 17px; color: purple">交款人证件号</span><br>
              <input type="text">
              </div>
            </td>

            <td style="padding-right: 80px">
              <div style="width: 100%;border-right: purple 1px solid; padding-right: 30px">

              <span style="font-size: 17px; color: purple">交款人</span><br>
              <input type="text"><br>
              <span style="font-size: 17px; color: purple">交款人邮箱</span><br>
              <input type="text">
              </div>

            </td>


            <td style="padding-right: 50px">
              <span style="font-size: 17px; color: purple">交款人手机号</span><br>
              <input type="text"><br>
              <span style="font-size: 17px; color: purple">交款人性质</span><br>
              <input type="text">

            </td>
        </tr>


      </div>


      <div style="border-bottom-width: 1px; border-bottom-color: purple;border-bottom-style: solid ; width: 100%">

        <tr>
          <td style="padding-right: 90px"><span style="font-family: 楷体; font-size: 20px; color: purple">执收项目名称</span></td>
          <td style="padding-right: 90px"><span style="font-family: 楷体; font-size: 20px; color: purple">单位</span></td>
          <td style="padding-right: 90px"><span style="font-family: 楷体; font-size: 20px; color: purple">数量</span></td>
          <td style="padding-right: 90px"><span style="font-family: 楷体; font-size: 20px; color: purple">标准</span></td>
          <td style="padding-right: 60px"><span style="font-family: 楷体; font-size: 20px; color: purple">金额</span></td>
          <td style=""><span style="font-family: 楷体; font-size: 20px; color: purple">操作</span></td>

        </tr>



      </div>


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
