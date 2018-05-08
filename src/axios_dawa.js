import axios from 'axios';

const instance = axios.create({
    //baseURL: 'http://localhost:8000/',
    baseURL: 'http://35.226.64.247:8000/',
    headers: {'Access-Control-Allow-Origin': '*'}
});

export default instance;