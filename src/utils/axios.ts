import axios from 'axios'
import { baseHttpUrl } from '@/config'

axios.defaults.baseURL = baseHttpUrl
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  if (response.data.code === 200) {
    if (response.data.result) {
      return response.data.result
    } else if (response.data.data) {
      return response.data.data
    }
  } else {
    console.log('error')
  }
}, (error) => {
  return Promise.reject(error)
})

export default axios
