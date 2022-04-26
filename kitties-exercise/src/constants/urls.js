import axios from 'axios';

// main URL
export const APPLIFT_DOMAIN = 'https://fullstack.exercise.applifting.cz';

export const axiosMainUser = axios.create({
  baseURL: APPLIFT_DOMAIN,
});
