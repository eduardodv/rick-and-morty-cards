<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import HeaderSearch from './HeaderSearch.vue';
</script>

<template>
  <header id="header">
    <div class="container">
      <RouterLink to="/">
        <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="300" />
      </RouterLink>

      <HeaderSearch />
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
    }

    .logo {
      max-width: 100%;
      transition: all 0.3s ease;

      &:hover {
        margin-left: .625rem;
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
