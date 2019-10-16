<template>
  <div  >
   <h3 style="font-family: 楷体; font-size: 26px; color: purple; text-align: center">浙江省财政电子票据</h3>
    <table     style="margin-left: 23%; border-width: 2px; border-color: purple;border-style: solid; width: 50%;height: 300px">
      <div style="border-bottom-width: 1px; border-bottom-color: purple;border-bottom-style: solid ; width: 100%">
        <tbody>
        <tr>

            <td style="padding-right: 80px;padding-left: 5px;">
              <div style="width: 100%;border-right: purple 1px solid; padding-right: 20px">
              <span style="font-size: 17px; color: purple">执收单位</span><br>
<!--              <input type="text"><br>-->
                <el-select size="mini" v-model="unitcode" placeholder="">
                  <el-option
                    v-for="item in unit"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select><br>
              <span style="font-size: 17px; color: purple">交款人证件号</span><br>
<!--              <input type="text">-->
                <el-input size="mini" v-model="idcard" placeholder=""></el-input>

              </div>
            </td>

            <td style="padding-right: 80px">
              <div style="width: 100%;border-right: purple 1px solid; padding-right: 30px">

              <span style="font-size: 17px; color: purple">交款人</span><br>
<!--              <input type="text"><br>-->
                <el-input size="mini" v-model="payer" placeholder=""></el-input>

                <span style="font-size: 17px; color: purple">交款人邮箱</span><br>
<!--              <input type="text">-->
                <el-input size="mini" v-model="email" placeholder=""></el-input>

              </div>

            </td>


            <td style="padding-right: 50px">
              <span style="font-size: 17px; color: purple">交款人手机号</span><br>
<!--              <input type="text"><br>-->
              <el-input size="mini" v-model="tel" placeholder=""></el-input><br>
              <span style="font-size: 17px; color: purple">交款人性质</span><br>
<!--              <input type="text">-->
              <el-input size="mini" v-model="payerType" placeholder=""></el-input>

            </td>
        </tr>

        </tbody>
      </div>


      <div style="border-bottom-width: 1px; border-bottom-color: purple;border-bottom-style: solid ; width: 100%">

        <tr>
          <td style="padding-right: 110px"><span style="font-family: 楷体; font-size: 20px; color: purple">执收项目名称</span></td>
          <td style="padding-right: 100px"><span style="font-family: 楷体; font-size: 20px; color: purple">单位</span></td>
          <td style="padding-right: 100px"><span style="font-family: 楷体; font-size: 20px; color: purple">数量</span></td>
          <td style="padding-right: 100px"><span style="font-family: 楷体; font-size: 20px; color: purple">标准</span></td>
          <td style="padding-right: 97px"><span style="font-family: 楷体; font-size: 20px; color: purple">金额</span></td>
          <td style=""><el-link  @click="addRows" :underline="false" icon="el-icon-circle-plus"></el-link></td>

        </tr>



      </div>

      <div  id="addRowsTr"   style="border-bottom-width: 1px; border-bottom-color: purple;border-bottom-style: solid ; width: 100%;height: 200px">
            <tr class="addrowType" v-if="showflag1">
              <td style="padding-right: 0px">
                <el-select  size="mini" v-model="chargeitemcode1" placeholder="">
                <el-option
                  v-for="item in chargeitem"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select></td>
              <td style="padding-right: 0px"><el-input size="mini" v-model="unti1" placeholder=""></el-input></td>
              <td style=" "><el-input size="mini" v-model="count1" placeholder=""></el-input></td>
              <td style="padding-right: 0px"><el-input size="mini" v-model="price1" placeholder=""></el-input></td>
              <td style="padding-right: 0px"><el-input size="mini" v-model="money1" placeholder=""></el-input></td>
              <td style="padding-left: 2px"><el-link @click="removeRows(1)" :underline="false" icon="el-icon-remove" ></el-link></td>

            </tr>


            <tr class="addrowType" v-if="showflag2">
              <td style="padding-right: 0px">
                <el-select  size="mini" v-model="chargeitemcode2" placeholder="" >
                <el-option
                  v-for="item in chargeitem"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select></td>
              <td style="padding-right: 0px"><el-input size="mini" v-model="unit2" placeholder=""></el-input></td>
              <td style=" "><el-input size="mini" v-model="count2" placeholder=""></el-input></td>
              <td style="padding-right: 0px"><el-input size="mini" v-model="price2" placeholder=""></el-input></td>
              <td style="padding-right: 0px"><el-input size="mini" v-model="money2" placeholder=""></el-input></td>
              <td style="padding-left: 2px"><el-link @click="removeRows(2)" :underline="false" icon="el-icon-remove" ></el-link></td>

            </tr>

            <tr class="addrowType" v-if="showflag3">
              <td style="padding-right: 0px">
                <el-select  size="mini" v-model="chargeitemcode3" placeholder="">
                  <el-option
                    v-for="item in chargeitem"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select></td>
              <td style="padding-right: 0px"><el-input size="mini" v-model="unit3" placeholder=""></el-input></td>
              <td style=" "><el-input size="mini" v-model="count3" placeholder=""></el-input></td>
              <td style="padding-right: 0px"><el-input size="mini" v-model="price3" placeholder=""></el-input></td>
              <td style="padding-right: 0px"><el-input size="mini" v-model="money3" placeholder=""></el-input></td>
              <td style="padding-left: 2px"><el-link @click="removeRows(3)" :underline="false" icon="el-icon-remove" ></el-link></td>

            </tr>

          <tr class="addrowType" v-if="showflag4">
            <td style="padding-right: 0px">
              <el-select  size="mini" v-model="chargeitemcode4" placeholder="">
                <el-option
                  v-for="item in chargeitem"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select></td>
            <td style="padding-right: 0px"><el-input size="mini" v-model="unit4" placeholder=""></el-input></td>
            <td style=" "><el-input size="mini" v-model="count4" placeholder=""></el-input></td>
            <td style="padding-right: 0px"><el-input size="mini" v-model="price4" placeholder=""></el-input></td>
            <td style="padding-right: 0px"><el-input size="mini" v-model="money4" placeholder=""></el-input></td>
            <td style="padding-left: 2px"><el-link @click="removeRows(4)" :underline="false" icon="el-icon-remove" ></el-link></td>

          </tr>

        <tr class="addrowType" v-if="showflag5">
          <td style="padding-right: 0px">
            <el-select  size="mini" v-model="chargeitemcode5" placeholder="">
              <el-option
                v-for="item in chargeitem"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select></td>
          <td style="padding-right: 0px"><el-input size="mini" v-model="unit5" placeholder=""></el-input></td>
          <td style=" "><el-input size="mini" v-model="count5" placeholder=""></el-input></td>
          <td style="padding-right: 0px"><el-input size="mini" v-model="price5" placeholder=""></el-input></td>
          <td style="padding-right: 0px"><el-input size="mini" v-model="money5" placeholder=""></el-input></td>
          <td style="padding-left: 2px"><el-link @click="removeRows(5)" :underline="false" icon="el-icon-remove" ></el-link></td>

        </tr>



      </div>


      <div style="border-bottom-width: 2px; border-bottom-color: purple;border-bottom-style: solid ; width: 100%">

        <tr>
          <td style="padding-right: 0px"><span style="font-family: 楷体; font-size: 20px; color: purple">合计(大写)</span></td>
<!--          <td style="padding-right: 100px"><input input style="width: 300px" type="text"></td>-->
          <td style="padding-right: 100px"><el-input size="mini" v-model="total" placeholder=""></el-input></td>
          <td style="padding-right: 0px"><span style="font-family: 楷体; font-size: 20px; color: purple">￥:</span></td>
<!--          <td style="padding-right: 0px"><input style="width: 190px" type="text"></td>-->
          <td style="padding-right: 0px"><el-input size="mini" v-model="RMB" placeholder=""></el-input></td>

        </tr>

      </div>

      <div style="border-bottom-width: 2px; width: 100%;height: 50px; margin-top: 0px">

        <tr>

            <td style="padding-right: 60px"><span style="font-family: 楷体; font-size: 20px; color: purple">备注</span></td>


            <td style="">
<!--              <textarea style="width: 630px"/>-->
              <el-input style="width: 600px" size="mini" v-model="remark" placeholder=""></el-input>
            </td>
            <td style="">  <el-link style="font-size: 19px; color: purple;  margin-left: 30px" type="info" @click="makeBill" >填开</el-link></td>

        </tr>

      </div>



    </table>
    <span style="margin-left: 380px;   font-family: 楷体; font-size: 20px; color: purple">复核人(章):</span><el-input style="width: 170px" size="mini" v-model="checker" placeholder=""></el-input> <span style="font-family: 楷体; font-size: 20px; color: purple;margin-left: 40px;">收款人(签章):管理员</span> <span style="font-family: 楷体; font-size: 20px; color: purple;margin-left: 90px;">2019年  10月  1日</span>
  </div>
</template>

<script>
  import Vue from 'vue'

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
          },
          unit: [],
          unitcode: "",
          chargeitemcode: "",
          chargeitem: [],
          value: '',
          input: '',
          addRowindex:1,
          showflag1:true,
          showflag2:false,
          showflag3:false,
          showflag4:false,
          showflag5:false,
          idcard:"",
          payer :"",
          email :"",
          tel :"",
          payerType :"",
          total :"",
          RMB :"",
          remark :"",
          checker :"",
          chargeitemcode1 :"",
          unti1 :"",
          count1 :"",
          price1 :"",
          money1 :"",
          chargeitemcode2 :"",
          unti2 :"",
          count2 :"",
          price2 :"",
          money2 :"",
          chargeitemcode3 :"",
          unti3 :"",
          count3 :"",
          price3 :"",
          money3 :"",
          chargeitemcode4 :"",
          unti4 :"",
          count4 :"",
          price4 :"",
          money4 :"",
          chargeitemcode5 :"",
          unti5 :"",
          count5 :"",
          price5 :"",
          money5 :"",

        }
      },
      mounted:function () {
        this.getChargeitemAndUnit();

      },
      methods:{
        addRows(){
            let oldindex=this.addRowindex;
            let newindex=oldindex+1;
            if (newindex<6){

              this.addRowindex=newindex;
              if (newindex==1) {
                this.showflag1=true;
              }
              if (newindex==2) {
                this.showflag2=true;
              }
              if(newindex==3){
                this.showflag3=true;

              }
              if(newindex==4){
                this.showflag4=true;
              }
              if(newindex==5){
                this.showflag5=true;
              }
          }
         /*var node =document.getElementById("addRowsTr").lastChild;
         var cloneNode = node.cloneNode(true);
         document.getElementById("addRowsTr").appendChild(cloneNode);*/
        },
        removeRows(index){
          if(index==1){
            this.showflag1=false;
          }
          if (index==2) {
            this.showflag2=false;
          }
          if(index==3){
            this.showflag3=false;

          }
          if(index==4){
            this.showflag4=false;
          }
          if(index==5){
            this.showflag5=false;
          }
          this.addRowindex=this.addRowindex-1;

        },
        getChargeitemAndUnit(){
          this.$ajax.get('http://localhost:9080/springboot-vue/unit/getAllUnit').then( res => {
            this.unit=res.data;
          }).catch(err => {
            console.log(err)
          });
          this.$ajax.get('http://localhost:9080/springboot-vue/xtchargeitem/getAllChargeitemSelectBox').then( res => {
            this.chargeitem=res.data;
          }).catch(err => {
            console.log(err)
          });
        },
        makeBill(){
         /* let record;
          record.unitcode=this.unitcode==null ||this.unitcode==undefined ? "":record.unitcode;
          record.chargeitemcode= this.chargeitemcode ==null ||this.chargeitemcode==undefined ? "":record.chargeitemcode;
          record.idcard =this.idcard ==null ||this.idcard==undefined ? "":record.idcard;
          record.payer=this.payer==null ||this.payer==undefined ? "":record.payer;
          record.email=this.email  ==null ||this.email==undefined ? "":record.email;
          record.tel=this.tel ==null ||this.tel==undefined ? "":record.tel;
          record.payerType=this.payerType==null ||this.payerType==undefined ? "":record.payerType;
          record.total=this.total==null ||this.total==undefined ? "":record.total;
          record.RMB=this.RMB==null ||this.RMB==undefined ? "":record.RMB;
          record.remark=this.remark==null ||this.remark==undefined ? "":record.remark;
          record.chargeitemcode1 =this.chargeitemcode1==null ||this.chargeitemcode1==undefined ? "":record.chargeitemcode1;
          record.chargeitemcode2 =this.chargeitemcode2==null ||this.chargeitemcode2==undefined ? "":record.chargeitemcode2;
          record.chargeitemcode3 =this.chargeitemcode3==null ||this.chargeitemcode3==undefined ? "":record.chargeitemcode3;
          record.chargeitemcode4 =this.chargeitemcode4==null ||this.chargeitemcode4==undefined ? "":record.chargeitemcode4;
          record.chargeitemcode5 =this.chargeitemcode5==null ||this.chargeitemcode5==undefined ? "":record.chargeitemcode5;
          record.unti1=this.unti1==null ||this.unti1==undefined ? "":record.unti1;
          record.unti2=this.unti2==null ||this.unti2==undefined ? "":record.unti2;
          record.unti3=this.unti3==null ||this.unti3==undefined ? "":record.unti3;
          record.unti4=this.unti4==null ||this.unti4==undefined ? "":record.unti4;
          record.unti5=this.unti5==null ||this.unti5==undefined ? "":record.unti5;
          record.count1= this.count1==null ||this.count1==undefined ? "":record.count1;
          record.count2= this.count2==null ||this.count2==undefined ? "":record.count2;
          record.count3= this.count3==null ||this.count3==undefined ? "":record.count3;
          record.count4= this.count4==null ||this.count4==undefined ? "":record.count4;
          record.count5= this.count5==null ||this.count5==undefined ? "":record.count5;
          record.price1= this.price1==null ||this.price1==undefined ? "":record.price1;
          record.price2= this.price2==null ||this.price2==undefined ? "":record.price2;
          record.price3= this.price3==null ||this.price3==undefined ? "":record.price3;
          record.price4= this.price4==null ||this.price4==undefined ? "":record.price4;
          record.price5= this.price5==null ||this.price5==undefined ? "":record.price5;
          record.money1= this.money1==null ||this.money1==undefined ? "":record.money1;
          record.money2= this.money2==null ||this.money2==undefined ? "":record.money2;
          record.money3= this.money3==null ||this.money3==undefined ? "":record.money3;
          record.money4= this.money4==null ||this.money4==undefined ? "":record.money4;
          record.money5= this.money5==null ||this.money5==undefined ? "":record.money5;*/
          this.$ajax({
            method:"post",
            url: "http://localhost:9080/springboot-vue/zsbillinfo/makebill",
            data: {
              unitcode: this.unitcode,
              chargeitemcode:this.chargeitemcode,
              idcard:this.idcard,
              payer:this.payer,
              email:this.email,
              tel:this.tel,
              payerType:this.payerType,
              total:this.total,
              RMB:this.RMB,
              remark:this.remark,
              checker:this.checker,
              chargeitemcode1:this.chargeitemcode1,
              chargeitemcode2:this.chargeitemcode2,
              chargeitemcode3:this.chargeitemcode3,
              chargeitemcode4:this.chargeitemcode4,
              chargeitemcode5:this.chargeitemcode5,
              unti1:this.unti1,
              unti2:this.unti2,
              unti3:this.unti3,
              unti4:this.unti4,
              unti5:this.unti5,
              count1:this.count1,
              count2:this.count2,
              count3:this.count3,
              count4:this.count4,
              count5:this.count5,
              price1:this.price1,
              price2:this.price2,
              price3:this.price3,
              price4:this.price4,
              price5:this.price5,
              money1:this.money1,
              money2:this.money2,
              money3:this.money3,
              money4:this.money4,
              money5:this.money5,

            }

          }).then(resp => {
            this.getData()
          }).catch(err => {
            console.log('请求失败：'+err.status+','+err.statusText);
          });
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
