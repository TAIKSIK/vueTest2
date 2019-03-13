import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)
import car from "./views/car.vue"
import detail from "./views/detail.vue"
import error from "./views/error.vue"
// import footbar from "./views/footbar.vue"
import ground from "./views/ground.vue"
import home from "./views/Home.vue"
import login from "./views/login.vue"
import reg from "./views/reg.vue"
import user from "./views/user.vue"

let routes=[
  {path:'/home',component:home},
  {path:'/ground',component:ground},
  {path:'/car',component:car},
  {path:'/detail/:id',component:detail},
  {path:'/user',component:user},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/',redirect:'/home'},
  {path:'*',component:error}
]

export default new Router({
  routes:routes
})
