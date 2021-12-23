import { routes as login } from '@/views/auth'
import { routes as home } from '@/views/home'
import { routes as receitas } from '@/views/receitas'


export default [ 
  ...login,
  ...home,
  ...receitas,
]