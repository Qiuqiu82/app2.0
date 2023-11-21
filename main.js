import App from './App'
import axios from "./utils/request/request.js" 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
// Vue.config.devtools = true;
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.use(ElementPlus)
Vue.prototype.$axios = axios
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif