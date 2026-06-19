<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <header>
      <RouterLink class="brand" to="/">My Portfolio</RouterLink>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  margin: 0 auto;
  max-width: 1040px;
  padding: 32px 20px;
}

header {
  align-items: center;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  margin-bottom: 48px;
}

.brand {
  color: #0f172a;
  font-size: 22px;
  font-weight: 800;
  text-decoration: none;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

nav a {
  border-radius: 8px;
  color: #475569;
  font-weight: 700;
  padding: 10px 14px;
  text-decoration: none;
}

nav a.router-link-active {
  background: #e0f2fe;
  color: #0369a1;
}

main {
  background: white;
  border: 1px solid #dbe3ef;
  border-radius: 8px;
  padding: 32px;
}

@media (max-width: 640px) {
  header {
    align-items: flex-start;
    flex-direction: column;
  }

  main {
    padding: 24px;
  }
}
</style>
