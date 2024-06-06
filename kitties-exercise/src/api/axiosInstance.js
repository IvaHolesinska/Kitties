import axios from 'axios'

export const axiosMainUser = axios.create({
  baseURL: 'https://fullstack.exercise.applifting.cz',
  headers: {
    'Content-Type': 'application/json',
  },
})
