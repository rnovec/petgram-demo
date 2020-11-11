import request from '../util/axios'

export function login (data) {
  return request({
    url: '/token/access/',
    method: 'POST',
    data
  })
}

export function register (data) {
  return request({
    url: '/accounts/register/',
    method: 'POST',
    data
  })
}

export function getUserInfo (id) {
  return request({
    url: `/users/${id}`,
    method: 'GET'
  })
}
