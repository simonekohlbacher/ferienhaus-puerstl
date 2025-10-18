<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { NuxtImg } from '#components'
import {ref } from 'vue';
const menuOpen = ref(false)
</script>

<template>  
  <div class="navbar flex items-center justify-center h-[10rem] z-99 sticky text-[var(--color-offWhite)]">
    <div class="navbar-start p-8">
      <div class="dropdown relative">
  <div role="button" @click="menuOpen = !menuOpen">
    <font-awesome-icon
      v-if="!menuOpen"
      :icon="['fas', 'bars']"
      class="text-2xl md:text-5xl cursor-pointer transition-transform duration-300"
    />
    <font-awesome-icon
      v-else
      :icon="['fas', 'xmark']"
      class="text-2xl md:text-5xl cursor-pointer transition-transform duration-300 rotate-90"
    />
  </div>

  <!-- Dropdown -->
  <ul
    v-if="menuOpen"
    class="w-70 md:w-120 absolute top-12 md:left-20 md:top-0 bg-[var(--color-white)]/20 rounded-box shadow-lg p-6 transition-all duration-300"
  >
    <li class="mb-[var(--gap-s)]">
      <RouterLink to="/ferienhaus" class="nav-link" @click="menuOpen = false">
        Ferienhaus
      </RouterLink>
    </li>
    <li class="mb-[var(--gap-s)]">
      <RouterLink to="/erleben" class="nav-link" @click="menuOpen = false">
        Erleben
      </RouterLink>
    </li>
    <li class="mb-[var(--gap-s)]">
      <RouterLink to="/kontakt" class="nav-link" @click="menuOpen = false">
        Kontakt & Anfrage
      </RouterLink>
    </li>
  </ul>
</div>

    </div>
    <div class="navbar-center">
      <div class="flex items-between">
        <a href="/" class="md:mt-12">
          <NuxtImg
              src="/logos/logo_ferienhaus_puerstl_inverted.png"
              alt="Ferienhaus Pürstl"
              class="w-[10rem] md:w-[14rem] h-auto transition-all duration-500 hover:scale-105 hover:rotate-1"
              priority
              preload
          />
        </a>
      </div>
    </div>
    <div class="navbar-end p-8">
      <div class="flex gap-[var(--gap-s)] md:p-8">
        <a href="https://www.instagram.com/ferienhaus_puerstl/?hl=en" target="_blank">
          <FontAwesomeIcon :icon="['fab', 'instagram']" class="text-2xl md:text-3xl hover:text-[var(--color-green)] transition-colors duration-500"/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100075966014770" target="_blank">
          <FontAwesomeIcon :icon="['fab', 'facebook']" class="text-2xl md:text-3xl hover:text-[var(--color-green)] transition-colors duration-300"/>
        </a>
      </div>
    </div>
  </div>

  
</template>

<style scoped></style>
