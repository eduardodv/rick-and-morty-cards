<script setup lang="ts">
  import { useCharacterStore } from '@/stores/characterStore';
  
  const store = useCharacterStore()

  const handleReloadCharacters = () => {
    store.reloadCharacters()
  }
</script>

<template>
  <section>
    <h3>Ops, no characters found!</h3>
    <ul>
      <li>The terms used for the search were not found;</li>
      <li>Try changing the filter.</li>
    </ul>
    <div class="button-container">
      <button @click="handleReloadCharacters()">Reload characters</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 3rem 0;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  ul {
    display: inline-block;
    text-align: left;
    padding: 0;
  }

  .button-container {
    margin-top: 1rem;
    text-align: center;

    button {
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
}
</style>
