import axios from 'axios';

const env = process.env.NODE_ENV;
const headers = { 'Content-Type': 'application/json' };

const baseURL =
    env === 'development'
        ? 'https://api.jungledevs.com/api/v1/'
        : 'https://api.jungledevs.com/api/v1/';

export const publicRequest = axios.create({
    baseURL,
    headers,
});
