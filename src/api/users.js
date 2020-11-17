import request from '../util/axios'

export function login (data) {
  return request({
    url: '/accounts/login',
    method: 'POST',
    public: true,
    data
  })
}

export function refreshToken (data) {
  return request({
    url: '/accounts/refresh',
    method: 'POST',
    data
  })
}


export function register (data) {
  return request({
    url: '/accounts/register',
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

export function updateProfile (id, data, headers = {}) {
  return request({
    url: `/users/${id}`,
    headers,
    method: 'PUT',
    data
  })
}

export function removePicture (id) {
  return request({
    url: `/users/${id}/picture`,
    method: 'PATCH'
  })
}

export function getUserPosts (id) {
  return request({
    url: `/users/${id}/posts`,
    method: 'GET'
  })
}
