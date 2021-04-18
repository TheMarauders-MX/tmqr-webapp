import axios, { AxiosResponse } from 'axios';
import { AxiosRequestConfig } from 'axios';

const Client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default Client;
