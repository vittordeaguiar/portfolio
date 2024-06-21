<script setup lang="ts">
  import GithubIcon from '../assets/icons/github-icon.svg'
  import LinkedInIcon from '../assets/icons/linkedin-icon.svg'
  import TwitterIcon from '../assets/icons/twitter-icon.svg'
  import InstagramIcon from '../assets/icons/instagram-icon.svg'

  const menuItems = [
    {
      text: 'GitHub',
      link: 'https://github.com/vittordeaguiar',
      icon: GithubIcon,
    },
    {
      text: 'LinkedIn',
      link: '/',
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
  ]
</script>

<template>
  <header class="md:px-96 flex flex-col items-center space-y-8 w-full">
    <a
      v-for="item in menuItems"
      :key="item.text"
      :href="item.link"
      target="_blank"
      rel="noopener noreferrer"
      class="card w-full cursor-pointer px-20 py-4 rounded-lg transition-transform transform hover:scale-105 flex items-center space-x-2"
    >
      <div class="w-20">
        <img
          class="invert-color w-8 h-8"
          :src="item.icon"
          alt="Ícone da rede social"
        />
      </div>
      <p>{{ item.text }}</p>
    </a>
  </header>
</template>

<style scoped>
  .card {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border: 1.5px solid white;
    border-radius: 8px;
    padding: 20px;
    transition: transform 0.3s ease-in-out;
  }
</style>
