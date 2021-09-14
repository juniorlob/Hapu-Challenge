import axios from 'axios'
import { getLocalStorage } from '../utils/localStorage'

const auth = getLocalStorage('auth')
const env = process.env.NODE_ENV
const headers = { 'Content-Type': 'application/json' }
const headersUpload = { 'Content-Type': 'multipart/form-data' }

const baseURL =
    env === 'development'
        ? 'https://envdevelopment.com'
        : 'https://envproduction.com'

export const publicRequest = axios.create({
    baseURL,
    headers,
})

export const publicUploadRequest = axios.create({
    baseURL,
    headers: { ...headersUpload },
})

headers.authorization = auth && auth.token ? `Bearer ${auth.token}` : null
headersUpload.authorization = auth && auth.token ? `Bearer ${auth.token}` : null

export const privateRequest = axios.create({
    baseURL,
    headers,
})

export const privateUploadRequest = axios.create({
    baseURL,
    headers: { ...headersUpload },
})
