<template>
  <section class="section services">
    <div class="container">
      <div class="section__header">
        <span class="section__number">06.</span>
        <h2 class="section__title">Como Posso Ajudar</h2>
      </div>

      <div class="services__grid">
        <div class="service-card">
          <div class="service-header">
            <i class="fas fa-layer-group service-icon"></i>
            <h3>Desenvolvimento de Sistemas</h3>
          </div>
          <p>ERPs, CRMs e sistemas de gestão customizados para as necessidades específicas do seu negócio.</p>
        </div>

        <div class="service-card">
          <div class="service-header">
            <i class="fas fa-brain service-icon"></i>
            <h3>Integrações com IA</h3>
          </div>
          <p>Automação de processos e otimização comercial utilizando inteligência artificial e NLP.</p>
        </div>

        <div class="service-card">
          <div class="service-header">
            <i class="fas fa-code-branch service-icon"></i>
            <h3>Consultoria Técnica</h3>
          </div>
          <p>Arquitetura de soluções, code review e mentoria para equipes de desenvolvimento.</p>
        </div>

        <div class="service-card">
          <div class="service-header">
            <i class="fas fa-rocket service-icon"></i>
            <h3>Liderança de Projetos</h3>
          </div>
          <p>Gestão técnica de projetos do requisito à entrega, com foco em resultados mensuráveis.</p>
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
  transform: translateY(-5px);
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
