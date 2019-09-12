import Vue from 'vue'
import Router from 'vue-router'
import  LoginPro from  '../views/LoginPro'
import MainNav from  '../views/MainNav'
import UserList from '../views/systemSetting/UserList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/loginPro',
    },
    {
      path: '/loginPro',
      component: LoginPro,
      name: 'LoginPro',
    }, {
      path: '/mainNav',
      component: MainNav,
      name: 'MainNav',
      meta : {
        requireAuth: true,
      },


    }, {
      path: '/list',
      component: UserList,
      name: 'UserList',
      meta : {
        requireAuth: true,
      },


    }
  ]
})
