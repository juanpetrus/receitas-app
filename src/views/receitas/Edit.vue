<template>
  <Nav />
  <div class="container-fluid">
      <div class="row">
        <Sidebar />

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <h2>Editando Receita</h2>

          <p v-if="showError" class="alert alert-danger" role="alert">{{ showError }}</p>

          <form @submit.prevent="submit()" class="needs-validation">
            <div class="row">
              <div class="col-md-12 mb-3">
                <label for="firstName">Receitas:</label>
                <input type="text" v-model="receita.name" class="form-control" placeholder="" required>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Ingradientes</label>
                <input type="text" v-model="receita.ingredientes" class="form-control" placeholder="" required>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <label for="lastName">Modo de preparo</label>
                <input type="text" v-model="receita.preparo" class="form-control" placeholder="" required>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>
        
            <hr class="mb-2">

            <router-link to="/receitas" class="btn btn-danger m-1">
              <i class="fa fa-angle-left"></i> Voltar
            </router-link>
            <button class="btn btn-primary" type="submit">Salvar</button>
          </form>
        </main>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/components/layouts/Nav.vue'
import Sidebar from '@/components/layouts/Sidebar.vue'
import api from '../../service/api'


export default defineComponent({
  name: 'Edit',
  components: {
    Nav,
    Sidebar
  },
  props: ['id'],
  data() {
    return {
      showError: '',
      receita: {}
    }
  },
  created: function() {
    api.get('/v1/receitas/'+this.id).then((response) => {
      console.log(response)
      this.receita = response.data
    })
  },
  methods: {
    submit() {
      api.put('/v1/receitas/'+this.id, this.receita).then((response) => {
        this.$swal('Sucesso', 'Receita editada com sucesso!', 'success')
        this.$router.push('/receitas')
      }).catch((error) => {
        console.log(error.response)
        this.showError = error.response.data.message
      })
    }
  }
});
</script>