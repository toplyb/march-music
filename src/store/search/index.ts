import { defineStore } from 'pinia'
import axios from '@/utils/axios'

const useSearchStore = defineStore('search', {
  state: () => ({
    inputValue: ''
  }),
  actions: {
    async searchHTTP(keyWord = '') {
      const result = await axios.get(`/search?keywords=${keyWord ? keyWord : this.inputValue}`)
      console.log(result)
    }
  }
})

export default useSearchStore
