<script setup lang="ts">
const limeColor = ref('#CFEF9F');
const purpleColor = ref('#240D7D');
const lightPurpleColor = ref('#8446F8');
const lightGrayColor = ref('#f5f5f5');
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.bg-lime {
  background-color: v-bind(limeColor);
}

.bg-purple {
  background-color: v-bind(purpleColor);
}

.bg-light-purple {
  background-color: v-bind(lightPurpleColor);
}

.bg-light-gray {
  background-color: v-bind(lightGrayColor);
}

.text-lime {
  color: v-bind(limeColor);
}

.text-purple {
  color: v-bind(purpleColor);
}

.text-light-purple {
  color: v-bind(lightPurpleColor);
}

.btn-primary {
  border: 2px solid v-bind(purpleColor);
  border-radius: 16px;
  padding: 0 32px;
  background-color: v-bind(limeColor);
  color: v-bind(purpleColor);
  transition: background-color 0.4s ease, color 0.4s ease;
}

.btn-primary:hover {
  background-color: v-bind(purpleColor);
  color: v-bind(limeColor);
}

.btn-secundary {
  border: 2px solid v-bind(limeColor);
  border-radius: 16px;
  padding: 2px 32px;
  background-color: v-bind(limeColor);
  color: v-bind(purpleColor);
  transition: background-color 0.4s ease, color 0.4s ease;
}

.btn-secundary:hover {
  background-color: transparent;
  color: v-bind(limeColor);
  border-color: v-bind(limeColor);
}
</style>
