import axios from 'axios';

const instance = axios.create({
    //baseURL: 'http://localhost:8000/',
    baseURL: 'http://dawa.conflux.pe/',
    headers: {'Access-Control-Allow-Origin': '*'}
});

export default instance;