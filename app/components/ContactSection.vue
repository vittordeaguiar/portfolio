<template>
  <section id="contato" class="section">
    <h2 class="section__label">Contato</h2>
    <p class="contact__lead">
      O jeito mais rápido é por email:
      <a href="mailto:vittoraguiar93@gmail.com">vittoraguiar93@gmail.com</a>
    </p>
    <ul class="contact__links">
      <li><a href="https://linkedin.com/in/vittordeaguiar" target="_blank" rel="noopener">LinkedIn</a></li>
      <li><a href="https://github.com/vittordeaguiar" target="_blank" rel="noopener">GitHub</a></li>
      <li><a href="https://wa.me/55984690385" target="_blank" rel="noopener">WhatsApp</a></li>
    </ul>
  </section>
</template>

<style scoped>
.contact__lead {
  font-family: var(--font-serif);
  font-size: 1.375rem;
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  margin-top: 20px;
}
</style>
