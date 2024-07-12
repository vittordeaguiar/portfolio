<script setup lang="ts">
import { Tippy } from 'vue-tippy';
const menuItems = [
  {
    text: 'GitHub',
    link: 'https://github.com/vittordeaguiar',
    icon: '/icons/github-icon.svg',
  },
  {
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/vittordeaguiar/',
    icon: '/icons/linkedin-icon.svg',
  },
  {
    text: 'My mind',
    link: 'https://twitter.com/vittordeaguiar',
    icon: '/icons/twitter-icon.svg',
  },
  {
    text: 'My face',
    link: 'https://www.instagram.com/vittordeaguiar/',
    icon: '/icons/instagram-icon.svg',
  },
  {
    text: 'Twitch (occasionally)',
    link: 'https://www.twitch.tv/vittordeaguiar',
    icon: '/icons/twitch-icon.svg',
  },
];
</script>

<template>
  <main class="md:px-96 mt-10 px-8 flex flex-col items-center space-y-8 w-full h-full my-auto">
    <a
      v-for="item in menuItems"
      :key="item.text"
      :href="item.link"
      target="_blank"
      rel="noopener noreferrer"
      class="card w-full cursor-pointer px-20 py-4 flex items-center space-x-2"
    >
      <div class="w-8 h-8 mr-8">
        <img class="invert-color w-full h-full" :src="item.icon" alt="Ícone da rede social" />
      </div>
      <p class="flex-1">{{ item.text }}</p>
      <div class="w-8 h-8 ml-auto">
        <Tippy content="Go" animation="perspective" theme="light-border" placement="right">
          <img
            class="invert-color w-full h-full"
            src="/icons/arrow-right-icon.svg"
            alt="Ícone de seta"
          />
        </Tippy>
      </div>
    </a>
  </main>
</template>

<style scoped>
.card {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border: 1.5px solid white;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  transform: none;
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}
</style>
