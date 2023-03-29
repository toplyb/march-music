import useSearchStore from '@/store/search'
import useSongStore from '@/store/song'

const useSearchHook = () => {
  const store = useSearchStore()
  const songStore = useSongStore()

  const searchHandler = async () => {
    const result = await store.searchHTTP()
    songStore.setCurrentSongList(result)
  }

  return {
    searchHandler
  }
}

export default useSearchHook
