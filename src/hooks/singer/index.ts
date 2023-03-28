import useSingerStore from '@/store/singer'

const useSingerHook = () => {
  const store = useSingerStore()

  const getAllSingerHandler = async () => {
    await store.getAllSingersHTTP('a')
  }

  return {
    getAllSingerHandler
  }
}

export default useSingerHook
