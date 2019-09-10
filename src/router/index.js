import Vue from 'vue'
import Router from 'vue-router'
import  Login from  '../views/Login'
import  LoginPro from  '../views/LoginPro'
import  Input from  '../views/tabs/Input'
import  MainPro from  '../views/MainPro'
import MainNav from  '../views/MainNav'
// 用于嵌套的路由组件
import UserProfile from '../views/user/Profile'
import UserList from '../views/user/List'
import Table from '../views/tabs/Table'
import MenuTree from '../views/tabs/MenuTree'


Vue.use(Router)

export default new Router({
  // mode:'history',
  // base: '/dist',
  routes: [
    {
      path: '/',
      redirect: '/mainNav',
    },
    {
      path: '/login',
      component: Login,
      name: 'Login',
    },{
      path: '/loginPro',
      component: LoginPro,
      name: 'LoginPro',
    },  {
      path: '/mainPro',
      component: MainPro,
      name: 'MainPro',
      children: [
        {path:'tabs/table',component:Table}
      ]

    }, {
      path: '/mainNav',
      component: MainNav,
      name: 'MainNav',
     /* children:[
        {path:'/tabs/menuTree',component:MenuTree}
      ]*/


    }, {
      path: '/list',
      component: UserList,
      name: 'UserList',
     /* children:[
        {path:'/tabs/menuTree',component:MenuTree}
      ]*/


    }
  ]
})
