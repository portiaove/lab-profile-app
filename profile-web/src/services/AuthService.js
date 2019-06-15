import http from './BaseService';

const register = user => http.post('/register', user)

const authenticate = credentials => http.post('/authenticate', credentials)

const getProfile = id => http.get(`/profile/${id}`)

const editProfile = user => http.put(`/profile/${user.id}`, user)

const logout = () => http.post('/logout')

export default {
  register,
  authenticate,
  getProfile,
  editProfile,
  logout
}
