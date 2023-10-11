import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/services/api'
import axios from 'axios'

interface PageInfoProps {
  count?: number
  pages?: number
}

export const useCharacterStore = defineStore('character', () => {
  const isLoading = ref(false)
  const characters = ref([])
  const pageInfo = ref(<PageInfoProps>{})
  const episodes = ref<string[]>([]);
  const queryStore = ref('')
  const statusStore = ref('')
  const currentPageStore = ref(1)

  const fetchCharacters = async (query: string = '') => {
    isLoading.value = true

    queryStore.value = query

    await api.get(`/character?page=${currentPageStore.value}&name=${queryStore.value}${statusStore.value ? '&status=' + statusStore.value : ''}`)
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

  const filterByStatus = (status: string) => {
    statusStore.value = status
    currentPageStore.value = 1
    fetchCharacters(queryStore.value)
  }

  const pageChange = (currentPage: number) => {
    currentPageStore.value = currentPage
    fetchCharacters(queryStore.value)
  }

  const fetchSearch = (query: string) => {
    currentPageStore.value = 1
    fetchCharacters(query)
  }

  const reloadCharacters = () => {
    currentPageStore.value = 1
    statusStore.value = ''
    fetchCharacters()
  }

  return { 
    isLoading,
    characters,
    pageInfo,
    episodes,
    statusStore,
    currentPageStore,
    fetchCharacters,
    filterByStatus,
    pageChange,
    fetchSearch,
    reloadCharacters
  }
})
