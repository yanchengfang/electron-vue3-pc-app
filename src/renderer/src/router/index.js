import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@views/Home.vue'
import List from '@views/List.vue'
import Foods from '@pages/List/foods.vue'
import Clothes from '@pages/List/clothes.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  { 
    /**
     * 子级路由的组件只会渲染在其父路由组件内部的 <router-view> 中，
     * 而不会“越级”匹配到根组件的 <router-view>，这是由 Vue Router 的“嵌套路由”规则和“路由匹配算法”严格保证的
     */
    path: '/list',
    redirect: '/list/clothes',
    component: List,
    children: [
      //子路由的 path 以 / 开头：这会让它变成绝对路径，而不是相对父路径
      {path: 'foods', component: Foods },
      {path: 'clothes', component: Clothes },
    ]
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
