import axios from 'axios';

const env = process.env.NODE_ENV;
const headers = { 'Content-Type': 'application/json' };
const headersUpload = { 'Content-Type': 'multipart/form-data' };

const baseURL =
    env === 'development'
        ? 'https://envdevelopment.com'
        : 'https://envproduction.com';

export const publicRequest = axios.create({
    baseURL,
    headers,
});

export const publicUploadRequest = axios.create({
    baseURL,
    headers: { ...headersUpload },
});

export const privateRequest = axios.create({
    baseURL,
    headers,
});

export const privateUploadRequest = axios.create({
    baseURL,
    headers: { ...headersUpload },
});
