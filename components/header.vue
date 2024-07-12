<script setup lang="ts">
const menuItems = [
  { text: 'Home', link: '/' },
  // { text: "About", link: "/about" },
];
</script>

<template>
  <header class="h-32 md:px-96 px-8 flex items-center justify-between border-b border-zinc-700">
    <section class="flex flex-col">
      <h1 class="text-xl font-medium">Vittor de Aguiar</h1>
      <h2 class="text-lg">Software Engineer</h2>
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
