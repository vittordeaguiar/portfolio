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
            Desenvolvimento para empresas da região, combinando expertise técnica com visão de negócio. Entrega de
            soluções personalizadas que otimizam processos, reduzem custos operacionais e geram impacto mensurável nos
            resultados dos clientes.
          </p>
          <div class="timeline__tags">
            <span class="tech-pill">Node.js</span>
            <span class="tech-pill">.NET Core</span>
            <span class="tech-pill">Vue.js</span>
            <span class="tech-pill">PostgreSQL</span>
          </div>
        </div>

        <div class="timeline__item">
          <span class="timeline__period">2024 — 2025</span>
          <h3 class="timeline__title">Pyp System</h3>
          <p class="timeline__subtitle">Co-fundador & Tech Lead</p>
          <p>
            Co-fundador e líder técnico de software house focada em soluções corporativas. Desenvolvimento de solução
            completa baseada em IA para automação de vendas e comunicação com clientes, utilizando processamento de
            linguagem natural para otimização de processos comerciais.
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
            Desenvolvimento de APIs robustas e interfaces modernas, com integração de IA em projetos internos. Liderança
            de equipe com 3 desenvolvedores e 1 designer, incluindo definição técnica, code review, mentoria e
            implementação de práticas DevOps. Além da fundação de um Startup.
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
            Desenvolvimento e evolução do ERP Gespam, sistema completo de gestão pública utilizado por prefeituras do
            Rio Grande do Sul. Entrega de novas funcionalidades e módulos completos em sistema corporativo de larga
            escala com milhares de usuários.
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
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, var(--color-primary), var(--color-surface-light));
}

.timeline__item {
  margin-bottom: var(--spacing-xl);
  padding-left: var(--spacing-xl);
  position: relative;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -6px;
  top: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--color-background);
  border: 2px solid var(--color-primary);
}

.timeline__period {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
  display: inline-block;
}

.timeline__title {
  color: var(--color-text-heading);
  font-size: var(--font-size-xl);
  margin-bottom: 2px;
}

.timeline__subtitle {
  color: var(--color-text-primary);
  font-weight: 500;
  margin-bottom: var(--spacing-sm);
}

.timeline__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: var(--spacing-sm);
}

.tech-pill {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-primary);
  background-color: rgba(100, 255, 218, 0.1);
  padding: 4px 10px;
  border-radius: var(--border-radius-full);
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 0;
  }

  .timeline::before {
    left: 0;
  }

  .timeline__item {
    padding-left: var(--spacing-lg);
  }

  .timeline__period {
    font-size: 0.8rem;
  }

  .timeline__title {
    font-size: var(--font-size-lg);
  }

  .timeline__subtitle {
    font-size: var(--font-size-sm);
  }

  .timeline__tags {
    gap: 6px;
  }

  .tech-pill {
    font-size: 0.7rem;
    padding: 3px 8px;
  }
}
</style>
