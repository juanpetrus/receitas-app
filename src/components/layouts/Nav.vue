<template>
  <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="/home">Receitas</a>
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" @click="logout()" href="#">Sair</a>
      </li>
    </ul>
  </div>
  </nav>
</template>

<script lang="ts">
export default {
  data() {
    return {

    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
  }
}
</script>
