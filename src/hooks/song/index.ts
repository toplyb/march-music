import useSongStore from '@/store/song'

const useSongHook = () => {
  const store = useSongStore()

  const setPlaySongHandler = async (song: any) => {
    const songDetail: any = await store.getSongUrlHTTP(song.id)
    song['url'] = songDetail[0]['url']
    store.setCurrentSong(song)
  }

  return {
    setPlaySongHandler
  }
}

export default useSongHook
