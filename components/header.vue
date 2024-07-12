<script setup lang="ts">
const menuItems = [
  { text: 'Home', link: '/' },
  // { text: "About", link: "/about" },
];
</script>

<template>
  <header class="bg-lime py-6 md:px-60 px-8 flex items-center justify-between text-zinc-700">
    <section class="flex flex-col">
      <h1 class="text-xl font-semibold">Vittor de Aguiar</h1>
      <h2 class="text-lg font-medium">Software Engineer</h2>
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
