<template>
  <div id="home">
    <BaseBanner />
    <BaseCards />
    <BaseForm />
    <div class="cupom">
      <div class="cupom-card">
        <h2 class="cupom-title">Seu número da sorte é</h2>
        <p class="cupom-numero">XXXXXXX</p>
        <h2 class="cupom-alt-title">Boa sorte!</h2>
        <p class="cupom-text">
          * Esse número da sorte será enviado também para seu e-mail.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseBanner from "@/components/BaseBanner.vue";
import BaseCards from "@/components/BaseCards.vue";
import BaseForm from "@/components/BaseForm.vue";
</script>
