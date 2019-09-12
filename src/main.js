import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'


Vue.config.productionTip = false;
Vue.prototype.$ajax=axios;
Vue.use(ElementUI);
Vue.use(VueRouter);
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  if (to.path === '/Login') {
    next()
  } else {
    // 这里的meta就是我们刚刚在路由里面配置的meta, key为登录token验证,未获取到token则强制跳转到登录页面（key需先在登录页面本地存储）
    if (to.meta.requireAuth && !sessionStorage.getItem('key')) {
      next({
        path: '/loginPro'
      })
    } else {
      // 无需登录的页面，可以继续访问
      next()
    }
  }
});
new Vue({
  el: '#app',
  router,
  render: h => h(App),

});

