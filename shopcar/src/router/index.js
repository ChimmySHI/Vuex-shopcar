import Vue from 'vue'
import Router from 'vue-router'
import ShopCar from "../container/shopcar/index.vue"
import Car from "../container/shopcar/car.vue"
import Change from "../container/change"
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
    path: '/',
    name: 'shopcar',
    component: ShopCar
  }, {
    path: '/cars',
    name: 'car',
    component: Car
  }, {
    path: '/change',
    name: 'change',
    component: Change
  }]
})
