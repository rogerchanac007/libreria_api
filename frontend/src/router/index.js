import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListLibro from '@/components/Libro/ListLibro.vue'
import EditLibro from '@/components/Libro/EditLibro.vue'
import DeleteLibro from '@/components/Libro/DeleteLibro.vue'
import CreateLibro from '@/components/Libro/CreateLibro.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/libros',
    name:'ListLibro',
    component:ListLibro,
  },
  {
    path:'/libros/:libroId/edit',
    name:'EditLibro',
    component:EditLibro,
  },
  {
    path:'/libros/:libroId/Delete',
    name:'DeleteLibro',
    component:DeleteLibro,
  },
  {
    path:'/libros/Create',
    name:'CreateLibro',
    component:CreateLibro,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
