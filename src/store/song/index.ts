import { defineStore } from 'pinia'

const useSongStore = defineStore('song', {
  state: () => ({
    currentSongList: []
  }),
  actions: {
    setCurrentSongList(data: any) {
      this.currentSongList = data
    }
  }
})

export default useSongStore
