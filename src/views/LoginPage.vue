<template>
  <div id="login">
    <div class="login-page">
      <h2 class="login-title">Faça seu login ou cadastre-se</h2>
      <div class="register-card">
        <h2 class="login-card-title">Não sou cadastrado</h2>
        <p class="login-card-text">Para ter acesso a página da promoção.</p>
        <button class="login-button"><a href="#">Cadastrar</a></button>
      </div>
      <div class="login-card">
        <h2 class="login-card-title">Já tenho cadastro</h2>
        <input
          type="email"
          id="login-email"
          class="login-email"
          name="login-email"
          placeholder="E-mail"
        />
        <input
          type="password"
          id="login-password"
          class="login-password"
          name="login-password"
          placeholder="Senha"
        />
        <a href="#" class="recuperar-senha">Esqueci minha senha</a>
        <button class="login-button"><a href="#">Entrar</a></button>
      </div>
    </div>
  </div>
</template>
<script setup></script>
