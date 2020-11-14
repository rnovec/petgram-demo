import request from '../util/axios'

export function login (data) {
  return request({
    url: '/token/access/',
    method: 'POST',
    public: true,
    data
  })
}

export function register (data) {
  return request({
    url: '/accounts/register/',
    method: 'POST',
    public: true,
    data
  })
}

export function getUserInfo (id) {
  return request({
    url: `/users/${id}`,
    method: 'GET'
  })
}

export function updateProfile (id, data) {
  return request({
    url: `/users/${id}`,
    headers: { 'Content-Type': 'multipart/form-data' },
    method: 'PUT',
    data
  })
}

export function getUserPosts (id) {
  return request({
    url: `/users/${id}/posts`,
    method: 'GET'
  })
}

