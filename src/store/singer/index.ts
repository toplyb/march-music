import { defineStore } from 'pinia'
import axios from '@/utils/axios'
import { getAllSingers } from '@/utils/httpUrls'

const useSingerStore = defineStore('singer', {
  state: () => ({
    singerList: []
  }),
  actions: {
    async getAllSingersHTTP(initial: string, type = '-1',area = '-1') {
      const result = await axios.get(`${getAllSingers}?type=${type}&area=${area}&initial=${initial}`)
      console.log(result)
    }
  }
})

export default useSingerStore
