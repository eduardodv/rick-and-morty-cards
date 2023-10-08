<script setup lang="ts">
import CardItem from '@/components/CardItem.vue';
import FilterStatus from '@/components/FilterStatus.vue';


</script>

<template>
  <div class="container">
    <FilterStatus />
    <section class="cards">
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </section>
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