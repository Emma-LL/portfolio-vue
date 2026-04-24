<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full pt-8 pb-4">
    <nav class="flex justify-center items-center flex-wrap gap-4 md:gap-8 w-full px-4">
      
      <RouterLink 
        to="/" 
        class="bg-[var(--main-purple)] text-[var(--white)] font-['Nunito',_sans-serif] font-extrabold text-[1.2rem] py-2 px-8 rounded-full no-underline transition-transform hover:scale-105"
      >
        Portfolio
      </RouterLink>
      
      <RouterLink 
        to="/portfolio" 
        class="bg-[var(--main-purple)] text-[var(--white)] font-['Nunito',_sans-serif] font-extrabold text-[1.2rem] py-2 px-8 rounded-full no-underline transition-transform hover:scale-105"
      >
        Project
      </RouterLink>
      
      <RouterLink 
        to="/experience" 
        class="bg-[var(--main-purple)] text-[var(--white)] font-['Nunito',_sans-serif] font-extrabold text-[1.2rem] py-2 px-8 rounded-full no-underline transition-transform hover:scale-105"
      >
        Experience
      </RouterLink>

    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--white);
}

nav a.router-link-exact-active:hover {
  background-color: var(--main-purple);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
