<template>
  <header class="header">
    <a href="#top" class="header__name">Vittor de Aguiar</a>

    <nav class="header__nav" aria-label="Seções">
      <a href="#trabalho">Trabalho</a>
      <a href="#sobre">Sobre</a>
      <a href="#contato">Contato</a>
      <button
        type="button"
        class="header__theme"
        :aria-label="theme === 'dark' ? 'Usar tema claro' : 'Usar tema escuro'"
        @click="toggleTheme"
      >
        {{ theme === 'dark' ? 'Claro' : 'Escuro' }}
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { theme, toggleTheme } = useTheme()
</script>

<style scoped>
.header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding: 28px 0;
  font-size: 0.9375rem;
}

.header__name {
  font-weight: 600;
  text-decoration: none;
}

.header__nav {
  display: flex;
  align-items: baseline;
  gap: 20px;
}

.header__nav a {
  color: var(--muted);
  text-decoration: none;
}

.header__nav a:hover {
  color: var(--text);
}

.header__theme {
  font: inherit;
  color: var(--muted);
  background: none;
  border: 0;
  border-left: 1px solid var(--rule);
  padding-left: 20px;
  cursor: pointer;
}

.header__theme:hover {
  color: var(--text);
}

@media (max-width: 600px) {
  .header__name {
    display: none;
  }

  .header {
    justify-content: flex-start;
  }

  .header__nav {
    gap: 16px;
  }

  .header__theme {
    padding-left: 16px;
  }
}
</style>
