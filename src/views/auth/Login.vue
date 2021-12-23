<template>
<div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Receitas</h2>
        <div class="text-center mb-5 text-dark">Entrar com e-mail e senha</div>
        <div class="card my-5">

          <form @submit.prevent="submit()" class="card-body cardbody-color p-lg-5">

            <div class="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile">
            </div>

            <p v-if="showError" class="alert alert-danger" role="alert">{{ showError }}</p>

            <div class="mb-3">
              <input type="text" v-model="form.email" class="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="E-mail">
            </div>
            <div class="mb-3">
              <input type="password" v-model="form.password" class="form-control" id="password" placeholder="Senha">
            </div>
            <div class="text-center"><button type="submit" class="btn btn-color px-5 mb-5 w-100">Entrar</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">
              Não é registrado? <a href="/register" class="text-dark fw-bold"> Crie a sua conta aqui</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import api from '../../service/api'

export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      showError: ''
    }
  },
  methods: {
    submit() {
      api.post('/auth/login', this.form).then((response) => {
        const access = { token: response.data }
        this.$store.dispatch('defineUser', access)
        this.$router.push({name: 'Home'});
      }).catch((error) => {
        console.log(error.response)
        this.showError = error.response.data.message
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