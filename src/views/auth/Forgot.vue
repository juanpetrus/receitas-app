<template>
  <div class="layer"></div>
  <main class="page-center">
    <article class="sign-up">
      <h1 class="sign-up__title">Recuperar senha!</h1>
      <form @submit.prevent="submit()" class="sign-up-form form" action="" method="">
        <p v-if="showError" id="error" class="alert alert-danger">{{ showError }}</p>
        <label class="form-label-wrapper">
          <p class="form-label">E-mail</p>
          <input v-model="form.email" class="form-input" type="email" placeholder="Digite seu e-mail" required>
        </label>
        <router-link to="/login" class="link-info forget-link">Voltar</router-link>
        <button class="form-btn primary-default-btn transparent-btn mt-1">Enviar</button>
      </form>
    </article>
  </main>
</template>

<script>
import api from '../../service/api'

export default {
  data() {
    return {
      form: {
        email: '',
      },
      showError: ''
    }
  },
  methods: {
    submit() {
      api.post('/auth/password', this.form).then((response) => {
        this.$swal('Sucesso', 'Foi enviado link para seu e-mail', 'success')
        this.$router.push('/')
      }).catch((error) => {
        console.log(error.response)
        this.showError = error.response.data.errors
      })
    }
  }
}
</script>

<style>

</style>