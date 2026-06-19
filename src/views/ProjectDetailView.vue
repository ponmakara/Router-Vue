<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { projects } from '@/data/projects'

const route = useRoute()

const project = computed(() => {
  const projectId = Number(route.params.id)

  return projects.find((item) => item.id === projectId)
})
</script>

<template>
  <section v-if="project">
    <RouterLink class="back-link" to="/projects">Back to projects</RouterLink>

    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>

    <h2>Tools Used</h2>
    <ul>
      <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
    </ul>
  </section>

  <section v-else>
    <h1>Project Not Found</h1>
    <p>There is no project with the ID "{{ route.params.id }}".</p>
    <RouterLink class="back-link" to="/projects">Back to projects</RouterLink>
  </section>
</template>

<style scoped>
.back-link {
  color: #2563eb;
  display: inline-block;
  font-weight: 700;
  margin-bottom: 18px;
}

h1 {
  margin-top: 0;
}

p {
  color: #475569;
  line-height: 1.7;
  max-width: 760px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
}

li {
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  border-radius: 8px;
  color: #047857;
  font-weight: 700;
  padding: 8px 12px;
}
</style>
