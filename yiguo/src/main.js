import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "./assets/css/frameui.css"
import "./assets/css/index.css"
import "./assets/css/widget/slider.css"
// import "./assets/js/jquery.min.js"
// import 'jquery'
// import "./assets/js/amazeui.js"

// import "./assets/js/handlebars.min.js"
// import "./assets/js/amazeui.widgets.helper.min.js"


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
