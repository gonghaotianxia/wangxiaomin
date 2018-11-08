import Vue from 'vue'
import Router from 'vue-router'
import Myindex from '@/components/Myindex'
import faxian from '@/components/faxian'
import goumai from '@/components/goumai'
import wanpan from '@/components/wanpan'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Myindex',
      component: Myindex
    },  
    {
      path: '/faxian',
      name: 'faxian',
      component: faxian
    },
    {
      path: '/goumai',
      name: 'goumai',
      component: goumai
    },
    {
      path: '/wanpan',
      name: 'wanpan',
      component: wanpan
    },
  ]
})
