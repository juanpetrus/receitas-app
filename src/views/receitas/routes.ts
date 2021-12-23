export default [
  {
    name: 'Receitas',
    path: '/receitas',
    component: () => import('./Receitas.vue'),
    meta: { requiresAuth: true }
  },
  {
    name: 'Nova Receitas',
    path: '/receita/new',
    component: () => import('./New.vue'),
    meta: { requiresAuth: true }
  },
  {
    name: 'Show Receita',
    path: '/receita/:id',
    component: () => import('./Show.vue'),
    props: true,
    meta: { requiresAuth: true }
  },
  {
    name: 'Edit Receita',
    path: '/receita/:id/edit',
    component: () => import('./Edit.vue'),
    props: true,
    meta: { requiresAuth: true }
  }
]