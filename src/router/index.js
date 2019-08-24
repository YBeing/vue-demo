import Vue from 'vue'
import Router from 'vue-router'
import  Login from  '../views/Login'
import  Main from  '../views/Main'
import  Input from  '../views/tabs/Input'
// 用于嵌套的路由组件
import UserProfile from '../views/user/Profile'
import UserList from '../views/user/List'


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/login',
      component: Login,
      name: 'Login',
    }, {
      path: '/main',
      component: Main,
      name: 'Main',
      // 配置嵌套路由
      children: [
        {path: '/tabs/input', component: Input},
      ]

    }
  ]
})
