<script setup>
import { NuxtImg } from '#components'

defineProps({
  title: String,
  description: String,
  backgroundImage: String,
  altText: String,
  opacity: {
    type: Number,
    default: 0.5
  },
  cText: String
});

</script>

<template>
  <!-- https://daisyui.com/components/hero/?lang=de -->

<div class="hero min-h-screen -mt-[var(--nav-height)] z-0 mb-[calc(var(--gap-m)+var(--gap-l))]">
      <NuxtImg
          :src="backgroundImage"
          :alt="altText"
          class="min-h-screen object-cover object-center"
          priority
      />
      <div class="hero-overlay relative bg-[var(--color-anthrazit)]" :style="{ opacity: opacity }">
        <span class="absolute bottom-4 left-4 [font-size:var(--font-size-small)] text-[var(--color-white)] opacity-100">{{ cText }}</span>
      </div>

      <div class="absolute bottom-38 lg:left-28 left-12 xs:pr-18 text-left text-[var(--color-offWhite)]">
        <div class="flex flex-col gap-[var(--gap-s)]">
          <h3 class="[font-size:var(--font-size-xxl)!important] uppercase font-bold leading-10">{{ title }}</h3>
          <p class="[font-size:var(--font-size-h3)!important]">{{ description }}</p>
        </div>
      </div>
    </div>
  </template>


<style scoped></style>


