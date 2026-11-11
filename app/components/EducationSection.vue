<template>
  <section class="section">
    <h2 class="section__label">Formação</h2>
    <dl class="tools">
      <dt class="muted">2022 – hoje</dt>
      <dd>Ciência da Computação, URI Santo Ângelo</dd>
      <dt class="muted">2019 – 2021</dt>
      <dd>Técnico em Informática, Instituto Federal Farroupilha</dd>
    </dl>
  </section>
</template>

<style scoped>
.tools {
  display: grid;
  grid-template-columns: 136px 1fr;
  gap: 10px 24px;
  font-variant-numeric: tabular-nums;
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
