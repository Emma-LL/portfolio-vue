<template>
  <section class="relative py-16 px-8 flex flex-col items-center overflow-hidden h-auto">

    <!-- Overskrift -->
    <h2 class="text-[var(--dark-green)] text-[3rem] font-black font-['Nunito',_sans-serif] mb-20 z-10 tracking-wide">
      Experience
    </h2>

    <!-- Tidslinje Container -->
    <div class="relative w-full max-w-[1000px] z-10">
      
      <!-- Hvid streg (kun desktop) -->
      <div class="hidden md:block absolute top-[22px] left-[16%] right-[16%] h-[2px] bg-[var(--white)] z-[-1]"></div>
      
      <!-- De to hvide prikker (kun desktop) -->
      <div class="hidden md:block absolute top-[17px] left-[33%] w-[12px] h-[12px] bg-[var(--white)] rounded-full z-[-1] -translate-x-1/2"></div>
      <div class="hidden md:block absolute top-[17px] left-[66%] w-[12px] h-[12px] bg-[var(--white)] rounded-full z-[-1] -translate-x-1/2"></div>

      <!-- Erfaringer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
        
        <div v-for="exp in experiences" :key="exp.id" class="flex flex-col items-center gap-6">
          
          <!-- Den grønne pille / overskrift (margin-bottom ændret til mb-12) -->
          <div class="bg-[var(--dark-green)] text-[var(--white)] font-['Nunito',_sans-serif] font-bold text-[1.2rem] px-8 py-2 rounded-full mb-12 text-center shadow-md z-10">
            {{ exp.title }}
          </div>

          <!-- Det lilla tekstfelt med skæve blob-hjørner -->
          <div class="bg-[var(--main-purple)] text-[var(--white)] p-8 text-left text-[0.95rem] flex flex-col justify-between mx-2 rounded-[2%_4%_3%_5%/4%_3%_5%_2%] shadow-sm transition-all duration-300 w-full h-full">
            
            <div>
              <!-- Hovedteksten (Bliver klippet efter 5 linjer hvis den ikke er expanded) -->
              <p :class="['leading-relaxed transition-all duration-300', exp.expanded ? '' : 'line-clamp-5']">
                {{ exp.text }}
              </p>

              <!-- De nye felter vises KUN hvis knappen er trykket, og hvis de findes i dataen -->
              <div v-if="exp.expanded" class="mt-4 leading-relaxed transition-all duration-300">
                
                <!-- Viser 'work' teksten hvis den findes -->
                <p v-if="exp.work" class="mb-2">{{ exp.work }}</p>
                
                <!-- Laver en bullet-liste hvis 'tasks' arrayet findes -->
                <ul v-if="exp.tasks" class="list-disc pl-5 mb-4 space-y-1">
                  <li v-for="(task, index) in exp.tasks" :key="index">
                    {{ task }}
                  </li>
                </ul>

                <!-- Viser 'requirements' teksten hvis den findes -->
                <p v-if="exp.requirements">{{ exp.requirements }}</p>

              </div>
            </div>

            <!-- Knappen til at folde ud/ind -->
            <button 
              @click="exp.expanded = !exp.expanded" 
              class="mt-8 font-bold text-[var(--dark-green)] hover:text-[#2c4a2e] bg-[var(--white)] px-6 py-2 rounded-full self-center transition-colors shadow-sm"
            >
              {{ exp.expanded ? 'See less' : 'See more' }}
            </button>
            
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Data til dine oplevelser med ekstra tekst så vi kan se effekten
const experiences = ref([
  { 
    id: 1, 
    title: 'Kvist industries', 
    text: 'Som produktionsmedarbejder hos Kvist Industries arbejdede jeg med fremstilling af designmøbler i høj kvalitet. Jeg havde ansvar for at modtage bordplader efter CNC-bearbejdning og sikre, at de levede op til virksomhedens høje standarder.',
    work: 'Mine primære arbejdsopgaver omfattede:',
    tasks: ['Modtagelse og håndtering af bordplader efter CNC-skæring',
            'Spartling og efterbehandling af kanter på bordplader',
            'Kvalitetskontrol med fokus på finish og detaljer',
            'Bidrag til produktionen af møbler for anerkendte designbrands som Fritz Hansen, HAY, Muuto og Fredericia Furniture'],
    requirements: 'Stillingen krævede præcision, sans for detaljer og evnen til at arbejde struktureret i en produktionslinje med fokus på kvalitet og effektivitet.',
    expanded: false // Tilføjet property til at styre om den er åben
  },
  { 
    id: 2, 
    title: 'Westwind', 
    text: 'Jeg havde ansvaret for den daglige drift af Westwind-butikken i Vejers, hvor jeg sikrede en indbydende butik og en god kundeoplevelse.',
    work: 'Mine primære arbejdsopgaver omfattede:',
    tasks: ['Vedligeholdelse af butikkens fremtoning, herunder rengøring og orden',
            'Modtagelse af varer samt organisering og opfyldning på lager',
            'Kundebetjening og rådgivning med fokus på service og salg',
            'Indretning af butikken og optimering af vareplacering for at skabe et godt flow og en attraktiv præsentation'],
    requirements: 'Stillingen krævede selvstændighed, overblik og gode samarbejds- og serviceevner.',
    expanded: false
  },
  { 
    id: 3, 
    title: 'Studerende', 
    text: 'Jeg er i gang med multimediedesignuddannelsen, hvor jeg arbejder med digitale løsninger og visuel kommunikation.',
    work: 'Uddannelsen giver mig kompetencer inden for:',
    tasks: ['Webdesign og brugeroplevelse (UX/UI)',
            'Grafisk design og visuel identitet',
            'Frontend-udvikling (HTML, CSS, evt. JavaScript)',
            'Idéudvikling og projektarbejde'],
    requirements: 'Jeg har fokus på at kombinere kreativitet og funktionalitet for at skabe brugervenlige digitale løsninger.',
    expanded: false
  }
]);
</script>
