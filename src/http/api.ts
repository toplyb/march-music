import { AxiosRequestHeaders } from 'axios'
import MusicRequest from '@/http/http'

const api = new MusicRequest({
  baseURL: process.env.VUE_APP_API,
  timeout: 1000,
  interceptor: {
    requestInterceptor: (config) => {
      const token = ''
      if (token) {
        (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`
      }

      return config
    }
  }
})

export default api
