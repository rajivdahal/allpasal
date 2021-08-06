import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import homepage from './components/homepage/home'
import registerandsignin from './components/registerandsignin/registerandsignin'
import Vuetify from 'vuetify'
import {Store} from './store/store'

Vue.use(Vuetify)

Vue.use(VueRouter);
const routes=[
  {path:'/',component:homepage},
  {path:'/registerandsignin',component:registerandsignin},

]
const router=new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  store:Store,
  router:router,
  render: h => h(App),
}).$mount('#app')
