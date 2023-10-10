<script setup lang="ts">
  import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <HeaderComponent v-if="$route.name !== 'pageNotFound'" />
  <main>
    <RouterView />
  </main>
</template>
