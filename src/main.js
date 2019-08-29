import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.prototype.$ajax=axios;
Vue.use(ElementUI);
Vue.use(VueRouter);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
