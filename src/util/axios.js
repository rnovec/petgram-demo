import axios from 'axios'

// create singleton for axios
const _axios = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  mode: 'cors',
  credentials: 'same-origin',
  timeout: 20000
})

_axios.interceptors.request.use(config => {
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
