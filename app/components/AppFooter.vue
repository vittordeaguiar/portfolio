<template>
  <footer class="footer muted">
    <p>© {{ year }} Vittor de Aguiar</p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--rule);
  padding: 28px 0 40px;
  font-size: 0.875rem;
}
</style>
