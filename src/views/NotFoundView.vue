<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="not-found">
    <p class="code">404</p>
    <h1>Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <RouterLink to="/">Go Home</RouterLink>
  </section>
</template>

<style scoped>
.not-found {
  text-align: center;
}

.code {
  color: #dc2626;
  font-size: 56px;
  font-weight: 800;
  margin: 0;
}

h1 {
  margin: 0 0 10px;
}

p {
  color: #475569;
}

a {
  color: #2563eb;
  font-weight: 700;
}
</style>
