<template>
  <section id="hero" class="hero">
    <div class="container hero__container">
      <div class="terminal">
        <div class="terminal__header">
          <div class="terminal__controls">
            <div class="control control--red" />
            <div class="control control--yellow" />
            <div class="control control--green" />
          </div>
          <div class="terminal__title">vittor@portfolio: ~</div>
        </div>
        <div class="terminal__body">
          <div :class="['command-line', { hidden: !showCmd1 }]">
            <span class="prompt">visitor@portfolio:~$</span>
            <span class="typing-text">{{ typedCommand1 }}</span>
          </div>
          <div :class="['output', { hidden: !showOutput1 }]">> Vittor de Aguiar > Desenvolvedor Back-end</div>

          <div :class="['command-line', { hidden: !showCmd2 }]">
            <span class="prompt">visitor@portfolio:~$</span>
            <span class="typing-text">{{ typedCommand2 }}</span>
          </div>
          <div :class="['output', { hidden: !showOutput2 }]">
            Desenvolvedor Back-end focado em soluções como ERPs, CRMs e integrações entre sistemas e APIs. Transformando ideias
            em soluções digitais que geram impacto real.
          </div>

          <div :class="['command-line', { hidden: !showCmdFinal }]">
            <span class="prompt">visitor@portfolio:~$</span>
            <span class="cursor" />
          </div>
        </div>
      </div>

      <div class="hero__actions">
        <a href="#experience" class="btn btn--primary">Ver meu trabalho →</a>
        <a href="#contact" class="btn btn--text">Entrar em contato</a>
      </div>

      <div class="availability">
        <div class="status-dot" />
        // Disponível para novos projetos
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const typedCommand1 = ref<string>("");
const typedCommand2 = ref<string>("");
const showCmd1 = ref<boolean>(false);
const showOutput1 = ref<boolean>(false);
const showCmd2 = ref<boolean>(false);
const showOutput2 = ref<boolean>(false);
const showCmdFinal = ref<boolean>(false);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const typeText = async (text: string, targetRef: any, speed = 100) => {
  for (let i = 0; i <= text.length; i++) {
    targetRef.value = text.substring(0, i);
    await delay(speed);
  }
};

const runTerminal = async () => {
  await delay(500);
  showCmd1.value = true;

  await delay(200);
  await typeText("whoami", typedCommand1, 80);

  await delay(300);
  showOutput1.value = true;

  await delay(1000);
  showCmd2.value = true;

  await delay(200);
  await typeText("cat about.txt", typedCommand2, 80);

  await delay(300);
  showOutput2.value = true;

  await delay(800);
  showCmdFinal.value = true;
};

onMounted(() => {
  runTerminal();
});
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--header-height);
}

.hero__container {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.terminal {
  background-color: var(--color-surface);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
  overflow: hidden;
  margin-bottom: var(--spacing-xl);
}

.terminal__header {
  background-color: var(--color-surface-light);
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
}

.terminal__controls {
  display: flex;
  gap: 8px;
  margin-right: var(--spacing-md);
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.control--red {
  background-color: #ff5f56;
}
.control--yellow {
  background-color: #ffbd2e;
}
.control--green {
  background-color: #27c93f;
}

.terminal__title {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  flex-grow: 1;
  text-align: center;
}

.terminal__body {
  padding: var(--spacing-lg);
  font-family: var(--font-mono);
  color: var(--color-text-primary);
  min-height: 250px;
}

.command-line {
  display: flex;
  margin-bottom: var(--spacing-sm);
}

.prompt {
  color: var(--color-primary);
  margin-right: 10px;
  flex-shrink: 0;
}

.output {
  color: var(--color-text-heading);
  margin-bottom: var(--spacing-md);
  white-space: pre-wrap;
}

.cursor {
  display: inline-block;
  width: 8px;
  height: 15px;
  background-color: var(--color-primary);
  animation: blink 1s step-end infinite;
  vertical-align: middle;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.availability {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: #27c93f;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(39, 201, 63, 0.7);
  animation: pulse-green 2s infinite;
}

@media (max-width: 768px) {
  .hero {
    padding-top: calc(var(--header-height) + var(--spacing-md));
  }

  .terminal__body {
    padding: var(--spacing-md);
    font-size: 0.875rem;
    min-height: 200px;
  }

  .terminal__title {
    font-size: 0.7rem;
  }

  .output {
    font-size: 0.875rem;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-sm);
  }

  .availability {
    font-size: 0.875rem;
    justify-content: center;
  }
}
</style>
