<script setup>
import Hero from "../components/Hero.vue";
import Slider from "../components/Slider.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>


<template>

  <Hero
    title="Nur einen Anruf entfernt"
    description=".. von deinem Ferienhaus in den Bergen"
    backgroundImage="/img/skifahren-piste.jpg"
    altText="Skifahren Piste in Schladming"
    :opacity="0.3"
    cText="© Schladming-Dachstein | Martin Huber"
  />

  <div class="text-center max-w-[90vw] mx-auto mb-[var(--gap-xl)]">
    <h1 class="[font-size:var(--font-size-h1)] mb-8 text-[var(--color-green)]">Lass uns in Kontakt bleiben</h1>
    <p class="[font-size:var(--font-size-h4)]">
      Hast du Fragen oder möchtest direkt buchen? Ruf uns an oder schreib eine Nachricht. Wir melden uns so schnell wie möglich und helfen dir gerne weiter.
    </p>
    <a href="mailto:info@reiteralm-ferienhaus.at" class="inline-block mt-8 button button-primary">E-Mail senden</a>
  </div>

  <div class="text-left bg-[var(--color-bg-green)] mb-[var(--gap-xl)] p-[var(--gap-l)] md:p-[var(--gap-xl)]">
    <h2 class="mb-[var(--gap-l)]">Kontaktdaten</h2>
    <div class="flex flex-col gap-[var(--gap-s)]">
        <p><font-awesome-icon :icon="['fa', 'user']" class="text-2xl mr-[var(--gap-s)]" />Ferienhaus Pürstl, Familie Kohlbacher-Pürstl</p>
        <p><font-awesome-icon :icon="['fa', 'location-dot']" class="text-2xl mr-[var(--gap-s)]" />Gleiming 19, 8973 Pichl/Schladming</p>
        <p><font-awesome-icon :icon="['fa', 'phone']" class="text-2xl mr-[var(--gap-s)]" />+43 664 46 36 602</p>
        <p><font-awesome-icon :icon="['fa', 'envelope']" class="text-2xl mr-[var(--gap-s)]" />info@ferienhaus-reiteralm.at</p>
    </div>
    <a href="mailto:info@reiteralm-ferienhaus.at" class="inline-block mt-8 button button-primary">E-Mail senden</a>
  </div>


  <div class="flex flex-col md:flex-row justify-center gap-[var(--gap-m)] mb-[var(--gap-l)]">
    <img src="/img/haus/ferienhaus-puerstl-pistenblick.jpg" alt="Reiteralm Spiegelsee" class="w-full md:w-[30vw] hover:grayscale transition duration-800">
    <img src="/img/haus/ferienhaus-puerstl-schlafzimmer-naturblick.jpg" alt="Ausblick aus dem Schlafzimmer" class="w-full md:w-[30vw] hover:grayscale transition duration-800">
    <img src="/img/schafe-berg.jpg" alt="Schafe am Berg mit Dachsteinblick" class="w-full md:w-[30vw] hover:grayscale transition duration-800">
  </div>

   
  
  <!--
  <div class="mb-[var(--gap-l)] p-[var(--gap-xl)] ">
    <div class="text-center max-w-[90vw] mx-auto mb-[var(--gap-l)]">
      <h2 class="[font-size:var(--font-size-h1)] mb-8 text-[var(--color-green)]">Kontaktformular</h2>
      <p class="[font-size:var(--font-size-h4)]">
        Sag uns, wann du kommen möchtest! Buchungen erfolgen bei uns immer auf Anfrage, damit wir dir ein schönes Ferienerlebnis garantieren können.
      </p>
    </div>
    <Form> </Form>
  </div>
-->

  <Slider :imgs="[
  { src: '/img/haus/ferienhaus-puerstl-sommer-1.jpg', alt: 'Ferienhaus Puerstl im Sommer' },
  { src: '/img/haus/ferienhaus-puerstl-winter-1.jpg', alt: 'Ferienhaus Puerstl im Winter' },
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
  { src: '/img/haus/ferienhaus-puerstl-winter-2.jpg', alt: 'Winteransicht Ferienhaus Puerstl' }
]" />

</template>

<style scoped></style>
