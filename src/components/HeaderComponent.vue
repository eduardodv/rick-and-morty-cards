<script setup lang="ts">
  import { RouterLink, useRouter } from 'vue-router'
  import HeaderSearch from './HeaderSearch.vue';

  import { useCharacterStore } from '@/stores/characterStore';
import { onMounted } from 'vue';
  
  const store = useCharacterStore()

  const route = useRouter()

  const handleReloadCharacters = () => {
    if(route.currentRoute.value.name === 'home') {
      store.reloadCharacters()
    }
  }

  onMounted(async () => {
    await route.isReady()
  })
</script>

<template>
  <header id="header">
    <div class="container">
      <RouterLink to="/" @click="handleReloadCharacters">
        <img alt="logo" class="logo" src="@/assets/logo.png" width="300" />
        <h1 v-if="$route.name === 'home'">Rick and Morty Cards</h1>
      </RouterLink>

      <HeaderSearch v-if="$route.name === 'home'" />
      
      <RouterLink v-else to="/" class="back">
        <font-awesome-icon icon="fa-solid fa-angle-left" />
        Voltar
      </RouterLink>
    </div>
  </header>
</template>

<style lang="scss">
  #header {
    padding: 1.2rem 0;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0 1rem;
    }

    .logo {
      max-width: 100%;
      transition: all 0.3s ease;

      &:hover {
        margin-left: .625rem;
      }
    }

    h1 {
      font-size: 0;
      width: 1px;
      height: 1px;
      display: inline-block;
      overflow: hidden;
      position: absolute!important;
      border: 0!important;
      padding: 0!important;
      margin: 0!important;
      clip: rect(1px,1px,1px,1px);
    }

    .back {
      background: var(--color-blue);
      border: 0;
      padding: .8125rem 1.375rem;
      border-radius: 3.125rem;
      color: #fff;
      display: inline-block;
      cursor: pointer;
      font-weight: 900;
      line-height: 1;
      text-decoration: none;
      transition: all 0.2s ease;

      &:hover {
        color: var(--color-black);
        background: var(--color-lime);
      }
    }
  }

  @media (max-width: 575.98px) {
    #header {
      .container {
        justify-content: center;
      }

      .logo {
        margin-bottom: .9375rem;
      }
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) { 
    .logo {
      width: 200px;
    }
  }
</style>
