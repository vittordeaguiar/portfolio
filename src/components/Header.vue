<script setup lang="ts">
  const menuItems = [{ text: 'Home', link: '/' }]
  // const menuItems = ['Home', 'Projects', 'About']
</script>

<template>
  <header class="h-32 md:px-96 px-8 flex items-center justify-between">
    <section class="flex flex-col">
      <h1>Vittor de Aguiar</h1>
      <p>Software Engineer</p>
    </section>
    <section class="flex items-center space-x-4">
      <a
        v-for="item in menuItems"
        :href="item.link"
        class="cursor-pointer transition-transform transform hover:scale-105 underline"
      >
        {{ item.text }}
      </a>
    </section>
  </header>
</template>
