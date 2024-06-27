<script setup lang="ts"></script>

<template>
  <main class="w-full min-h-screen flex flex-col xl:pb-0 absolute">
    <Header />
    <article class="flex flex-grow h-full">
      <slot />
    </article>
    <Footer />
  </main>
</template>
