<template>
  <header class="header">
    <div class="container">
      <nav class="top-nav">
        <div class="top-logo">
          <router-link to="/"
            ><img src="@/assets/images/logo.png" alt="logotipo"
          /></router-link>
        </div>
        <div class="text-nav">
          <a href="#como-participar">Como participar</a>
          <a href="#cadastre-seu-cupom">Cadastre seu cupom</a>
          <a href="#ganhadores">Ganhadores</a>
          <a href="#last">Meus números</a>
          <router-link to="/login" class="btn -sm">Entrar</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>
<script setup></script>
