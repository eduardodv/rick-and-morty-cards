import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/services/api'
import axios from 'axios'

export const useCharacterStore = defineStore('character', () => {
  const isLoading = ref(false)
  const characters = ref([])
  const pageInfo = ref({})
  const episodes = ref<string[]>([]);
  const queryStore = ref('')
  const statusStore = ref('')

  const fetchCharacters = async (query: string = '') => {
    isLoading.value = true

    queryStore.value = query
    
    // await new Promise((r) => setTimeout(r, 2000)) // Fake promise for delay

    await api.get(`/character?name=${queryStore.value}${statusStore.value ? '&status=' + statusStore.value : ''}`)
    .then((response) => {
      characters.value = response.data.results
      pageInfo.value = response.data.info
      
      isLoading.value = false
      
      const listEpisodes = response.data.results;

      const promises = listEpisodes.map((rota : { episode: string[] }) => {
        return axios.get(rota.episode[0]);
      });

      Promise.all(promises)
      .then(respostas => {
        episodes.value = respostas.map((resp) => {
          return resp.data.name
        });
      })
      .catch(err => {
        console.error(err);
        isLoading.value = false
      });

    }).catch((err) => {
      console.log(err);
      characters.value = []
      pageInfo.value = {}
      isLoading.value = false
    })
  }

  const filterByStatus = async (status: string) => {
    statusStore.value = status
    fetchCharacters(queryStore.value)
  }

  return { 
    isLoading,
    characters,
    pageInfo,
    episodes,
    statusStore,
    fetchCharacters,
    filterByStatus
  }
})
