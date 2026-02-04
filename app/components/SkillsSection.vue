<template>
  <section id="skills" class="section skills">
    <div class="container">
      <div class="section__header">
        <span class="section__number">02.</span>
        <h2 class="section__title">Competências Técnicas</h2>
      </div>

      <div class="skills__grid">
        <div class="skill-group">
          <h3>Back-end</h3>
          <ul class="skill-list">
            <li>.NET Core / C#</li>
            <li>Node.js (Nest.js)</li>
            <li>APIs REST</li>
            <li>Elysia.js (Bun)</li>
          </ul>
        </div>

        <div class="skill-group">
          <h3>Front-end</h3>
          <ul class="skill-list">
            <li>React.js (Next.js)</li>
            <li>Vue.js (Nuxt.js)</li>
            <li>JavaScript ES6+</li>
            <li>HTML/CSS</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div class="skill-group">
          <h3>Dados</h3>
          <ul class="skill-list">
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Redis</li>
          </ul>
        </div>

        <div class="skill-group">
          <h3>DevOps</h3>
          <ul class="skill-list">
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>CI/CD Pipelines</li>
            <li>AWS</li>
            <li>Git/GitHub</li>
            <li>Linux</li>
          </ul>
        </div>

        <div class="skill-group">
          <h3>Domínios</h3>
          <ul class="skill-list">
            <li>Sistemas ERP</li>
            <li>Plataformas CRM</li>
            <li>IA/NLP</li>
            <li>Integrações entre sistemas</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--spacing-lg);
  width: 100%;
}

@media (max-width: 768px) {
  .skills__grid {
    grid-template-columns: 1fr;
  }
}

.skill-group {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  transition: all var(--transition-normal);
}

.skill-group:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-glow);
}

.skill-group h3 {
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-heading);
  font-size: var(--font-size-lg);
}

.skill-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.skill-list li {
  position: relative;
  padding-left: 18px;
}

.skill-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-primary);
}
</style>
