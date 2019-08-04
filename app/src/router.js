import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/event',
      name: 'Event',
      component: () => import('@/views/Event.vue')
    },
    {
      path: '/mission',
      name: 'Mission',
      component: () => import('@/views/Mission.vue')
    },
    {
      path: '/post',
      name: 'Post',
      component: () => import('@/views/Post.vue')
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: () => import('@/views/Gallery.vue')
    }
  ]
})
