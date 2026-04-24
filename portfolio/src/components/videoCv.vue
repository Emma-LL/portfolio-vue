<template>
  <section class="py-10 px-8 flex flex-col items-center w-full">
    
    <!-- Overskrift og undertekst -->
    <div class="text-center mb-10">
      <h2 class="text-[var(--dark-green)] text-[3rem] md:text-[4rem] font-black font-['Nunito',_sans-serif] mb-4">
        Video CV
      </h2>
      <p class="text-[#4a6348] text-lg font-medium"> <!-- Mørkegrønlig/grå farve til undertekst -->
        Se eller hør mere om mig, mine kompetencer og hvad jeg brænder for.
      </p>
    </div>

    <!-- Den store lilla boks -->
    <div class="bg-[var(--main-purple)] w-full max-w-[1000px] rounded-[20px] p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 shadow-md">
      
      <!-- Video kasse (Venstre) -->
      <div class="w-full md:w-[55%] aspect-video bg-black rounded-[15px] overflow-hidden shadow-lg relative">
        <iframe 
          class="w-full h-full absolute top-0 left-0"
          :src="`https://www.youtube.com/embed/${youtubeId}?rel=0`" 
          title="Video CV" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <!-- Tekst og knapper (Højre) -->
      <div class="w-full md:w-[45%] text-[var(--white)] flex flex-col gap-6">
        
        <div>
          <h3 class="text-2xl font-bold font-['Nunito',_sans-serif] mb-4">
            Lær mig bedre at kende
          </h3>
          <p class="text-[0.95rem] leading-loose opacity-90">
            I denne video fortæller jeg kort om mig selv, min baggrund, erfaringer og hvordan jeg skaber værdi gennem design og visuel kommunikation.
          </p>
        </div>

        <!-- Handlingsknapper -->
        <div class="flex flex-col gap-4 items-start mt-2">
          
          <!-- Se Video knap -->
          <a :href="`https://www.youtube.com/watch?v=${youtubeId}`" target="_blank" class="bg-[var(--white)] text-[var(--dark-green)] font-bold text-[1rem] px-6 py-2.5 rounded-full flex items-center gap-2 hover:scale-105 transition-transform duration-200">
            Se video CV
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue';
 
const youtubeId = ref('dsxKz3AYw2A');
</script>