<template>
  <section class="py-16 px-8 flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 md:gap-y-20 md:gap-x-16 max-w-[900px] w-full">
      
      <!-- Skiftet div ud med RouterLink og tilføjet :to="sign.route" -->
      <RouterLink 
        class="flex flex-col items-center relative transition-transform duration-300 ease-in-out no-underline cursor-pointer hover:scale-105" 
        v-for="sign in signs" 
        :key="sign.id"
        :to="sign.route"
        :style="{ rotate: `${sign.rotation}deg` }"
      >
        <!-- Hoved (Pin) - Kan udskiftes med dit eget SVG billede -->
        <div class="absolute -top-5 z-10 text-3xl">📌</div>

        <!-- Snore tegnet med SVG for at de altid sidder fast på formen -->
        <svg class="-mb-[5px] z-[1]" width="100%" height="60" preserveAspectRatio="none">
          <line x1="50%" y1="0" x2="15%" y2="60" stroke="#f3f1ee" stroke-width="2" />
          <line x1="50%" y1="0" x2="85%" y2="60" stroke="#f3f1ee" stroke-width="2" />
        </svg>

       <div class="bg-[var(--main-purple)] p-2 rounded-xl w-full max-w-[350px] relative z-[2] shadow-[2px_5px_15px_rgba(0,0,0,0.1)]">
          <div class="border-2 border-[var(--white)] rounded-lg py-10 px-4 relative flex justify-center items-center min-h-[150px]">
            <!-- v-html tillader os at bruge <br> i vores tekst -->
            <h2 
              class="text-[var(--dark-green)] font-['Nunito',_sans-serif] text-[2.2rem] font-black text-center leading-[1.1] m-0 [text-shadow:-2px_-2px_0_var(--white),2px_-2px_0_var(--white),-2px_2px_0_var(--white),2px_2px_0_var(--white),0px_-2px_0_var(--white),0px_2px_0_var(--white),-2px_0px_0_var(--white),2px_0px_0_var(--white)]" 
              v-html="sign.text">
            </h2>
          </div>
        </div>
      </RouterLink>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// Tilføjet 'route' til hvert skilt
const signs = ref([
  { id: 1, text: "Portfolio<br>Project",  rotation: -6, route: '/portfolio' },
  { id: 2, text: "Experience",    rotation: 4,  route: '/experience' }
]);
</script>
