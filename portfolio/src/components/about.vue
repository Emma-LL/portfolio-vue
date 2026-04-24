<template>
  <section class="relative py-16 px-8 w-full flex flex-col items-center overflow-hidden">
    <div class="text-center mb-8 z-[2]">
      <h2 class="text-[#3b5c39] text-[2.5rem] font-black m-0 font-['Nunito',_sans-serif]">
        Introduction
      </h2>
    </div>

    <div class="flex flex-col gap-12 items-center max-w-[1000px] w-full z-[2] md:flex-row md:items-stretch">
      <!-- Tekst boks med baggrund -->
      <div class="flex-1 bg-[#927fbd] py-12 px-8 text-white text-[1.1rem] leading-[1.6] text-center">
        <h3 class="text-[#3b5c39] text-[2rem] font-black -mt-2 mb-4 mx-0 font-['Nunito',_sans-serif] [text-shadow:-1px_-1px_0_var(--white),1px_-1px_0_var(--white),-1px_1px_0_var(--white),1px_1px_0_var(--white)]">
          About Me
        </h3>
        <p class="text-left font-['poppins',_sans-serif]">
          Jeg er multimediedesignstuderende med en kreativ og detaljeorienteret tilgang til mit arbejde. Jeg brænder for visuel formidling og frontend. <br>

          I min fritid udfolder jeg min kreativitet gennem tegning, strik og perler - kreative processer, der styrker min tålmodighed og detaljegrad. <br>

          Jeg er en rolig og reflekterende person, der trives med fordybelse og kreative projekter, hvor idéer får lov til at udvikle sig i et roligt tempo. <br>

          Jeg har ADHD og Autisme hvilket gør at jeg har brug for struktur og rolige omgivelser når jeg arbejder. <br>

          For mig handler design ikke kun om det visuelle, det handler om at skabe oplevelser, der giver mening for brugeren.

        </p>
      </div>

      <!-- Billede ramme med baggrund -->
      <div class="flex-[0.8] bg-[#927fbd] p-6 flex justify-center items-center">
        <!-- Udskift kilden med dit eget portræt -->
        <img src="../assets/image/profil.png" alt="Emma" class="w-full h-full object-cover rounded" />
      </div>
    </div>
  </section>
</template>

<script setup>

</script>