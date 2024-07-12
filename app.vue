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
  transition:
    background-color 0.4s ease,
    color 0.4s ease;
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
  transition:
    background-color 0.4s ease,
    color 0.4s ease;
}

.btn-secundary:hover {
  background-color: transparent;
  color: v-bind(limeColor);
  border-color: v-bind(limeColor);
}

.input-field {
  color: v-bind(purpleColor);
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  width: 100%;
  border: 1px solid v-bind(lightGrayColor);
  border-radius: 1.25rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
}

.input-field:focus {
  outline: none;
  border-color: transparent;
  box-shadow: 0 0 0 3px v-bind(lightPurpleColor);
}

.textarea-field {
  color: v-bind(purpleColor);
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  width: 100%;
  border: 1px solid v-bind(lightGrayColor);
  border-radius: 1.25rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
}

.textarea-field:focus {
  outline: none;
  border-color: transparent;
  box-shadow: 0 0 0 3px v-bind(lightPurpleColor);
}
</style>
