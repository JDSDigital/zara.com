import axios from 'axios'

const createApiClient = () => {
  const httpClient = axios.create({
    baseURL: 'https://itunes.apple.com'
  })

  httpClient.interceptors.response.use(
    (res) => {
      console.info(res.config.url)
      return res
    },
    (error) => {
      const {
        response: { data, config }
      } = error

      const response = {
        data,
        headers: config.headers,
        url: config.url
      }

      console.error(response)

      throw new Error(error.response.data)
    }
  )

  return httpClient
}

export const ApiClient = createApiClient()
