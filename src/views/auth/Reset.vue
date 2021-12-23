<template>
  <div class="layer"></div>
  <main class="page-center">
    <article class="sign-up">
      <h1 class="sign-up__title">Atualizar senha!</h1>
      <p class="sign-up__subtitle">Redefinição de senha</p>
      <form @submit.prevent="submit()" class="sign-up-form form" action="" method="">
        <p v-if="showError" class="alert alert-danger" role="alert">{{ showError }}</p>
        <label class="form-label-wrapper">
          <p class="form-label">Senha:</p>
          <input v-model="form.password" class="form-input" type="password" placeholder="Digite sua senha" required>
        </label>
        <label class="form-label-wrapper">
          <p class="form-label">Confirmar Senha:</p>
          <input v-model="form.password_confirmation" class="form-input" type="password" placeholder="Digite sua senha" required>
        </label>
        <button class="form-btn primary-default-btn transparent-btn">Enviar</button>
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
        password: '',
        password_confirmation: ''
      },
      showError: ''
    }
  },
  methods: {
    submit() {
      const header = {
        headers: { 
          'Content-Type': 'application/json',
          'access_token': this.$route.query.token,
          'uid': this.$route.query.uid,
          'client': this.$route.query.client,
          'token': this.$route.query.token,
        }
      }
      api.put('/auth/password', this.form, header).then((response) => {
        this.$swal('Sucesso', 'Senha redefinida com sucesso', 'success')
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

</style>