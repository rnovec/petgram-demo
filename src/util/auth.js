import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

const TokenKey = 'Access-Token'
const RefreshKey = 'Refresh-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function getRefreshToken () {
  return Cookies.get(RefreshKey)
}

export function setToken (token) {
  Cookies.set(TokenKey, token)
}

export function setRefreshToken (token) {
  Cookies.set(RefreshKey, token)
}

export function removeToken () {
  Cookies.remove(TokenKey)
}

export function removeRefreshToken () {
  Cookies.remove(RefreshKey)
}

export function decodeToken (token) {
  return jwtDecode(token)
}

export function isNearbyToExpire(token) {
  const decoded = decodeToken(token)
  const today = new Date()
  const exp = new Date(0)
  exp.setUTCSeconds(decoded.exp)
  const diffMs = exp - today
  const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000) // minutes
  console.log(diffMins)
  return diffMins < 50
}

