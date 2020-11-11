import request from '../util/axios'

export function createPost (data) {
  return request({
    url: '/posts',
    method: 'POST',
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
