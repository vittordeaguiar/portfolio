<script setup lang="ts">
import { scrollToSection } from '@/utils/scroll';

interface MenuItem {
  text: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { text: 'Início', link: 'banner' },
  { text: 'Sobre', link: 'about' },
  { text: 'Conexões', link: 'links' },
];

const isMenuOpen = ref(false);

const toggleMenu = (): void => (isMenuOpen.value = !isMenuOpen.value);
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-20 bg-purple py-2 px-4 sm:px-8 md:px-60 flex items-center justify-between"
  >
    <section class="flex flex-col">
      <h1 class="text-lg sm:text-xl font-semibold text-handwrite">Vittor de Aguiar</h1>
      <h2 class="text-md sm:text-lg font-medium">Software Engineer</h2>
    </section>
    <section class="hidden md:flex items-center space-x-4 sm:space-x-8">
      <a
        v-for="item in menuItems"
        class="cursor-pointer transition-transform transform hover:scale-110"
        @click.prevent="scrollToSection(item.link)"
      >
        {{ item.text }}
      </a>
    </section>
    <div class="md:hidden flex items-center">
      <button @click="toggleMenu" class="focus:outline-none">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    <div v-if="isMenuOpen" class="md:hidden absolute top-12 left-0 w-full bg-purple flex flex-col items-center space-y-2 py-2">
      <a
        v-for="item in menuItems"
        class="cursor-pointer transition-transform transform hover:scale-110"
        @click.prevent="scrollToSection(item.link)"
      >
        {{ item.text }}
      </a>
    </div>
  </header>
</template>
