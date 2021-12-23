<template>
<div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Criação de conta</h2>
        <div class="text-center mb-5 text-dark">Comece a criar a melhor experiência possível</div>
        <div class="card my-5">
          <form @submit.prevent="submit" class="card-body cardbody-color p-lg-5" action="" method="">
            <div class="text-center">
              <p>Preencher formulários</p>
            </div>

            <p v-if="showError" class="alert alert-danger" role="alert">{{ showError }}</p>
            
            <div class="mb-3">
              <input v-model="form.name" class="form-control" type="text" placeholder="Digete seu nome" required>
            </div>

            <div class="mb-3">
              <input v-model="form.email" class="form-control" type="email" placeholder="Digete seu email" required>
            </div>

            <div class="mb-3">
              <input v-model="form.password" class="form-control" type="password" placeholder="Digite a senha" required>
            </div>

            <div class="form-label-wrapper">
              <input v-model="form.password_confirmation" class="form-control" type="password" placeholder="Confirme a senha" required>
            </div>

            <div class="text-center mt-3">
              <button class="btn btn-color px-5 mb-1 w-100">Criar</button>
              <router-link to="/" class="btn btn-color-return w-100">Voltar</router-link>
            </div>
            
          </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import api from '@/service/api';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      showError: ''
    }
  },
  methods: {
    submit() {
      api.post('/v1/users', this.form).then((response) => {
        this.$swal('Sucesso', this.form.name+' foi enviado uma confirmação para seu e-mail', 'success')
        this.$router.push({name: 'Login'})
      }).catch((error) => {
        console.log(error)
        this.showError = error.response.data.errors.full_messages
      })
    }
  }
}
</script>

<style>
.btn-color{
  background-color: #0e1c36;
  color: #fff;
  
}
.btn-color-return{
  background-color: #00369b;
  color: #fff;
}
.profile-image-pic{
  height: 200px;
  width: 200px;
  object-fit: cover;
}
.cardbody-color{
  background-color: #ebf2fa;
}
a{
  text-decoration: none;
}
</style>