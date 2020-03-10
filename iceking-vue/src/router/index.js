import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Nav from '../views/Nav.vue'
import Home from '../views/Home.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import PageThree from '../views/PageThree.vue'
import PageFour from '../views/PageFour.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '导航一',
    component: Nav,
    redirect: "/pageOne",
    children:[{
        path: '/pageOne',
        name: 'PageOne',
        component: PageOne
    },
    {
        path: '/pageTwo',
        name: 'PageTwo',
        component: PageTwo
    },]
  },
  {
    path: '/nav',
    name: '导航二',
    component: Nav,
    children:[{
        path: '/pageThree',
        name: 'PageThree',
        component: PageThree
    },
    {
        path: '/pageFour',
        name: 'PageFour',
        component: PageFour
    },]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
