<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item mt-3">
          <router-link to="/home" class="nav-link">
            <span class="icon home" aria-hidden="true"></span>Inicio
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/receitas" class="nav-link">
            <span class="icon home" aria-hidden="true"></span>Receitas
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/receita/new" class="nav-link">
            <span class="icon home" aria-hidden="true"></span>Nova Receita
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>