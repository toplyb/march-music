import axios, { AxiosInstance } from 'axios'
import { MusicRequestConfig, MusicRequestInterceptor } from '@/types/Http'

class MusicRequest {
  instance: AxiosInstance
  interceptors?: MusicRequestInterceptor

  constructor (config: MusicRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptor

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      config => {
        return config
      },
      err => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      res => {
        if (res.data.code !== 200) {
          alert('接口数据获取失败')
          return false
        }
        return res.data
      },
      err => {
        alert('接口数据获取失败')
        return err
      }
    )

    // 单个实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request<T> (config: MusicRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 判断单个请求是否有拦截器
      if (config.interceptor?.requestInterceptor) {
        config = config.interceptor.requestInterceptor(config)
      }

      this.instance.request<any, T>(config)
        .then(
          res => {
            if (config.interceptor?.responseInterceptor) {
            // res = config.interceptor.responseInterceptor(res)
            }
            resolve(res)
          })
        .catch(err => {
          reject(err)
        })
    })
  }

  get<T> (config: MusicRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'get' })
  }

  post<T> (config: MusicRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'post' })
  }

  patch<T> (config: MusicRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'patch' })
  }

  put<T> (config: MusicRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'put' })
  }

  delete<T> (config: MusicRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'delete' })
  }
}

export default MusicRequest
