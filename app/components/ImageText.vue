<script setup>

defineProps({
  headline: String,
  description: String,
  buttonText: String,
  buttonLink: String,
  openBlank: Boolean,
  img: String,
  altText: String,
  bgColor: String,
});

</script>

<template>
  <div class="mb-[var(--gap-xl) flex gap-[calc(var(--gap-m)+var(--gap-l))] p-[calc(var(--gap-m)+var(--gap-l))] flex-col lg:flex-row mb-[var(--content-gap)]" :class="bgColor">
    <div>
      <figure>
        <img :src="img" :alt="altText"/>
      </figure>
    </div>
    <div class="flex flex-col justify-center gap-[var(--gap-m)]">
      <h3 class="[font-size:var(--font-size-h3)] font-bold">{{ headline }}</h3>
      <p class="mb-8 [font-size:var(--font-size-p)]">{{ description }}</p>
      <div class="w-full flex justify-start">
      <a 
        :href="buttonLink" 
        class="button button-secondary"
        :target="openBlank ? '_blank' : null"
        :rel="openBlank ? 'noopener noreferrer' : null">
        {{ buttonText }}
      </a>
      </div>
    </div>

    </div>

  </template>


<style scoped></style>


