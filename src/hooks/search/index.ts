import useSearchStore from '@/store/search'

const useSearchHook = () => {
  const store = useSearchStore()

  const searchHandler = async () => {
    await store.searchHTTP()
  }

  return {
    searchHandler
  }
}

export default useSearchHook
