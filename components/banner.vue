<script setup lang="ts">
import { ChevronDoubleDownIcon } from '@heroicons/vue/24/solid';
import { scrollToSection } from '@/utils/scroll';
</script>

<template>
  <main
    id="banner"
    class="bg-purple md:px-60 px-8 flex flex-col items-center justify-center space-y-20 w-full h-screen"
  >
    <a href="https://pypsystem.com" target="_blank">
      <img
        src="@/public/icons/pyp-system-logo.svg"
        alt="Pyp System"
        class="mx-auto 2xl:w-1/5 sm:w-1/3 w-2/4"
      />
    </a>

    <div class="flex flex-col space-y-4 text-center">
      <h1 class="font-bold text-handwrite">Vittor de Aguiar</h1>
      <h3>Software Engineer</h3>
    </div>

    <ChevronDoubleDownIcon
      class="w-12 h-12 cursor-pointer text-lime animate-bounce"
      @click.prevent="scrollToSection('about')"
    />
  </main>
</template>
