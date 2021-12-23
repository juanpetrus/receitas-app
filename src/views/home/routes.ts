export default [
  {
    name: 'Home',
    path: '/home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './Home.vue'),
    meta: { requiresAuth: true }
  }
]