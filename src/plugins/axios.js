import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = process.env.API_URL
axios.defaults.paramsSerializer = params => qs.stringify(params, {arrayFormat: 'repeat'})

axios.interceptors.response.use(response => response, async (error) => {
  const { status } = error.response

  if (status === 403) {
    alert(status)
  } else if (status === 404) {
    alert(status)
  }

  return Promise.reject(error)
})
