export default [
  {
    name: 'Login',
    path: '/',
    component: () => import(/* webpackChunkName: "login" */ './Login.vue'),
  },
  {
    name: 'Register',
    path: '/register',
    component: () => import(/* webpackChunkName: "register" */ './Register.vue')
  }
]