<script setup lang="ts">
  import Header from './components/Header.vue'
  import Content from './components/Content.vue'
</script>

<template>
  <main
    class="flex w-screen flex-col div-body min-h-screen xl:pb-0 absolute text-color"
  >
    <Header />

    <section class="flex flex-row flex-grow h-full">
      <Content />
    </section>
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

  .text-color {
    color: #fcf7ff;
  }
</style>
