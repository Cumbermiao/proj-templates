// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store'
import '@/styles/index.scss'

Vue.use(ElementUI)

// 表单验证
Vue.use(Validation)

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

export default app
