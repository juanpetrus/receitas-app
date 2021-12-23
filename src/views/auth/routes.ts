export default [
  {
    name: 'Login',
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ './Login.vue'),
  },
  {
    name: 'Register',
    path: '/register',
    component: () => import(/* webpackChunkName: "register" */ './Register.vue')
  },
  {
    name: 'Forgot',
    path: '/forgot',
    component: () => import(/* webpackChunkName: "forgot" */ './Forgot.vue')
  },
  {
    name: 'Reset',
    path: '/reset-password',
    component: () => import(/* webpackChunkName: "forgot" */ './Reset.vue')
  }
]