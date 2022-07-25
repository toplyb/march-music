import { AxiosRequestConfig, AxiosResponse } from 'axios'

export type httpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT'

export interface ReturnHttp {
  category: number,
  code: number,
  result: object
}

export interface MusicRequestInterceptor {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any

  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface MusicRequestConfig extends AxiosRequestConfig {
  interceptor?: MusicRequestInterceptor
}
