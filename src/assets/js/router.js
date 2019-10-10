import VueRouter from 'vue-router'

import index from '../../components/index.vue'
import home from '../../components/home.vue'
import nationwide from '../../components/area/nationwide.vue'
import login from '../../components/login/login.vue'
import wx from '../../components/login/wx.vue'
import wb from '../../components/login/weibo.vue'
import find from '../../components/nav/find.vue'
import store from '../../components/nav/store.vue'
import detail from '../../components/detail/detail.vue'
import buyProduct from '../../components/detail/buy_product.vue'
import productDetail from '../../components/detail/product_detail.vue'
import mycar from '../../components/detail/mycar.vue'

export default new VueRouter({
  routes:[
    {
      path:'/',
      component:index,
      children:[
        {
          path:'/home',
          component:home
        }
      ],
      redirect:'/home'
    },
    // {
    //   path:'/nav-one',
    //   component:nav
    // },
    {
      path:'/nationwide',
      component:nationwide
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/wx',
      component:wx
    },
    {
      path:'/weibo',
      component:wb
    },
    {
      path:'/find',
      component:find
    },
    {
      path:'/store',
      component:store
    },
    {
      path:'/detail',
      component:detail
    },
    {
      path:'/buy_product',
      component:buyProduct
    },
    {
      path:'/product_detail',
      component:productDetail
    },
    {
      path:'/mycar',
      component:mycar
    }
  ]
})
