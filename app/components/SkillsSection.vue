<template>
  <section class="section">
    <h2 class="section__label">Ferramentas</h2>
    <dl class="tools">
      <template v-for="group in groups" :key="group.name">
        <dt class="muted">{{ group.name }}</dt>
        <dd>{{ group.items.join(', ') }}</dd>
      </template>
    </dl>
  </section>
</template>

<script setup lang="ts">
const groups = [
  { name: 'Back-end', items: ['.NET / C#', 'Node.js (Nest.js)', 'Elysia (Bun)', 'APIs REST'] },
  { name: 'Dados', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Redis', 'SAP Warehouse'] },
  { name: 'Front-end', items: ['Next.js', 'Nuxt', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Infra', items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux'] }
]
</script>

<style scoped>
.tools {
  display: grid;
  grid-template-columns: 136px 1fr;
  gap: 10px 24px;
}

@media (max-width: 600px) {
  .tools {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .tools dd + dt {
    margin-top: 14px;
  }
}
</style>
