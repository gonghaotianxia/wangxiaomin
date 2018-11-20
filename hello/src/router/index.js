import Vue from 'vue'
import Router from 'vue-router'
import Myindex from '@/components/Myindex'
import faxian from '@/components/faxian'
import goumai from '@/components/goumai'
import wanpan from '@/components/wanpan'
import myde from '@/components/myde'
import motaichuang from '@/components/motaichuang'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Myindex',
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
    {
      path: '/myde',
      name: 'myde',
      component: myde
    },
    {
      path: '/motaichuang',
      name: 'motaichuang',
      component: motaichuang
    },
  ]
})
