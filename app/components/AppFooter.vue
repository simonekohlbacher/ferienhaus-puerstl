<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <footer class="footer sm:footer-horizontal bg-[var(--color-green)] p-10 items-end justify-between text-[var(--color-white)]">
    <aside>
      <p class="pl-2 [font-size:var(--font-size-small)!important]">
        © Ferienhaus Pürstl
        <br />
        Familie Kohlbacher-Pürstl<br/>
        Gleiming 19<br/>
        8973 Pichl/Schladming<br/>
      </p>
        <div class="flex flex-row gap-[var(--gap-s)] mt-[var(--gap-s)]">
          <a href="tel:+43 664 46 36 602"><font-awesome-icon :icon="['fa', 'phone']" class="text-xl" /></a>
          <a href="mailto:info@ferienhaus-reiteralm.at"><font-awesome-icon :icon="['fa', 'envelope']" class="text-xl" /></a>
        </div>
    </aside>
    <nav>
      <div class="flex gap-[var(--gap-m)]">
        <RouterLink
          to="/impressum"
          class="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-500">
          Impressum
        </RouterLink>
        <RouterLink
          to="/datenschutz"
          class="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-500">
          Datenschutzerklärung
        </RouterLink>
      </div>
    </nav>
    <div class="flex flex-row gap-[var(--gap-m)] items-center">
      <a href="https://www.reiteralm.at/de" target="_blank">
        <img src="/logos/logo_reiteralm.png" alt="Ski Reiteralm" class="w-20"/>
      </a>
      <a href="https://www.schladming-dachstein.at/" target="_blank">
        <img src="/logos/logo_schladmingdachstein.jpg" alt=" Schladming Dachstein" class="w-20"/>
      </a>
      <a href="https://www.bergfex.at/sommer/schladming-dachstein/" target="_blank">
        <img src="/logos/logo_skiamade.png" alt=" Ski Amade" class="w-20"/>
      </a>
    </div>



  </footer>

</template>

<style scoped></style>


