<script setup>
defineProps({
  headline: String,
  description: String,
});
</script>

<template>
  <div class="group [perspective:1000px] w-60 h-68">
    <div
        class="rounded-[var(--border-radius)] relative w-full h-full text-center transition-transform duration-500 [transform-style:preserve-3d] shadow-lg bg-[var(--color-bg-green)]
           group-hover:[transform:rotateY(180deg)] group-[.flipped]:[transform:rotateY(180deg)]">
      <!-- Vorderseite -->
      <div class="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] p-2">
        <h3 class="text-[var(--font-size-h3)] font-semibold">{{ headline }}</h3>
      </div>

      <!-- Rückseite -->
      <div class="absolute inset-0 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] p-12 bg-[var(--color-bg-green)] p-2">
        <p class="text-[var(--font-size-h4)]">{{ description }}</p>
      </div>
    </div>
  </div>
</template>
