import request from '../util/axios'

export function createPost (data) {
  return request({
    url: '/posts',
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}

export function createComment (data) {
  return request({
    url: '/comments',
    method: 'POST',
    data
  })
}
