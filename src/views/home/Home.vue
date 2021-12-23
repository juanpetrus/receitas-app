<template>
  <Nav />
  <div class="container-fluid">
    <div class="row">
      <Sidebar />
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <h2>Inicio</h2>
        <p class="alert alert-info">Seja Bem Vinda!</p>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Ingradientes</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(receita, index) in receitas" v-bind:key="receita.id">
                <td>{{index}}</td>
                <td>{{receita.name}}</td>
                <td>{{receita.ingredientes}}</td>
                <td>
                  <router-link :to="`/receita/${receita.id}`" class="btn btn-primary m-1"><i class="fa fa-eye"></i></router-link>
                  <router-link :to="`/receita/${receita.id}/edit`" class="btn btn-warning m-1"><i class="fa fa-edit"></i></router-link>
                  <a href="#" @click="removeReceita(receita.id)" class="btn btn-danger m-1"><i class="fa fa-trash"></i></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/components/layouts/Nav.vue'
import Sidebar from '@/components/layouts/Sidebar.vue'
import api from '@/service/api'

export default defineComponent({
  name: 'Receitas',
  components: {
    Nav,
    Sidebar
  },
  data() {
    return {
      receitas: [],
    }
  },
  created: function() {
    api.get('/v1/receitas').then((response) => {
      this.receitas = response.data
    })
  },
  methods: {
    removeReceita(id:any) {
      api.delete('/v1/receitas/'+id).then((response) => {
        location.reload();
      })
    }
  }
});
</script>
