<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import MotorShop from "./components/MotorShop.vue";
</script>

<template>
  <div class="app-container">
    <MotorShop />
  </div>
</template>

<style scoped>
.app-container {
    background: linear-gradient(to right, #3b2c35, #2c2c2c);
    min-height: 100vh;
    color: white;
    padding: 20px;
}
</style>
