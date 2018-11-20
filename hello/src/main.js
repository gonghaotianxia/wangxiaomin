// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'swiper'
// import 'swiper/dist/css/swiper.min.css'
import '../src/assets/js/flexible_css.debug'
import '../src/assets/js/flexible.debug'
import Myindex from './components/Myindex'
import faxian from './components/faxian'
import goumai from './components/goumai'
import wanpan from './components/wanpan'
import myde from './components/myde'
import '../static/4.7.0/css/font-awesome.min.css'
import motaichuang from '@/components/motaichuang'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
