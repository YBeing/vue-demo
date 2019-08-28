import Vue from 'vue'
import Router from 'vue-router'
import  Login from  '../views/Login'
import  LoginPro from  '../views/LoginPro'
import  Main from  '../views/Main'
import  Input from  '../views/tabs/Input'
import  MainPro from  '../views/MainPro'
// 用于嵌套的路由组件
import UserProfile from '../views/user/Profile'
import UserList from '../views/user/List'
import Table from '../views/tabs/Table'


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/login',
      component: Login,
      name: 'Login',
    },{
      path: '/loginPro',
      component: LoginPro,
      name: 'LoginPro',
    }, {
      path: '/main',
      component: Main,
      name: 'Main',
      // 配置嵌套路由
      children: [
        {path: '/tabs/input', component: Input},
      ]

    }, {
      path: '/mainPro',
      component: MainPro,
      name: 'MainPro',
      children: [
        {path:'tabs/table',component:Table}
      ]



    }
  ]
})
