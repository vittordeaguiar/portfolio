<template>
  <section id="skills" class="section skills">
    <div class="container">
      <div class="section__header">
        <span class="section__number">02.</span>
        <h2 class="section__title">Competências Técnicas</h2>
      </div>

      <div class="skills__grid">
        <div class="code-card">
          <div class="code-card__header">Backend.js</div>
          <div class="code-block">
            <span class="code-var">const</span> backend = <span class="code-bracket">[</span><br />
            &nbsp;&nbsp;<span class="code-string">"Node.js (Nest.js)"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"NET Core / C#"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"TypeScript"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"REST APIs"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"Elysia.js (Bun)"</span><br />
            <span class="code-bracket">]</span>;
          </div>
        </div>

        <div class="code-card">
          <div class="code-card__header">Frontend.js</div>
          <div class="code-block">
            <span class="code-var">const</span> frontend = <span class="code-bracket">[</span><br />
            &nbsp;&nbsp;<span class="code-string">"Vue.js (Nuxt.js)"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"React.js (Next.js)"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"JavaScript ES6+"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"Flutter/Dart"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"HTML5/CSS3"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"Tailwind CSS"</span><br />
            <span class="code-bracket">]</span>;
          </div>
        </div>

        <div class="code-card">
          <div class="code-card__header">Database.sql</div>
          <div class="code-block">
            <span class="code-var">const</span> databases = <span class="code-bracket">[</span><br />
            &nbsp;&nbsp;<span class="code-string">"PostgreSQL"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"MySQL"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"Sybase"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"MongoDB"</span>,<br />
            <span class="code-bracket">]</span>;
          </div>
        </div>

        <div class="code-card">
          <div class="code-card__header">DevOps.yml</div>
          <div class="code-block">
            <span class="code-var">const</span> devops = <span class="code-bracket">[</span><br />
            &nbsp;&nbsp;<span class="code-string">"Docker"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"Kubernetes"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"CI/CD Pipelines"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"AWS"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"Git/GitHub"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"Linux"</span><br />
            &nbsp;&nbsp;<span class="code-string">"Redis"</span><br />
            <span class="code-bracket">]</span>;
          </div>
        </div>

        <div class="code-card">
          <div class="code-card__header">Expertise.json</div>
          <div class="code-block">
            <span class="code-var">const</span> areas = <span class="code-bracket">[</span><br />
            &nbsp;&nbsp;<span class="code-string">"Sistemas ERP"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"Plataformas CRM"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"IA/NLP"</span>,<br />
            &nbsp;&nbsp;<span class="code-string">"Desenvolvimento de soluções"</span><br />
            <span class="code-bracket">]</span>;
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-md);
  width: 100%;
}

@media (max-width: 768px) {
  .skills__grid {
    grid-template-columns: 1fr;
  }
}

.code-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  transition: all var(--transition-normal);
}

.code-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-glow);
  border-color: var(--color-primary);
}

.code-card__header {
  color: var(--color-text-heading);
  margin-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 8px;
  font-weight: 600;
}

.code-block {
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.code-var {
  color: #c792ea;
}
.code-string {
  color: #98c379;
}
.code-bracket {
  color: #e06c75;
}
</style>
