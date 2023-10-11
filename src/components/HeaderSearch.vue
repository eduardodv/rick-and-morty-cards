<script setup lang="ts">
  import { useCharacterStore } from '@/stores/characterStore'
  import { ref } from 'vue';

  const store = useCharacterStore()

  const search = ref("")

  const handleSearchCharacter = (query:string) => {
    if (query.length > 0) {
      store.fetchSearch(query)
      search.value = ""
    }
  }

</script>

<template>
  <div id="search">
    <form>
      <input type="text" placeholder="Search" v-model="search">
      <button @click.prevent="handleSearchCharacter(search)">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
    </form>
  </div>
</template>

<style lang="scss">
  #search {
    form {
      min-width: 18.75rem;
      width: 25vw; 
      position: relative;
      display: flex;
    }

    input, button {
      padding: 0.9rem 1.5rem;
      background: transparent;      
    }

    input {
      flex: 1;
      border-right: 0;
      padding-right: 4.125rem;
      border: 2px solid var(--color-blue);
      border-radius: 50px;
      
      &:focus-visible {
        outline: none;
        border: 2px solid var(--color-lime);
      }
    }

    button {
      border-left: 0;
      cursor: pointer;
      font-size: 1.25rem;
      border: 0;
      color: var(--color-blue);
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      transition: all 0.2s ease;

      &:hover {
        color: var(--color-lime);
      }
    }
  }

  @media (max-width: 575.98px) {
    #search {
      width: 100%;
      
      form {
        width: 100%;
        min-width: auto;
      }
    }
  }
</style>
