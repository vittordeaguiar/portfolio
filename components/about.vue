<script setup lang="ts">
import { ChevronDoubleDownIcon } from '@heroicons/vue/24/solid';
import { scrollToSection } from '@/utils/scroll';
</script>

<template>
  <section
    id="about"
    class="bg-light-gray md:px-32 md:py-60 px-8 py-16 flex flex-col items-center justify-between space-y-6 w-full min-h-screen"
  >
    <section
      class="w-full flex md:flex-row flex-col justify-between items-center text-zinc-800 space-y-6 md:space-y-0"
    >
      <div class="md:w-1/2 w-full flex justify-center md:justify-start">
        <img
          class="h-40 w-40 md:h-80 md:w-80 object-cover rounded-full sm:mr-auto mx-auto"
          src="/public/images/vittor.jpeg"
          alt="Vittor"
        />
      </div>
      <div class="md:w-1/2 w-full space-y-4 md:space-y-8 px-4 md:px-0">
        <h2
          class="text-handwrite text-purple text-center font-bold text-3xl sm:text-4xl"
        >
          Olá, eu sou o Vittor!
        </h2>
        <p class="text-justify text-xl md:text-2xl leading-relaxed">
          Meu nome é
          <span class="text-purple font-semibold">Vittor de Aguiar</span> e sou
          um engenheiro de software apaixonado por tecnologia e desenvolvimento.
          Desde cedo, me dedico a criar soluções tecnológicas modernas e
          eficientes. Sou fundador e engenheiro de software na
          <a
            class="text-purple font-semibold underline"
            href="https://pypsystem.com"
            target="_blank"
          >
            Pyp System</a
          >. Como autodidata, estou sempre em busca de novos conhecimentos e
          desafios. Se você acredita que podemos colaborar de alguma forma, seja
          em projetos de desenvolvimento ou outras iniciativas tecnológicas,
          adoraria ouvir de você. Vamos nos conectar!
        </p>
      </div>
    </section>
    <ChevronDoubleDownIcon
      class="w-12 h-12 cursor-pointer text-purple animate-bounce"
      @click.prevent="scrollToSection('links')"
    />
  </section>
</template>
