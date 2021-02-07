const NotFound = () => import(/* webpackChunkName: "notfound" */ '../components/NotFound.vue')

Vue.use(VueRouter)

const routes = [
  { path:'*', name:'notfound', component:NotFound }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
