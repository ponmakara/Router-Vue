<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { projects } from '@/data/projects'
</script>

<template>
  <section>
    <h1>Projects</h1>
    <p class="intro">Choose a project to view its dynamic route detail page.</p>

    <div class="project-grid">
      <article v-for="project in projects" :key="project.id">
        <h2>{{ project.title }}</h2>
        <p>{{ project.summary }}</p>
        <RouterLink :to="`/projects/${project.id}`">Read more</RouterLink>
      </article>
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin-top: 0;
}

.intro,
article p {
  color: #475569;
  line-height: 1.6;
}

.project-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin-top: 24px;
}

article {
  border: 1px solid #dbe3ef;
  border-radius: 8px;
  padding: 18px;
}

h2 {
  font-size: 20px;
  margin: 0 0 10px;
}

a {
  color: #2563eb;
  font-weight: 700;
}
</style>
