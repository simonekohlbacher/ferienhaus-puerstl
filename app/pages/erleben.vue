
<template>

  <Hero
    title="Zahlreiche Erlebnisse"
    description="..direkt vor der Haustüre"
    backgroundImage="/img/wandern-reiteralm.jpg"
    altText="Wandern Reiteralm"
    :opacity="0.3"
    cText="© Schladming-Dachstein / Peter Burgstaller"
  />

  <div class="text-center max-w-[90vw] mx-auto mb-[var(--gap-xl)]">
    <h1 class="[font-size:var(--font-size-h1)] mb-8 text-[var(--color-green)]">Die Region entdecken</h1>
    <p class="[font-size:var(--font-size-h4)]">
      Die Ferienregion Schladming-Dachstein und die Salzburger Welt bieten eine beeindruckende Vielfalt an Natur, Sport und Kultur. Ob Wandern und Mountainbiken im Sommer, Skifahren auf bestens präparierten Pisten im Winter oder gemütliche Ausflüge zu Almen, Seen und charmanten Orten – hier findet jeder das passende Erlebnis. Unser Ferienhaus ist der ideale Ausgangspunkt, um all diese Abenteuer bequem zu erreichen und gleichzeitig die Ruhe und Schönheit der Berge zu genießen.
    </p>
    <a href="/kontakt" class="inline-block mt-8 button button-primary">Jetzt Anfragen</a>
  </div>

  <ImageText
    headline="Winterglück pur"
    description="Erlebe grenzenlosen Wintergenuss in der Region Schladming-Dachstein oder Richtung Salzburger Land: Genieße die Ski- und Snowboard-Action auf den Pisten der 4-Berge-Skischaukel “Hauser Kaibling, Planai, Hochwurzen, Reiteralm”. Gönne auch deinem Auto eine kleine Auszeit und schwing dich direkt vom Häuschen auf die Piste! Die Winter-Talstation der Reiteralm ist nur 300 Meter entfernt und die Skipiste erreichst du in wenigen Schritten. Gemütlich Wedeln oder in actiongeladene Abenteuer stürzen? HIer ist für jede*n etwas dabei! Doch auch abseits der Piste gibt es einiges zu entdecken: Bestaune die Winterwelt bei einer romantischen Winter-Wanderung, genieße die frische Winterluft bei einer Schneeschuhtour oder lade die Energiereserven bei einer Langlauftour auf."
    buttonText="Mehr Winter Highlights"
    buttonLink="https://www.schladming-dachstein.at/de/Winter"
    :openBlank=true
    bgColor="bg-[var(--color-bg-green)]"
  >
  </ImageText>


  <div class="flex flex-col md:flex-row justify-center gap-[var(--gap-m)] mb-[var(--gap-xl)]">
    <img src="/img/haus/schladming-dachstein-sommercard.jpg" alt="Schladming-Dachstein Sommercard" class="w-full md:w-[30vw] hover:grayscale transition duration-800">
    <img src="/img/haus/ferienhaus-puerstl-winter-2.jpg" alt="Ferienhaus Pürstl im Winter" class="w-full md:w-[30vw] hover:grayscale transition duration-800">
    <div class="relative">
      <img src="/img/kulinarik-krapfen.jpg" alt="Alm Kulinarik" class="w-full md:w-[30vw] hover:grayscale transition duration-800">
      <span class="absolute bottom-2 left-2 [font-size:var(--font-size-small)] text-[var(--color-white)] opacity-100">© Schladming-Dachstein | Peter Burgstaller</span>
    </div>
  </div>

   <ImageText
    headline="Der Bergsommer wartet auf dich!"
    description="Genieße im Bergsommer die frische Luft und atemberaubende Ausblicke auf die umliegende Bergwelt. Erlebe Abwechslung beim Mountainbiken Wandern, Mountain GoKart und vielem mehr. Im Bergherbst bieten dir die Schladminger und Radstädter Tauern wahre Bilderbuch-Momente. Bei uns hast du den perfekten Ausgangspunkt für unzählige Wander- und Biketouren und einzigartigen Sommer Abenteuern. Im Sommer genießt du außerdem die Vorteile der Schladming-Dachstein Sommer-Card."
    buttonText="Mehr Sommer-Abenteuer"
    buttonLink="https://www.schladming-dachstein.at/de/Sommer"
    :openBlank=true
    bgColor="bg-[var(--color-bg-brown)]"
    img="/img/schafe-berg.jpg"
    altText="Schafe am Berg bei Sonnenaufgang"
  >
  </ImageText>

</template>

<style scoped></style>
