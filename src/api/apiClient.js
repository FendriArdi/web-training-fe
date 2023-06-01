import axios from 'axios';

const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

export default apiClient;
