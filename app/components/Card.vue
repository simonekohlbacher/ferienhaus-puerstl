<script setup>

defineProps({
  headline: String,
  description: String,
  buttonText: String,
  buttonLink: String,
  openBlank: Boolean,
  img: String,
  altText: String,
});

</script>

<template>
  <div class="card w-96 bg-[var(--color-brown)-100] shadow-md rounded-[var(--border-radius)]">
    <figure>
      <img :src="img"  :alt="altText"/>
    </figure>
    <div class="card-body text-left">
      <h4 class="card-title [font-size:var(--font-size-h4)] font-bold">{{ headline }}</h4>
      <p class="mb-8 [font-size:var(--font-size-p)]">{{ description }}</p>
      <div class="card-actions justify-start">
      <a 
        :href="buttonLink"
        class="button button-primary"
        v-bind="openBlank ? { target: '_blank', rel: 'noopener noreferrer' } : {}"
      >
        {{ buttonText }}
      </a>
      </div>
    </div>
  </div>
  </template>


<style scoped></style>


