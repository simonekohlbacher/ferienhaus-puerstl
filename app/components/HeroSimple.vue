<script setup>

defineProps({
  backgroundImage: String,
  altText: String
});

</script>

<template>
  <div class="hero h-[60vh] -mt-[var(--nav-height)] z-0 mb-[calc(var(--gap-m)+var(--gap-l))] relative overflow-hidden">
    <NuxtImg
        :src="backgroundImage"
        :alt="altText"
        class="min-h-screen object-cover object-center"
    />
  </div>
</template>
