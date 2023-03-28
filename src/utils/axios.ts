import axios from 'axios'
import { baseHttpUrl } from '@/config'

axios.defaults.baseURL = baseHttpUrl
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export default axios
