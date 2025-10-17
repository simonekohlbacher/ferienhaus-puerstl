<script setup>
import { ref } from 'vue';

const { imgs } = defineProps({ imgs: Array });
// Immer wenn currentIndex.value sich ändert, berechnet Vue neu, wie viel translateX der Container bekommen soll
const currentIndex = ref(0);

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + imgs.length) % imgs.length;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % imgs.length;
};
</script>



<template>
  <div class="relative w-full overflow-hidden mb-[var(--content-gap)] bg-[var(--color-bg-brown)] py-12">
    <div ref="carousel" class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(img, index) in imgs" :key="index" class="flex-shrink-0 w-full flex justify-center items-center">
        <img :src="img.src" :alt="img.alt" class="max-w-[80vw] max-h-[50vh]" />
      </div>
    </div>
    <!-- Navigation Buttons -->
    <div class="absolute top-1/2 left-5 right-5 flex justify-between -translate-y-1/2">
      <button @click="prevSlide" class="btn btn-circle">❮</button>
      <button @click="nextSlide" class="btn btn-circle">❯</button>
    </div>
  </div>
</template>




