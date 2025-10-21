<script setup>
import Hero from "../components/Hero.vue";
import Card from "../components/Card.vue";
import ImageText from "../components/ImageText.vue";

</script>

<template>

  <Hero
  title="Ankommen, Durchatmen, Genießen.."
  description="..im Ferienhaus Pürstl - direkt an der Reiteralm."
  backgroundImage="/img/skifahren-schladming-dachstein.jpg"
  altText="Skifahrerinnen auf der Piste"
  :opacity="0.3"
  cText="© Schladming-Dachstein | Peter Burgstaller"
  />

  <div class="text-center max-w-[90vw] mx-auto mb-[var(--gap-xl)]">
    <h1 class="[font-size:var(--font-size-h3)] mb-8 text-[var(--color-green)]">Dein Bergurlaub im Ferienhaus Pürstl</h1>
    <p class="[font-size:var(--font-size-h4)]">
      Im Ferienhaus Pürstl beginnt dein Bergurlaub direkt an der Reiteralm – egal ob Skifahren im Winter oder Wandern im Sommer. Genieße die Ruhe, die Berge und unvergessliche Momente mitten in der Natur.
    </p>
  </div>

  <ImageText
    headline="Vielseitige Erlebnisse"
    description="Unser Ferienhaus liegt zentral, eingebettet zwischen den imposanten Schladminger Tauern im Osten und dem angrenzenden Salzburger Land im Westen. Dank der guten Verkehrsanbindung, genau zwischen Radstadt und Schladming gelegen, kannst du die gesamte Region bequem erkunden. Das ganze Jahr über erwarten dich zahlreiche Events und Attraktionen in der Umgebung."
    buttonText="Aktuelle Events"
    buttonLink="https://www.schladming-dachstein.at/de/Alle-Veranstaltungen"
    :openBlank="true"
    img="/img/haus/ferienhaus-puerstl-sommer-1.jpg"
    altText="Außenansicht Ferienhaus Pürstl"
    bgColor="bg-[var(--color-bg-green)]"
  >
  </ImageText>

  <div class="px-[var(--gap-l)] py-12 flex gap-[var(--gap-l)] justify-center flex-wrap gap-[var(--gap-l)] mb-[var(--gap-xl)]">
    <Card
      headline="Dein Zuhause in den Bergen"
      description="Gemütlich, modern und ruhig gelegen – genau neben der Reiteralm-Piste"
      buttonText="Mehr erfahren"
      buttonLink="/ferienhaus"
      :openBlank="false"
      img="/img/haus/ferienhaus-puerstl-winter-1.jpg"
      altText="Außenansicht Ferienhaus Pürstl">
    </Card>
    <Card
      headline="Abenteuer direkt vor der Tür"
      description="Erlebe Sommer wie Winter die Vielfalt der Schladming-Dachstein Region – Wandern, Skifahren, Kultur und Genuss"
      buttonText="Mehr erfahren"
      buttonLink="/erleben"
      :openBlank="false"
      img="/img/wandern-herbst-filzmoos.jpg"
      altText="Wandern im Herbst">
    </Card>
    <Card
      headline="Wir freuen uns auf dich"
      description="Ob Buchung, Fragen oder Tipps – wir helfen dir gerne weiter und freuen uns auf deinen Besuch"
      buttonText="Mehr erfahren"
      buttonLink="/kontakt"
      :openBlank="false"
      img="/img/gastgeber.jpg"
      altText="Gastgeber Familie Kohlbacher Pürstl">
    </Card>
  </div>

  <div class="text-center max-w-[90vw] mx-auto mb-[var(--gap-xl)]">
    <h2 class="[font-size:var(--font-size-h3)] mb-8 text-[var(--color-green)]">Klein, Fein & Gemütlich</h2>
    <p class="[font-size:var(--font-size-h4)]">Unser Selbstversorger-Häuschen bietet Platz für entspannte Tage zu zweit, mit der Familie oder Freunden. Direkt an der Piste im Winter und im Sommer der perfekte Ausgangspunkt für Abenteuer in der Schladming-Dachstein Region.</p>
  </div>

  <Slider />


</template>

<style scoped></style>
