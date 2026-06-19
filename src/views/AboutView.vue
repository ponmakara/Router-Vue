<template>
  <section>
    <h1>About Me</h1>
    <p>
      Hi, I am learning how to build Vue single-page applications. This page is part of a
      router practice project that uses normal routes, active links, dynamic routes, and a
      404 page.
    </p>

    <div class="info-grid">
      <article>
        <h2>Skills</h2>
        <p>Vue, TypeScript, components, props, and routing.</p>
      </article>

      <article>
        <h2>Goal</h2>
        <p>Build clean navigation and understand how pages change without reloading.</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin-top: 0;
}

p {
  color: #475569;
  line-height: 1.7;
  max-width: 760px;
}

.info-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 24px;
}

article {
  border: 1px solid #dbe3ef;
  border-radius: 8px;
  padding: 18px;
}

h2 {
  font-size: 20px;
  margin: 0 0 8px;
}
</style>
