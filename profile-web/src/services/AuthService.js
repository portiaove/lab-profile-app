import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true
})

module.exports.register = (user) => http.post('/register', user).then(res => res.data);