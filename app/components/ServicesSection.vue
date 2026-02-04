<template>
  <section class="section services">
    <div class="container">
      <div class="section__header">
        <span class="section__number">05.</span>
        <h2 class="section__title">Como Contribuo no Time</h2>
      </div>

      <div class="services__grid">
        <div class="service-card">
          <div class="service-header">
            <i class="fas fa-layer-group service-icon"></i>
            <h3>Arquitetura e APIs</h3>
          </div>
          <p>
            Desenho de serviços, contratos de API, segurança e desempenho com foco em
            escalabilidade.
          </p>
        </div>

        <div class="service-card">
          <div class="service-header">
            <i class="fas fa-brain service-icon"></i>
            <h3>Integrações e Dados</h3>
          </div>
          <p>Integração entre sistemas, automações e pipelines de dados para operações críticas.</p>
        </div>

        <div class="service-card">
          <div class="service-header">
            <i class="fas fa-code-branch service-icon"></i>
            <h3>Qualidade e DevOps</h3>
          </div>
          <p>Boas práticas, CI/CD, testes e observabilidade para manter o time produtivo.</p>
        </div>

        <div class="service-card">
          <div class="service-header">
            <i class="fas fa-rocket service-icon"></i>
            <h3>Colaboração</h3>
          </div>
          <p>Sou organizado, confiável e proativo. Gosto de assumir responsabilidade e manter o combinado em dia.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  width: 100%;
}

.service-card {
  background-color: var(--color-surface);
  padding: var(--spacing-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-normal);
}

.service-card:hover {
  background-color: var(--color-surface-light);
  transform: translateY(-4px);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-glow);
}

.service-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.service-icon {
  color: var(--color-primary);
  font-size: 1.5rem;
}

.service-card h3 {
  margin: 0;
  font-size: var(--font-size-lg);
}

@media (max-width: 768px) {
  .services__grid {
    grid-template-columns: 1fr;
  }
}
</style>
