<script setup lang="ts">
  const menuItems = ['Home', 'Projects', 'About']
</script>

<template>
  <header class="h-32 md:px-96 flex items-center justify-between">
    <section class="flex flex-col">
      <h1>Vittor de Aguiar</h1>
      <p>Full Stack Developer</p>
    </section>
    <section class="flex items-center space-x-4">
      <p
        class="cursor-pointer transition-transform transform hover:scale-105 underline"
        v-for="item in menuItems"
        :key="item"
      >
        {{ item }}
      </p>
    </section>
  </header>
</template>
