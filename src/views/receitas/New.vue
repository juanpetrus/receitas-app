<template>
  <Nav />
  <div class="container-fluid">
      <div class="row">
        <Sidebar />

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <h2>Criando Receita</h2>
          <hr>
          <p v-if="showError" class="alert alert-danger" role="alert">{{ showError }}</p>

          <form @submit.prevent="submit()" class="needs-validation">
            <div class="row">
              <div class="col-md-12 mb-3">
                <label for="firstName">Nome da receita:</label>
                <input type="text" v-model="form.name" class="form-control" placeholder="Nome da receita" required>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Ingradientes:</label>
                <textarea v-model="form.ingredientes" class="form-control"></textarea>
              </div>

              <div class="col-md-6 mb-3">
                <label for="lastName">Modo de preparo:</label>
                <textarea v-model="form.preparo" class="form-control"></textarea>
              </div>
            </div>
            <router-link to="/receitas" class="btn btn-danger m-3">
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
  name: 'Home',
  components: {
    Nav,
    Sidebar
  },
  data() {
    return {
      form: {
        name: '',
        ingredientes: '',
        preparo: ''
      },
      showError: ''
    }
  },
  methods: {
    submit() {
      api.post('/v1/receitas', this.form).then((response) => {
        this.$swal('Sucesso', 'Receita criada com sucesso!', 'success')
        this.$router.push('/receitas')
      }).catch((error) => {
        console.log(error.response)
        this.showError = error.response.data.message
      })
    }
  }
});
</script>