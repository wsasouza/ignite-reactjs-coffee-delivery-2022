import axios from 'axios'

export const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/wsasouza/ignite-reactjs-coffee-delivery-2022',
  // baseURL: 'http://localhost:3001',
})
