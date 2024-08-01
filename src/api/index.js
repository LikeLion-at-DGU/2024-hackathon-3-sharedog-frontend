import axios from 'axios';


export const API = axios.create({
    baseURL: 'http://52.79.63.140:8000',
    headers: {
        'Content-Type': 'application/json',
    },
});