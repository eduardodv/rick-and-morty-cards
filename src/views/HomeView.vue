<script setup lang="ts">
  import { computed, onMounted } from 'vue';
  import { useCharacterStore } from '@/stores/characterStore'

  import CardItem from '@/components/CardItem.vue';
  import FilterStatus from '@/components/FilterStatus.vue';
  import PaginationComponent from '@/components/PaginationComponent.vue';
  import NotFoundMessage from '@/components/NotFoundMessage.vue';
  import LoadingComponent from '@/components/LoadingComponent.vue';

  import { useHead } from '@unhead/vue'

  const store = useCharacterStore()

  const characters = computed(() => {
    return store.characters
  })

  const episodes = computed(() => {
    return store.episodes
  })

  onMounted(() => {
    store.fetchCharacters()
  })

  useHead({
    title: 'Home | Rick and Morty Cards'
  })
</script>

<template>
  <div class="container">
    <FilterStatus />

    <section class="cards" v-if="!store.isLoading">
      <CardItem 
        v-for="(character, index) in characters" :key="index"
        :character="character" 
        :episode="episodes[index]"
      />
    </section>

    <LoadingComponent v-else />

    <NotFoundMessage v-if="!store.isLoading && !characters.length" />
    
    <PaginationComponent v-if="!store.isLoading && characters.length" />
  </div>
</template>

<style lang="scss">
  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 399.98px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 400px) and (max-width: 575.98px) {
    .cards {
      gap: 1rem;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1400px) {
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 2000px) {
    .cards {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 2500px) {
    .cards {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media (min-width: 3000px) {
    .cards {
      grid-template-columns: repeat(7, 1fr);
    }
  }
</style>