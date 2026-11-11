<template>
  <section id="trabalho" class="section">
    <h2 class="section__label">Trabalho</h2>

    <ol class="jobs">
      <li v-for="job in jobs" :key="job.company" class="job">
        <p class="job__period muted">{{ job.period }}</p>
        <div class="job__body">
          <h3 class="job__title">
            {{ job.company }}<span class="job__role muted">{{ job.role }}</span>
          </h3>
          <p v-for="(paragraph, i) in job.text" :key="i" class="job__text">{{ paragraph }}</p>
          <p class="job__stack muted">{{ job.stack.join(' · ') }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
interface Job {
  company: string
  role: string
  period: string
  text: string[]
  stack: string[]
}

const jobs: Job[] = [
  {
    company: 'TentosCap',
    role: 'Desenvolvedor Back-end',
    period: 'mar 2026 – hoje',
    text: [
      'A TentosCap é o banco da 3tentos, onde ficam as operações de crédito e empréstimo. Trabalho no sistema interno usado no dia a dia da instituição e em algumas funcionalidades do aplicativo do banco.',
      'Muito do que faço são integrações e novas funcionalidades internas, pensadas para a empresa produzir mais com a ajuda da tecnologia. Também ajudo no front-end da aplicação.',
      'À parte, tenho um projeto com a equipe de Marketing: desenvolvo uma aplicação que eles e os assessores usam todos os dias.'
    ],
    stack: ['.NET / C#', 'SQL Server', 'SAP Warehouse', 'Next.js', 'TypeScript']
  },
  {
    company: 'Freelancer',
    role: 'Desenvolvedor Full Stack',
    period: '2025 – hoje',
    text: [
      'Faço projetos sob demanda para empresas da região. Cada cliente trabalha de um jeito, então o sistema é pensado a partir do processo dele.'
    ],
    stack: ['Node.js', '.NET', 'React', 'PostgreSQL']
  },
  {
    company: 'Pyp System',
    role: 'Desenvolvedor Full Stack',
    period: '2024 – 2025',
    text: [
      'Trabalhei em produtos com IA para automatizar vendas e atendimento. A parte de linguagem natural ficava ligada aos canais que os clientes já usavam para falar com o público deles.'
    ],
    stack: ['Node.js', 'Flutter', 'NLP']
  },
  {
    company: 'Growth 8',
    role: 'Desenvolvedor Full Stack',
    period: '2023 – 2024',
    text: [
      'Desenvolvi APIs e telas para projetos internos, alguns usando IA. Também coordenei um time de três devs e um designer: ajudava nas decisões técnicas, revisava código e coloquei CI/CD no processo.'
    ],
    stack: ['Node.js', 'Vue', 'Docker', 'CI/CD']
  },
  {
    company: 'Abase Sistemas',
    role: 'Desenvolvedor Web',
    period: '2022 – 2023',
    text: [
      'Trabalhei no Gespam, ERP de gestão pública usado por prefeituras do Rio Grande do Sul. Entreguei funcionalidades novas e alguns módulos inteiros num sistema com milhares de usuários.'
    ],
    stack: ['.NET', 'C#', 'PostgreSQL', 'Sybase']
  }
]
</script>

<style scoped>
.jobs {
  list-style: none;
  display: grid;
  gap: 44px;
}

.job {
  display: grid;
  grid-template-columns: 136px 1fr;
  gap: 24px;
}

.job__period {
  font-size: 0.9375rem;
  font-variant-numeric: tabular-nums;
  padding-top: 4px;
}

.job__title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.job__role::before {
  content: ", ";
}

.job__role {
  font-family: var(--font-sans);
  font-size: 1rem;
  letter-spacing: 0;
}

.job__stack {
  margin-top: 12px;
  font-size: 0.875rem;
}

@media (max-width: 600px) {
  .job {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .job__role {
    display: block;
    margin-top: 4px;
  }

  .job__role::before {
    content: none;
  }
}
</style>
