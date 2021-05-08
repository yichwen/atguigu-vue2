import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import News from '../views/News'
import Message from '../views/Message'
import MessageDetail from '../views/MessageDetail'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        { 
          path: 'news',
          component: News 
        },
        {
          path: 'message',
          component: Message,
          children: [
            { 
              path: 'detail/:id',
              component: MessageDetail
            }
          ]
        },
        { 
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    {
      path: '/', 
      redirect: '/about'
    }
  ]
})
