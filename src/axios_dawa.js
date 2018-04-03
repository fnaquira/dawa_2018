import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://35.193.107.240:8000/',
    //headers: {'Access-Control-Allow-Origin': '*'}
});

export default instance;