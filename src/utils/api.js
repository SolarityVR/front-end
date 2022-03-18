import axios from 'axios'

const createApiInstance = () => (
  axios.create({
    baseURL: '/api'
  })
)

const handleResponse = (res) => res.data ? Promise.resolve(res) : Promise.reject(res)

const catchError = (err) => Promise.reject(err.response.data)

export default {
  get: path => (
    createApiInstance()
      .get(path)
      .then(handleResponse)
      .catch(catchError)
  ),
  post: (path, body = {}, headers = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'POST',
        headers,
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  put: (path, body = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'PUT',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  )
}
