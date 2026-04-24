<template>
  <section class="py-16 px-8 flex flex-col items-center gap-24 overflow-hidden">
    
    <!-- Dynamisk liste med projekter -->
    <div 
      class="relative w-full max-w-[900px]" 
      v-for="project in projectsList" 
      :key="project.id"
    >

      <h2 class="text-[var(--dark-green)] font-['Nunito',_sans-serif] text-[2.5rem] font-black mb-6 tracking-[1px]">
        {{ project.title }}
      </h2>

      <div class="flex flex-col gap-12 items-center md:flex-row md:items-stretch">
        
        <!-- Billede (Venstre) -->
        <div class="flex-[0.8] w-full max-w-[350px] relative z-10">
          <img 
            :src="project.img" 
            :alt="project.title" 
            class="w-full aspect-[4/5] object-contain" 
          />
        </div>

        <!-- Tekstboks med lilla baggrund og kant (Højre) -->
        <div class="flex-[1.2] bg-[var(--main-purple)] py-12 px-8 relative z-10">
          <!-- Den grønne "More" label der ligger halvt udenfor -->
          <div class="absolute -bottom-[30px] right-5 bg-[var(--dark-green)] text-[var(--white)] font-['Nunito',_sans-serif] text-[1.3rem] font-extrabold text-center py-4 px-6 z-20">
            {{ project.more }}
          </div>

          <p class="text-[var(--white)] text-[1.1rem] leading-[1.6] m-0 font-['Poppins',_sans-serif]">
            {{ project.desc }}
          </p>
        </div>
        
      </div>

    </div>
  </section>  
</template>

<script setup>
import { ref } from 'vue';

// Dummy data base til dine projekter
const projectsList = ref([
  {
    id: 1,
    title: "Mini me",
    more: "see more",
    // Ændret sti:
    img: "../src/assets/image/mini-me.png",
    desc: "Dette projekt var min første opgave i Adobe Illustrator, hvor formålet var at skabe en illustration, der fortæller noget personligt om mig. Jeg arbejdede med at oversætte min erfaring fra digital tegning til vektorgrafik, med fokus på rene linjer, former og farver. Gennem processen udviklede jeg en bedre forståelse for Illustrator og de muligheder, der ligger i at arbejde med vektorbaseret design."
  },
  {
    id: 2,
    title: "Logo Design",
    more: "see more",
    // Ændret sti:
    img: "../src/assets/image/study-break.png",
    desc: "Mit første logo designet til en fredagsbar. Logoet er skabt med fokus på fællesskab, hygge og en afslappet stemning, understøttet af en enkel form og en varm farvepalette. I dette projekt arbejdede jeg både med idéudvikling og præsentation, hvor jeg lærte at fremvise et logo professionelt gennem variationer, farver og anvendelse."
  },
  {
    id: 3,
    title: "Recipe website",
    more: "see more",
    // Ændret sti:
    img: "../src/assets/image/recipe-website.png",
    desc: "Et visuelt opskriftswebsite udviklet ud fra et færdigt design i Figma. Projektet fokuserer på at omsætte design til kode ved brug af HTML og CSS, med særlig vægt på layout, typografi og responsivt design. Gennem dette arbejde har jeg styrket mine færdigheder i frontend-udvikling og lært at skabe en brugervenlig og æstetisk tiltalende weboplevelse."
  },
  {
    id: 4,
    title: "Brøderne Løvehjerte",
    more: "see more",
    // Ændret sti:
    img: "../src/assets/image/broderne-lovehjerte.png",
    desc: "Dette projekt blev udviklet som vores eksamensprojekt på 1. semester i samarbejde med et amatørteater i Esbjerg. Formålet var at skabe en visuel identitet og kommunikationsmateriale til forestillingen. Projektet omfattede design af plakat, brochure, opgavehæfte til børn samt en hjemmeside. Fokus var på at formidle fortællingens eventyrlige univers og gøre oplevelsen tilgængelig og engagerende for både børn og voksne."
  },
  {
    id: 5,
    title: "Promo video",
    more: "see more",
    // Ændret sti:
    img: "../src/assets/image/logo-sea.png",
    desc: "I dette projekt producerede vi en promo video for Syddansk Erhvervsakademi (SEA) med fokus på at fremhæve skolens miljø, studieliv og muligheder. Gennem visuel storytelling og målrettet klipning arbejdede vi med at skabe en engagerende og professionel video, der appellerer til potentielle studerende. Projektet omfattede idéudvikling, optagelse og redigering, hvor vi lagde vægt på at formidle en autentisk og inspirerende fortælling om livet på SEA."
  }
]);
</script>