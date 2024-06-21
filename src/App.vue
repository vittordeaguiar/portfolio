<script setup lang="ts">
  import Header from './components/Header.vue'
  import Content from './components/Content.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <main class="w-screen min-h-screen flex flex-col xl:pb-0 absolute text-color">
    <Header />

    <section class="flex flex-row flex-grow h-full">
      <Content />
    </section>

    <Footer />
  </main>
</template>

<style>
  h1 {
    font-size: 22px;
    font-weight: 700;
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }

  a {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }

  .text-color {
    color: #fcf7ff;
  }
</style>
