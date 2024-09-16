<script setup lang="ts">
const limeColor = ref('#CFEF9F');
const purpleColor = ref('#2C2C2C');
const lightPurpleColor = ref('#C0C0C0');

const primaryColor = ref('#000000'); // Preto Profundo
const darkGrayColor = ref('#2C2C2C'); // Cinza Escuro
const silverMetallicColor = ref('#C0C0C0'); // Prata Metálico
const lightGrayColor = ref('#B0B0B0'); // Cinza Claro
const electricBlueColor = ref('#1E90FF'); // Azul Elétrico (Cor de Destaque)
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

.bg-dark-gray {
  background-color: v-bind(
    darkGrayColor
  ); /* Ajustado para usar a cor correta */
}

.bg-light-purple {
  background-color: v-bind(
    silverMetallicColor
  ); /* Ajustado para usar a cor correta */
}

.bg-light-gray {
  background-color: v-bind(lightGrayColor);
}

.text-lime {
  color: v-bind(limeColor);
}

.text-purple {
  color: v-bind(darkGrayColor); /* Ajustado para usar a cor correta */
}

.text-light-purple {
  color: v-bind(silverMetallicColor); /* Ajustado para usar a cor correta */
}

.btn-primary {
  border: 2px solid v-bind(darkGrayColor); /* Ajustado para usar a cor correta */
  border-radius: 16px;
  padding: 0 32px;
  background-color: v-bind(limeColor);
  color: v-bind(darkGrayColor); /* Ajustado para usar a cor correta */
  transition: background-color 0.4s ease, color 0.4s ease;
}

.btn-primary:hover {
  background-color: v-bind(
    darkGrayColor
  ); /* Ajustado para usar a cor correta */
  color: v-bind(limeColor);
}

.btn-secundary {
  border: 2px solid v-bind(limeColor);
  border-radius: 16px;
  padding: 2px 32px;
  background-color: v-bind(limeColor);
  color: v-bind(darkGrayColor); /* Ajustado para usar a cor correta */
  transition: background-color 0.4s ease, color 0.4s ease;
}

.btn-secundary:hover {
  background-color: transparent;
  color: v-bind(limeColor);
  border-color: v-bind(limeColor);
}
</style>
