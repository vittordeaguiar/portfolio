<script setup lang="ts">
  import { Tippy } from 'vue-tippy'
  import GithubIcon from '../assets/icons/github-icon.svg'
  import LinkedInIcon from '../assets/icons/linkedin-icon.svg'
  import TwitterIcon from '../assets/icons/twitter-icon.svg'
  import InstagramIcon from '../assets/icons/instagram-icon.svg'
  import TwitchIcon from '../assets/icons/twitch-icon.svg'
  import ArrowRightIcon from '../assets/icons/arrow-right-icon.svg'

  const menuItems = [
    {
      text: 'GitHub',
      link: 'https://github.com/vittordeaguiar',
      icon: GithubIcon,
    },
    {
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/vittordeaguiar/',
      icon: LinkedInIcon,
    },
    {
      text: 'My mind',
      link: 'https://twitter.com/vittordeaguiar',
      icon: TwitterIcon,
    },
    {
      text: 'My face',
      link: 'https://www.instagram.com/vittordeaguiar/',
      icon: InstagramIcon,
    },
    {
      text: 'Twitch (occasionally)',
      link: 'https://www.twitch.tv/vittordeaguiar',
      icon: TwitchIcon,
    },
  ]
</script>

<template>
  <header class="md:px-96 px-8 flex flex-col items-center space-y-8 w-full">
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
          class="invert-color w-full h-full"
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
            :src="ArrowRightIcon"
            alt="Ícone de seta"
          />
        </Tippy>
      </div>
    </a>
  </header>
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
