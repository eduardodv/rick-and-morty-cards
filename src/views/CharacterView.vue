<script setup lang="ts">
  import api from '@/services/api';
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router'

  import { useHead } from '@unhead/vue'

  interface CharacterProps {
    image: string
    name: string
    status: string
    species: string
    gender: string
    origin: {
      name: string
    }
    location: {
      name: string
    }
  }

  const route = useRoute()
  const router = useRouter()

  const routeId = route.params.id
  
  const character = ref(<CharacterProps>{})
  const episodes = ref<string[]>([])

  const fetchCharacters = async () => {
    await api.get(`/character/${routeId}`)
    .then((response) => {
      character.value = response.data

      const listEpisodes = response.data.episode;

      const promises = listEpisodes.map((rota: string) => {
        return axios.get(rota);
      });

      Promise.all(promises)
      .then(responses => {
        episodes.value = responses.map((resp) => {
          return resp.data.name
        });
      })

      .catch(err => {
        console.error(err);
      });

    }).catch((err) => {
      console.log(err);
      if(err.response.status === 404) {
        router.push({ name: 'pageNotFound'})
      }
    })
  }

  onMounted(async () => {
    await fetchCharacters()

    useHead({
      title: `${character.value.name} | Rick and Morty Cards`
    })
  })
</script>

<template>
  <article id="single-post">
    <div class="container">
      <div class="card">
        <div class="image">
          <img :src="character.image" alt="" width="300" height="300">
        </div>
        <div class="content">
          <h1>{{ character.name }}</h1>
          <p class="subtitle" :class="{'green': character.status === 'Alive', 'red': character.status === 'Dead'}">
            {{ character.status }} - {{ character.species }}
          </p>
          <span>Gender:</span>
          <p>{{ character.gender }}</p>
          <span>Origin:</span>
          <p>{{ character.origin?.name }}</p>
          <span>Last Location:</span>
          <p>{{ character.location?.name }}</p>
        </div>
      </div>
      <div class="episodes">
        <h2>All episodes:</h2>
        <ul>
          <li v-for="(episode, index) in episodes" :key="index">
            {{ episode }}
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
  #single-post {
    padding-bottom: 4rem;

    .card {
      display: flex;
      font-size: 1.2rem;
      line-height: 1.4;

      .image {
        border-radius: 10px;
        width: 300px;
        height: 300px;
        overflow: hidden;
        background-color: var(--color-gray);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .content {
        flex: 1;
        padding-left: 1.6rem;
        h1 {
          font-size: 2rem;
          font-weight: bold;
        }

        .subtitle {
          font-weight: bold;
          padding-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid var(--color-gray);

          &:before {
            content: '';
            width: .8rem;
            height: .8rem;
            display: inline-block;
            background-color: var(--color-status);
            border-radius: 50%;
            transform: translateY(-1px);
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

        span {
          opacity: 0.5;
          margin-top: 0.8rem;
          display: block;
        }
      }
    }
    
    .episodes {
      margin-top: 1.5rem;

      h2 {
        font-weight: bold;
        margin-bottom: 1rem;
      }
      
      ul {
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: .625rem;

        li {
          background-color: var(--color-blue);
          padding: 2px 12px;
          border-radius: 5px;
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 575.98px) {
    #single-post {
      .card {
        flex-wrap: wrap;

        .image {
          width: 100%;
          margin: 1.2rem 0 0.8rem;
        }

        .content {
          padding-left: 0;
        }
      }
      
      .episodes {
        padding-top: 1rem;
        border-top: 1px solid var(--color-gray);
      }
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    #single-post {
      .card {
        font-size: 1rem;

        .image {
          width: 200px;
          height: 200px;
        }
      }
    }
  }
</style>