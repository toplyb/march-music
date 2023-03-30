import { defineStore } from 'pinia'
import axios from '@/utils/axios'
import { getSongUrl } from '@/utils/httpUrls'

const useSongStore = defineStore('song', {
  state: () => ({
    currentSongList: [],
    currentSong: {}
  }),
  actions: {
    setCurrentSongList(data: any) {
      this.currentSongList = data
    },

    setCurrentSong(data: any) {
      this.currentSong = data
    },

    async getSongUrlHTTP(id: string) {
      return await axios.get(`${getSongUrl}?id=${id}`)
    }
  }
})

export default useSongStore
