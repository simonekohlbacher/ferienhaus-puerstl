<script setup>

defineProps({
  backgroundImage: String,
  altText: String
});

</script>

<template>
  <div
    class="hero h-[60vh] -mt-[var(--nav-height)] z-0 mb-[calc(var(--gap-m)+var(--gap-l))]"
    :style="{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : '' }"
    :aria-label="altText"
  ></div>
</template>


