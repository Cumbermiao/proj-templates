import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Page1 from '@/views/page1'

const router = new Router({
  routes:[
    {
      path: '/',
      components: Page1
    }
  ]
})
export default router