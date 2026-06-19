<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="hero">
    <p class="eyebrow">Vue Router Practice</p>
    <h1>Mini Portfolio and Blog</h1>
    <p>
      Welcome to a small single-page application built with Vue Router. Explore the pages,
      open project details, and try a random URL to see the 404 page.
    </p>

    <RouterLink class="button" to="/projects">View Projects</RouterLink>
  </section>
</template>

<style scoped>
.hero {
  max-width: 720px;
}

.eyebrow {
  color: #2f7d68;
  font-weight: 700;
  margin: 0 0 8px;
}

h1 {
  font-size: 44px;
  line-height: 1.1;
  margin: 0 0 16px;
}

p {
  color: #475569;
  font-size: 18px;
  line-height: 1.7;
}

.button {
  background: #2563eb;
  border-radius: 8px;
  color: white;
  display: inline-block;
  font-weight: 700;
  margin-top: 16px;
  padding: 12px 18px;
  text-decoration: none;
}
</style>
