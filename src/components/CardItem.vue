<script setup lang="ts">
  import { RouterLink } from 'vue-router';

  interface characterProps {
    id: number
    name: string
    status: string
    species: string
    image: string
    location: {
      name: string
    }
  }

  defineProps<{
    character: characterProps
    episode: string
  }>()
  
</script>

<template>
  <RouterLink :to="`/character/${character.id}`" class="card-item">
    <div class="image">
      <img :src="character.image" alt="">
    </div>
    <div class="content">
      <h2 class="title">{{ character.name }}</h2>
      <div 
        class="subtitle"
        :class="{'green': character.status === 'Alive', 'red': character.status === 'Dead'}"
      >
        {{ character.status }} - {{ character.species }}
      </div>
      <span>Last known location:</span>
      <p>{{ character.location.name }}</p>
      <span>First seen in:</span>
      <p>{{ episode }}</p>
    </div>
  </RouterLink>
</template>

<style lang="scss">
  .card-item {
    border-radius: 10px;
    overflow: hidden;
    background-color: var(--card-item-color);
    color: var(--color-text);
    text-decoration: none;
    transition: 0.3s ease;
    position: relative;
    padding-left: 200px;

    .image {
      width: 200px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .content {
      flex: 1;
      padding: 1rem;

      span {
        display: block;
        margin-top: 0.8rem;
        opacity: 0.5;
      }
    }

    .title {
      line-height: 1.3;
      font-weight: bold;
      transition: 0.3s ease;
      color: var(--color-text);
    }

    .subtitle {
      display: flex;
      align-items: center;
      gap: .3125rem;
      line-height: 1;
      margin-top: .5rem;

      &:before {
        content: '';
        width: .5rem;
        height: .5rem;
        display: inline-block;
        background-color: var(--color-status);
        border-radius: 50%;
      }

      &.green {
        &:before {
        background-color: var(--color-status-green);
        }
      }

      &.red {
        &:before {
        background-color: var(--color-status-red);
        }
      }
    }

    p {
      transition: 0.3s ease;
    }
  }

  @media (hover: hover) {
    .card-item {
      &:hover {
        transform: scale(1.04);

        .title, p {
          color: var(--card-item-color-hover);
        }
      }
    }
  }

  @media (max-width: 991.98px) {
    .card-item {
      padding-left: 0;

      .image {
        width: 100%;
        height: 200px;
        position: relative;
      }
    }
  }

  @media (min-width: 400px) and (max-width: 575.98px) {
    .card-item {
      .image {
        height: 160px;
      }

      .title {
        font-size: 1.3rem;
      }

      .content {
        padding: 0.7rem;
        font-size: 0.9rem;
      }
    }
  }
</style>
