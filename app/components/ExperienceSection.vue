<template>
  <section id="experience" class="section experience">
    <div class="container">
      <div class="section__header">
        <span class="section__number">03.</span>
        <h2 class="section__title">Experiência Profissional</h2>
      </div>

      <div class="timeline">
        <div class="timeline__item">
          <span class="timeline__period">2025 — Presente</span>
          <h3 class="timeline__title">Freelancer</h3>
          <p class="timeline__subtitle">Desenvolvedor Full Stack</p>
          <p>
            Atuação em projetos sob demanda para empresas da região, desenvolvendo soluções
            personalizadas de software para melhor atender às necessidades dos clientes.
          </p>
          <div class="timeline__tags">
            <span class="tech-pill">Node.js</span>
            <span class="tech-pill">.NET Core</span>
            <span class="tech-pill">React.js</span>
            <span class="tech-pill">PostgreSQL</span>
          </div>
        </div>

        <div class="timeline__item">
          <span class="timeline__period">2024 — 2025</span>
          <h3 class="timeline__title">Pyp System</h3>
          <p class="timeline__subtitle">Tech Lead</p>
          <p>
            Liderança técnica no desenvolvimento de soluções baseadas em IA para automação de vendas e
            comunicação com clientes, utilizando processamento de linguagem natural e integrações
            com canais de atendimento.
          </p>
          <div class="timeline__tags">
            <span class="tech-pill">Node.js</span>
            <span class="tech-pill">Flutter</span>
            <span class="tech-pill">IA/NLP</span>
            <span class="tech-pill">Arquitetura</span>
          </div>
        </div>

        <div class="timeline__item">
          <span class="timeline__period">2023 — 2024</span>
          <h3 class="timeline__title">Growth 8</h3>
          <p class="timeline__subtitle">Desenvolvedor Full Stack & Tech Lead</p>
          <p>
            Desenvolvimento de APIs robustas e interfaces modernas, com integração de IA em projetos
            internos. Liderança de equipe com 3 desenvolvedores e 1 designer, incluindo definição
            técnica, code review e e implementação de práticas DevOps.
          </p>
          <div class="timeline__tags">
            <span class="tech-pill">Node.js</span>
            <span class="tech-pill">Vue.js</span>
            <span class="tech-pill">Docker</span>
            <span class="tech-pill">CI/CD</span>
          </div>
        </div>

        <div class="timeline__item">
          <span class="timeline__period">2022 — 2023</span>
          <h3 class="timeline__title">Abase Sistemas e Soluções</h3>
          <p class="timeline__subtitle">Desenvolvedor Web</p>
          <p>
            Desenvolvimento e evolução do Gespam, sistema completo de gestão pública utilizado
            por prefeituras do Rio Grande do Sul. Entrega de novas funcionalidades e módulos
            completos em sistema corporativo de larga escala com milhares de usuários.
          </p>
          <div class="timeline__tags">
            <span class="tech-pill">.NET Core</span>
            <span class="tech-pill">C#</span>
            <span class="tech-pill">PostgreSQL</span>
            <span class="tech-pill">Sybase</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: var(--spacing-lg);
}

.timeline__item {
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  position: relative;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: var(--spacing-lg);
  top: var(--spacing-lg);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-primary);
  box-shadow: 0 0 0 6px rgba(241, 194, 117, 0.12);
}

.timeline__period {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
  display: inline-block;
  padding-left: calc(var(--spacing-lg) + 6px);
}

.timeline__title {
  color: var(--color-text-heading);
  font-size: var(--font-size-xl);
  margin-bottom: 2px;
  padding-left: calc(var(--spacing-lg) + 6px);
}

.timeline__subtitle {
  color: var(--color-text-primary);
  font-weight: 500;
  margin-bottom: var(--spacing-sm);
  padding-left: calc(var(--spacing-lg) + 6px);
}

.timeline__item p {
  color: var(--color-text-secondary);
  padding-left: calc(var(--spacing-lg) + 6px);
  margin-bottom: var(--spacing-sm);
}

.timeline__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: var(--spacing-sm);
  padding-left: calc(var(--spacing-lg) + 6px);
}

.tech-pill {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-primary);
  background-color: rgba(241, 194, 117, 0.12);
  padding: 4px 10px;
  border-radius: var(--border-radius-full);
}

@media (max-width: 768px) {
  .timeline__item {
    padding: var(--spacing-md);
  }

  .timeline__period {
    font-size: 0.8rem;
    padding-left: calc(var(--spacing-md) + 6px);
  }

  .timeline__title {
    font-size: var(--font-size-lg);
    padding-left: calc(var(--spacing-md) + 6px);
  }

  .timeline__subtitle {
    font-size: var(--font-size-sm);
    padding-left: calc(var(--spacing-md) + 6px);
  }

  .timeline__tags {
    gap: 6px;
    padding-left: calc(var(--spacing-md) + 6px);
  }

  .tech-pill {
    font-size: 0.7rem;
    padding: 3px 8px;
  }

  .timeline__item::before {
    left: var(--spacing-md);
    top: var(--spacing-md);
  }
}
</style>
