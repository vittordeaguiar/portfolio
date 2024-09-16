<script setup lang="ts">
import { ref } from 'vue';

const image = ref('/images/vittor.jpeg');

const switchImage = () => {
  image.value =
    image.value === '/images/vittor.jpeg'
      ? '/images/farofola.jpg'
      : '/images/vittor.jpeg';
};
</script>

<template>
  <section
    id="about"
    class="bg-dark-gray md:px-32 md:py-36 px-8 py-12 flex flex-col items-center justify-center space-y-12 w-full"
  >
    <section
      class="w-full flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-12"
    >
      <div class="md:w-1/2 w-full flex justify-center">
        <img
          class="h-40 w-40 md:h-80 md:w-80 object-cover rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer jump-animation"
          :src="image"
          alt="Imagem alternada"
          @click="switchImage"
          @mouseenter="switchImage"
        />
      </div>
      <div
        class="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-center space-y-6 md:space-y-8 px-4 md:px-0"
      >
        <p class="text-lg md:text-xl leading-relaxed">
          Meu nome é
          <span class="font-semibold">Vittor de Aguiar</span> e sou fundador e
          engenheiro de software
          <a
            class="font-semibold underline hover:text-electricBlue"
            href="https://pypsystem.com"
            target="_blank"
          >
            Pyp System</a
          >. Sou apaixonado por tecnologia e desenvolvimento, me dedico a criar
          soluções tecnológicas modernas, eficientes e inovadoras.
          <br />
          <br />
          Sou um eterno aprendiz, sempre explorando novos conhecimentos e
          buscando superar desafios. Tenho um profundo interesse pela vida,
          filosofia, tecnologia e esportes, combinando minha paixão por entender
          o mundo com a criação de soluções inovadoras.
          <br />
          <br />
          Se você acredita que podemos colaborar de alguma forma, seja em
          projetos de desenvolvimento, outras iniciativas tecnológicas ou apenas
          para uma boa conversa sobre diferentes temas, adoraria ouvir de você.
          Vamos nos conectar!
        </p>
      </div>
    </section>
  </section>
</template>

<style scoped>
.jump-animation {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.jump-animation:hover {
  transform: scale(1.05) translateY(-10px);
  opacity: 0.9;
}
</style>
