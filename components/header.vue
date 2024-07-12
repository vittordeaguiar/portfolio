<script setup lang="ts">
import { scrollToSection } from '@/utils/scroll';
const menuItems = [
  { text: 'Início', link: 'banner' },
  { text: 'Sobre', link: 'about' },
  { text: 'Conexões', link: 'links' },
];
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-20 bg-purple py-2 md:px-60 px-8 flex items-center justify-between"
  >
    <section class="flex flex-col">
      <h1 class="text-xl font-semibold text-handwrite">Vittor de Aguiar</h1>
      <h2 class="text-lg font-medium">Software Engineer</h2>
    </section>
    <section class="flex items-center space-x-8">
      <a
        v-for="item in menuItems"
        class="cursor-pointer transition-transform transform hover:scale-110"
        @click.prevent="scrollToSection(item.link)"
      >
        {{ item.text }}
      </a>
    </section>
  </header>
</template>
