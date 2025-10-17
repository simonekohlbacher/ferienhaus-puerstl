<script setup>
import Hero from "../../components/Hero.vue";
import CardSimple from "../../components/CardSimple.vue";
import ImageText from "../../components/ImageText.vue";
import Slider from "../../components/Slider.vue";
</script>

<template>

  <Hero
    title="Erholsame Auszeit"
    description=".. das ganze Jahr über"
    backgroundImage="/../img/haus/ferienhaus-puerstl-sommer-1.jpg"
    altText="Ferienhaus Pürstl Außenansicht Sommer"
    :opacity="0.4"
  />

  <div class="text-center max-w-[90vw] mx-auto mb-[var(--gap-xl)]">
    <h1 class="[font-size:var(--font-size-h1)] mb-8 text-[var(--color-green)]">Ganz in Ruhe genießen</h1>
    <p class="[font-size:var(--font-size-h4)]">
      Unser gemütliches Ferienhäuschen erstreckt sich über 2 Etagen und bietet Platz für bis zu 5 Personen. Mit Blick und direktem Zugang zur Skipiste der Reiteralm ist es der perfekte Ausgangspunkt für zahlreiche Aktivitäten in der Region. Das ganze Jahr über.
    </p>
    <a href="/kontakt" class="inline-block mt-8 button button-primary">Jetzt Anfragen</a>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[var(--gap-m)] px-[var(--gap-xl)] justify-items-center mb-[var(--content-gap)]">
    <CardSimple
      headline="60m²"
      description="2 Etagen bieten Platz für bis zu 5 Personen"
    />
    <CardSimple
      headline="Ski In Ski Out"
      description="Im Winter kannst du direkt von der Haustür auf die Reiteralm-Piste starten"
    />
    <CardSimple
      headline="Perfekt für Familien"
      description="Perfekt für Familien oder kleine Gruppen – bis zu 5 Personen."
    />
    <CardSimple
      headline="Ganzjährig Erleben"
      description="Rund ums Ferienhaus warten das ganze Jahr über vielfältige Erlebnisse"
    />
  </div>

  <img src="../../public/img/bergpanorama.jpg" alt="Bergpanorama" class="w-[100vw] h-[60vh]"/>


  <ImageText
    headline="Gemütliches Zuhause auf Zeit"
    description="Unsere Ferienwohnung bietet kostenfreies WLAN, ein Wohnzimmer mit Doppelcouch, ein Schlafzimmer mit Doppelbett und ein weiteres Schlafzimmer mit Einzelbett. Außerdem gibt es einen Balkon, ein Badezimmer mit WC und ein zusätzliches separates WC. Zur Ausstattung gehören zwei SAT-TV-Geräte und eine komplett ausgestattete Küche mit Essecke, Mikrowelle, Ceran Kochfeld, Backrohr, Kaffeemaschine und Kühlschrank mit Gefrierfach. Bettwäsche und Handtücher werden gestellt, und gegen Aufpreis bieten wir einen Brötchenservice an."
    buttonText="Check unser Instagram"
    buttonLink="https://www.instagram.com/ferienhaus_puerstl/"
    :openBlank="true"
    bgColor="bg-[var(--color-bg-green)]"
  >
  </ImageText>


  <div class="text-center max-w-[90vw] mx-auto mb-[var(--gap-xl)] -mt-[var(--gap-l)]">
    <h1 class="[font-size:var(--font-size-h1)] mb-8 text-[var(--color-green)]">Preise</h1>
    <p class="[font-size:var(--font-size-h4)]">
      Sommer: Auf Anfrage (inkl. Schladming-Dachstein Sommercard)<br>
      Winter: 160,- € pro Ferienhaus/Nacht + Endreinigung € 50,-<br>
      Preise in Euro und exkl. Ortstaxe (€ 2,50 pro Person/Nacht), es gelten die allgemeinen Geschäftsbedingungen für die Hotellerie
    </p>
    <a target="blank" href="https://www.wko.at/oe/tourismus-freizeitwirtschaft/hotellerie/allgemeine-geschaeftsbedingungen-hotellerie" class="inline-block mt-8 button button-primary">AGBH</a>
  </div>

  <Slider :imgs="[
    '/img/haus/ferienhaus-puerstl-sommer-1.jpg',
    '/img/haus/ferienhaus-puerstl-winter-1.jpg',
    '/img/haus/ferienhaus-puerstl-badezimmer.jpg',
    '/img/haus/ferienhaus-puerstl-schlafzimmer-gross-1.jpg',
    '/img/haus/ferienhaus-puerstl-einzelbett.jpg',
    '/img/haus/ferienhaus-puerstl-pistenblick.jpg',
    '/img/haus/ferienhaus-puerstl-plan-erdgeschoss.jpg',
    '/img/haus/ferienhaus-puerstl-plan-obergeschoss.jpg',
    '/img/haus/ferienhaus-puerstl-wohnkueche-1.jpg',
    '/img/haus/ferienhaus-puerstl-wohnkueche-2.jpg',
    '/img/haus/ferienhaus-puerstl-wohnkueche-bett.jpg',
    '/img/haus/ferienhaus-puerstl-schlafzimmer-naturblick.jpg',
     '/img/haus/ferienhaus-puerstl-schlafzimmer-gross-2.jpg',
    '/img/haus/schladming-dachstein-sommercard.jpg',
    '/img/haus/ferienhaus-puerstl-kueche-1.jpg',
    '/img/haus/ferienhaus-puerstl-winter-2.jpg',
    ]" />


</template>

<style scoped></style>
