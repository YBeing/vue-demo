<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="6">
          <el-card class="box-card">
            <el-container  >
              <el-aside width="130px"  >
                <img src="../assets/images/礼品.png" height="70px">
              </el-aside>
              <el-container>
                <el-header height="30px"> <el-link type="warning">库存记录</el-link></el-header>
                <el-main><el-link type="info">200,100</el-link></el-main>
              </el-container>
            </el-container>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card class="box-card">
            <el-container  >
              <el-aside width="130px"  >
                <img src="../assets/images/植物.png" height="70px">
              </el-aside>
              <el-container>
                <el-header height="30px"> <el-link type="warning">用户管理</el-link></el-header>
                <el-main><el-link type="info">200,100</el-link></el-main>
              </el-container>
            </el-container>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card class="box-card">
            <el-container  >
              <el-aside width="130px"  >
                <img src="../assets/images/电视机.png" height="70px">
              </el-aside>
              <el-container>
                <el-header height="30px"> <el-link type="warning">公告展示</el-link></el-header>
                <el-main><el-link type="info">200,100</el-link></el-main>
              </el-container>
            </el-container>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card class="box-card">
            <el-container  >
              <el-aside width="130px"  >
                <img src="../assets/images/记事本.png" height="70px">
              </el-aside>
              <el-container>
                <el-header height="30px"> <el-link type="warning">票据管理</el-link></el-header>
                <el-main><el-link type="info">200,100</el-link></el-main>
              </el-container>
            </el-container>
          </el-card>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <div id="myChart" :style="{ height: '400px',marginTop :'70px'}"></div>



    </el-main>
  </el-container>


</template>

<script>
    export default {
      name: 'hello',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },
      mounted(){
        this.drawLine();
      },
      methods: {
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'));
          var colors = ['#5793f3', '#d14a61', '#675bba'];

          // 绘制图表
          myChart.setOption({
            color: colors,

            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross'
              }
            },
            grid: {
              right: '20%'
            },
            toolbox: {
              feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
              }
            },
            legend: {
              data:['蒸发量','降水量','平均温度']
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true
                },
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '蒸发量',
                min: 0,
                max: 250,
                position: 'right',
                axisLine: {
                  lineStyle: {
                    color: colors[0]
                  }
                },
                axisLabel: {
                  formatter: '{value} ml'
                }
              },
              {
                type: 'value',
                name: '降水量',
                min: 0,
                max: 250,
                position: 'right',
                offset: 80,
                axisLine: {
                  lineStyle: {
                    color: colors[1]
                  }
                },
                axisLabel: {
                  formatter: '{value} ml'
                }
              },
              {
                type: 'value',
                name: '温度',
                min: 0,
                max: 25,
                position: 'left',
                axisLine: {
                  lineStyle: {
                    color: colors[2]
                  }
                },
                axisLabel: {
                  formatter: '{value} °C'
                }
              }
            ],
            series: [
              {
                name:'蒸发量',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
              },
              {
                name:'降水量',
                type:'bar',
                yAxisIndex: 1,
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
              },
              {
                name:'平均温度',
                type:'line',
                yAxisIndex: 2,
                data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
              }
            ]
          });
        }
      }
    }

</script>

<style scoped>

  .box-card {
    width: 330px;
    height: 100px;
  }



</style>
