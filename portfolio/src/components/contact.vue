<template>
  <section class="relative pt-16 px-8 pb-32 w-full flex flex-col items-center overflow-hidden font-['Nunito',_sans-serif]">
  
    <!-- Overskrift -->
    <div class="relative inline-flex items-center justify-center mb-24 z-10">
      <img src="../assets/svg/name.svg" class="w-[350px]" alt="Background shape">
      <h2 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--white)] text-[2.5rem] font-black m-0 tracking-[2px] w-full text-center z-[2]">
        Contact
      </h2>
    </div>

    <!-- Hovedindhold -->
    <div class="flex flex-col items-center gap-20 z-10 w-full max-w-[900px] md:flex-row md:justify-between md:items-stretch md:gap-24">
      <!-- Venstre boks -->
      <div class="bg-[var(--main-purple)] py-12 px-8 flex items-center justify-center -rotate-2 flex-1 max-w-[300px] w-full text-center max-h-[200px]">
        <h3 class="text-[var(--white)] text-[2.2rem] font-black leading-[1.2] m-0">Let's work<br>together</h3>
      </div>

      <!-- Højre kontakt info (Piller) -->
      <div class="flex flex-col gap-6 flex-1 justify-center md:pl-8 p-5">
        <a href="tel:+1234567890" 
           class="bg-[var(--main-purple)] text-[var(--white)] no-underline text-[1.2rem] font-extrabold py-3 px-6 mx-2 rounded-full inline-block w-fit transition-transform duration-200 hover:scale-105">
           +45 71788485
        </a>
        
        <a href="mailto:emmalindhoj@gmail.com" 
           class="bg-[var(--main-purple)] text-[var(--white)] no-underline text-[1.2rem] font-extrabold py-3 pl-6 pr-12 md:ml-4 rounded-full inline-block w-fit transition-transform duration-200 hover:scale-105">
           emmalindhoj@gmail.com
        </a>
        
        <a href="https://www.linkedin.com/in/emma-lindhøj" target="_blank" 
           class="bg-[var(--main-purple)] text-[var(--white)] no-underline text-[1.2rem] font-extrabold py-3 pl-6 pr-16 md:ml-8 rounded-full inline-block w-fit transition-transform duration-200 hover:scale-105">
           www.linkedin.com/in/emma-lindhøj
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>