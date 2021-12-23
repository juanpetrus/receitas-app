<template>
  <Nav />
  <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <h2>{{receita.name}}</h2>
          <hr>
          <strong>Ingredientes:</strong>
          <p>{{receita.ingredientes}}</p>
          <strong>Modo de Preparo:</strong>
          <p>{{receita.preparo}}</p>
          <router-link to="/receitas" class="btn btn-primary m-3">
            <i class="fa fa-angle-left"></i> Voltar
          </router-link>
        </main>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import api from '@/service/api'
import Nav from '@/components/layouts/Nav.vue'
import Sidebar from '@/components/layouts/Sidebar.vue'

export default defineComponent({
  name: 'Show',
  components: {
    Nav,
    Sidebar
  },
  props: ['id'],
  data() {
    return {
      receita: {}
    }
  },
  created: function () {
    api.get('/v1/receitas/'+this.id).then((response) => {
      console.log(response)
      this.receita = response.data
    })
  }
})
</script>
