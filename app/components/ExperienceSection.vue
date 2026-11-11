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
      'A TentosCap é o banco da 3tentos, onde ficam as operações de empréstimo, crédito e simulações. Trabalho no sistema financeiro interno que controla o funcionamento da instituição e em funcionalidades do aplicativo do banco.',
      'Boa parte do dia a dia são integrações: com os parceiros que intermediam as transações financeiras e entre as APIs internas. O próximo passo é a integração direta com o Banco Central. Quando precisa, também ajudo no front-end.'
    ],
    stack: ['.NET / C#', 'SQL Server', 'SAP Warehouse', 'Next.js', 'TypeScript']
  },
  {
    company: 'Freelancer',
    role: 'Desenvolvedor Full Stack',
    period: '2025 – hoje',
    text: [
      'Projetos sob demanda para empresas da região, com software feito sob medida para o processo de cada cliente.'
    ],
    stack: ['Node.js', '.NET', 'React', 'PostgreSQL']
  },
  {
    company: 'Pyp System',
    role: 'Tech Lead',
    period: '2024 – 2025',
    text: [
      'Liderei o desenvolvimento de produtos com IA para automação de vendas e atendimento, usando processamento de linguagem natural integrado aos canais de comunicação dos clientes.'
    ],
    stack: ['Node.js', 'Flutter', 'NLP']
  },
  {
    company: 'Growth 8',
    role: 'Desenvolvedor Full Stack e Tech Lead',
    period: '2023 – 2024',
    text: [
      'APIs e interfaces para projetos internos, alguns com IA. Liderei um time de três desenvolvedores e um designer: definições técnicas, code review e a adoção de CI/CD.'
    ],
    stack: ['Node.js', 'Vue', 'Docker', 'CI/CD']
  },
  {
    company: 'Abase Sistemas',
    role: 'Desenvolvedor Web',
    period: '2022 – 2023',
    text: [
      'Evolução do Gespam, ERP de gestão pública usado por prefeituras do Rio Grande do Sul. Entreguei funcionalidades e módulos inteiros num sistema com milhares de usuários.'
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
