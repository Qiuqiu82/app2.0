<template>
  <div style="position: relative;">
    <!-- 大标题 -->
    <h1 class="main-title">碳际汇</h1>
    <!-- 小字 -->
    <h2 class="subtitle">节能用电</h2>

    <!-- 单选框 -->
    <el-radio-group size="large" v-model="radioValue" class="date-selector">
      <el-radio-button label="day">日</el-radio-button>
      <el-radio-button label="week">周</el-radio-button>
      <el-radio-button label="month">月</el-radio-button>
      <el-radio-button label="year">年</el-radio-button>
      <el-radio-button label="total">全</el-radio-button>
    </el-radio-group>

    <!-- 用电记录框 -->
    <div class="electricity-usage">
      <!-- 用电记录与时间 -->
      <div class="usage-time">
        <div class="row">
          <div>
            用电记录
            <p style="color: black;font-size: 25px;">
              xxxx/千瓦时
            </p>
          </div><span>2023年11月19日</span>
        </div>
      </div>

      <!-- Echart表格 -->
      <div ref="echart" class="echart-table"></div>

      <div class="electricity-list">
        <div v-for="(entry, index) in electricityData" :key="index" class="list-item">
          <div class="usage">用电{{ entry.usage }} 千瓦时</div>
          <div class="time">{{ entry.time }}</div>
        </div>
      </div>
    </div>

    <!-- 底部文字 -->
    <p class="bottom-text">您的本月耗电XXkwh,相较上月增长了xxkwh,环比增长XX%同比增长XX%</p>
    <p class="bottom-text"><img :src="icon1" style="width: 30px;height: 30px;" />前五位可能高额耗电电器(暂不开放)</p>
  </div> 
</template>

<script>
import * as echarts from 'echarts';
import { ElRadioButton } from 'element-plus';
import icon1 from '../../static/img/iconn1.png'
export default {
  data() {
    return {
      radioValue: 'day', // 默认选中日
      electricityData: [
        { usage: 30, time: '2023-11-19 08:30:00' },
        { usage: 40, time: '2023-11-19 09:00:00' },
        // Add more data entries as needed
      ],
    };
  },
	components: {
      ElRadioButton
    },
  mounted() {
    // Initialize ECharts in the mounted hook
    this.initEchart();
  },
  methods: {
	// backShop(){
	//   uni.navigateTo({
	//     url: '/pages/shop/shop'
	//   });
	// },
    initEchart() {
      // Get the DOM element to render the chart
      const chartContainer = this.$refs.echart;

      // Create an ECharts instance
      const myChart = echarts.init(chartContainer);

      // Set ECharts options
      const options = {
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [30, 40, 20, 50, 35, 60, 10],
            type: 'line',
          },
        ],
      };

      // Set options and render the chart
      myChart.setOption(options);
    },
  },
};

</script>

<style scoped>
html,
body {
  height: 100%;
  width: 100%;
}

#app {
  height: 100%;
  width: 50%;
  margin: auto;
  max-width: 800px;
  min-width: 600px;
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 600px;
  /* Set minimum width */
  margin: 0 auto;
  /* Center horizontally */
  height: 100vh;
}

.main-title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: left;
}

.subtitle {
  color: #666;
}

.date-selector {
  margin-bottom: 20px;
}

.electricity-usage {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.echart-table {
  width: 100%;
  /* Make the chart container take the full width */
  height: 300px;
}

.bottom-text {
  font-size: 18px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row {
  display: flex;
  justify-content: space-around;
  color: #676;
}

.electricity-list {
  max-width: 600px;
  margin: 20px auto;
}

.list-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.usage {
  font-weight: bold;
}

.time {
  text-align: right;
  color: #888;
}
</style>
