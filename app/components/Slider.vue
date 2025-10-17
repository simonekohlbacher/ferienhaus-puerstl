<script setup>
import { ref } from 'vue';

const imgs = [
  { src: '/img/haus/ferienhaus-puerstl-sommer-1.jpg', alt: 'Ferienhaus Pürstl im Sommer' },
  { src: '/img/haus/ferienhaus-puerstl-winter-1.jpg', alt: 'Ferienhaus Pürstl im Winter' },
  { src: '/img/haus/ferienhaus-puerstl-badezimmer.jpg', alt: 'Badezimmer des Ferienhauses' },
  { src: '/img/haus/ferienhaus-puerstl-schlafzimmer-gross-1.jpg', alt: 'Großes Schlafzimmer' },
  { src: '/img/haus/ferienhaus-puerstl-einzelbett.jpg', alt: 'Einzelbett im Schlafzimmer' },
  { src: '/img/haus/ferienhaus-puerstl-pistenblick.jpg', alt: 'Pistenblick vom Ferienhaus' },
  { src: '/img/haus/ferienhaus-puerstl-plan-erdgeschoss.jpg', alt: 'Grundriss Erdgeschoss' },
  { src: '/img/haus/ferienhaus-puerstl-plan-obergeschoss.jpg', alt: 'Grundriss Obergeschoss' },
  { src: '/img/haus/ferienhaus-puerstl-wohnkueche-1.jpg', alt: 'Wohnküche mit Essbereich' },
  { src: '/img/haus/ferienhaus-puerstl-wohnkueche-2.jpg', alt: 'Wohnküche mit Sofa' },
  { src: '/img/haus/ferienhaus-puerstl-wohnkueche-bett.jpg', alt: 'Wohnküche mit Bett' },
  { src: '/img/haus/ferienhaus-puerstl-schlafzimmer-naturblick.jpg', alt: 'Schlafzimmer mit Naturblick' },
  { src: '/img/haus/ferienhaus-puerstl-schlafzimmer-gross-2.jpg', alt: 'Zweites großes Schlafzimmer' },
  { src: '/img/haus/schladming-dachstein-sommercard.jpg', alt: 'Schladming Dachstein Sommercard' },
  { src: '/img/haus/ferienhaus-puerstl-kueche-1.jpg', alt: 'Küche des Ferienhauses' },
  { src: '/img/haus/ferienhaus-puerstl-winter-2.jpg', alt: 'Winteransicht Ferienhaus Pürstl' }
];
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
    <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
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





