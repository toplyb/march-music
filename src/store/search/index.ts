import { defineStore } from 'pinia'
import axios from '@/utils/axios'

const useSearchStore = defineStore('search', {
  state: () => ({
    inputValue: ''
  }),
  actions: {
    async searchHTTP(keyWord = '') {
      return await axios.get(`/search?keywords=${keyWord ? keyWord : this.inputValue}`)
    }
  }
})

export default useSearchStore
