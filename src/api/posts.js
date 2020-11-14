import request from '../util/axios'

export function getPosts () {
  return request({
    url: '/posts',
    method: 'GET'
  })
}

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

export function getPostComments (id) {
  return request({
    url: `/posts/${id}/comments`,
    method: 'GET'
  })
}


export function removePost (id) {
  return request({
    url: `/posts/${id}`,
    method: 'DELETE'
  })
}
