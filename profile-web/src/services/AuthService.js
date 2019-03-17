import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true
})

const register = (user) => http.post('/register', user)
  .then(res => Promise.resolve(res.data));


export default {
  register
}