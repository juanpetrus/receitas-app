import store from '@/store'
import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000/api"
});

api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if(error.response.status == 401) {
    if(!localStorage.getItem('token')) {
      location.reload();
    }
    const token = localStorage.getItem('token')
    api.get('/v1/receitas').then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    });
  }
  return Promise.reject(error);
});

api.interceptors.request.use(function(config){
  const token = localStorage.getItem('token')
  if(token && config.headers) {
    config.headers.Authorization = "Bearer " + token
  }
  return config
},function(error){
  return Promise.reject(error)
})

export default api