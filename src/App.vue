<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
     <nav>
      <ul>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gege">Gege</RouterLink>
        <RouterLink to="/peti">Peti</RouterLink>
        <RouterLink to="/gyuri">Gyuri</RouterLink>
      </ul>
  </nav>

    <div class="wrapper">


    </div>
  </header>
</template>


