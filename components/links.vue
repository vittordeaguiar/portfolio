<script setup lang="ts">
import { ChevronDoubleUpIcon } from '@heroicons/vue/24/solid';
import { scrollToSection } from '@/utils/scroll';
import { Tippy } from 'vue-tippy';
const menuItems = [
  {
    text: 'Meus projetos',
    link: 'https://github.com/vittordeaguiar',
    icon: '/icons/github-icon.svg',
  },
  {
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/vittordeaguiar/',
    icon: '/icons/linkedin-icon.svg',
  },
  {
    text: 'Instagram',
    link: 'https://www.instagram.com/vittordeaguiar/',
    icon: '/icons/instagram-icon.svg',
  },
  {
    text: 'Twitter',
    link: 'https://twitter.com/vittordeaguiar',
    icon: '/icons/twitter-icon.svg',
  },
  {
    text: 'Bluesky',
    link: 'https://bsky.app/profile/vittor.dev',
    icon: '/icons/bluesky-icon.png',
  },
  {
    text: 'Pyp System',
    link: 'https://www.instagram.com/pypsystem/',
    icon: '/icons/logo-pyp-system-white.svg',
  },
  // {
  //   text: 'Twitch',
  //   link: 'https://www.twitch.tv/vittordeaguiar',
  //   icon: '/icons/twitch-icon.svg',
  // },
];
</script>

<template>
  <section
    id="links"
    class="bg-dark-gray md:px-96 px-8 flex flex-col items-center justify-center space-y-8 w-full pb-32"
  >
    <h2 class="text-center" style="font-size: 32px">Conecte-se comigo!</h2>
    <a
      v-for="item in menuItems"
      :key="item.text"
      :href="item.link"
      target="_blank"
      rel="noopener noreferrer"
      class="card w-full cursor-pointer px-20 py-4 flex items-center space-x-2"
    >
      <div class="w-8 h-8 mr-8">
        <img
          class="w-full h-full"
          :class="
            item.text !== 'Bluesky' && item.text !== 'Pyp System'
              ? 'invert-color'
              : ''
          "
          :src="item.icon"
          alt="Ícone da rede social"
        />
      </div>
      <p class="flex-1">{{ item.text }}</p>
      <div class="w-8 h-8 ml-auto">
        <Tippy
          content="Go"
          animation="perspective"
          theme="light-border"
          placement="right"
        >
          <img
            class="invert-color w-full h-full"
            src="/icons/arrow-right-icon.svg"
            alt="Ícone de seta"
          />
        </Tippy>
      </div>
    </a>
    <Tippy
      content="Voltar ao topo"
      animation="perspective"
      theme="light-border"
      placement="bottom"
    >
      <ChevronDoubleUpIcon
        class="w-12 h-12 cursor-pointer animate-bounce"
        @click.prevent="scrollToSection('banner')"
      />
    </Tippy>
  </section>
</template>

<style scoped>
.card {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border: 2px solid #f5f5f5;
  border-radius: 30px;
  padding: 20px;
  transition: transform 0.25s ease-in-out;
  transform: none;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}
</style>
