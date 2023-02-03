<template>
  <BasePageHeader />
  <router-view />
  <BasePageFooter />
</template>

<script setup>
import "@/assets/scss/app.scss";
import BasePageHeader from "@/components/BasePageHeader";
import BasePageFooter from "@/components/BasePageFooter";
</script>
