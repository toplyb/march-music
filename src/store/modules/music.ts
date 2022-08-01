const musicModel: object = {
  state: {
    currentPlaySong: null,
    currentSongLyrics: '',
    indexHotSong: null
  },

  mutations: {
    changeCurrentPlaySong (state: any, value: object) {
      state.currentPlaySong = value
    },

    changeIndexHotSong (state: any, value: object) {
      state.indexHotSong = value
    },

    changeCurrentLyrics (state: any, value: string) {
      state.currentSongLyrics = value
    }
  },

  actions: {

  }
}

export default musicModel
