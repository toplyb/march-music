const musicModel: object = {
  state: {
    currentPlaySong: null,
    indexHotSong: null
  },

  mutations: {
    changeCurrentPlaySong (state: any, value: object) {
      state.currentPlaySong = value
    },

    changeIndexHotSong (state: any, value: object) {
      state.indexHotSong = value
    }
  },

  actions: {

  }
}

export default musicModel
