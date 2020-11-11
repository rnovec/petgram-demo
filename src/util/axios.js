import axios from 'axios'
import { getToken } from './auth'

// create singleton for axios
const _axios = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8000/api/v1'
      : 'https://petgram-demo.herokuapp.com/api/v1',
  mode: 'cors',
  credentials: 'same-origin',
  timeout: 20000
})

_axios.interceptors.request.use(config => {
  const token = getToken()
  if (!config.public) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
})

// response interceptor
_axios.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    return Promise.reject(error.response.data)
  }
)

export default _axios
