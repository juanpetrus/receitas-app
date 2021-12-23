/* eslint-disable */
import { Store } from 'vuex'
declare module '@vue/runtime-core' {
  interface State {}
  interface ComponentCustomProperties { 
    $store: Store<State>
  }
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
