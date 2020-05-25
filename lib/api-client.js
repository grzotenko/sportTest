import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.API_URL,
  responseType: 'json',
  headers:{
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": process.env.x_rapidapi_key
  }  ,
})

export default apiClient
