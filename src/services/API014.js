import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:8000/',
    baseURL: 'http://dev2.multisoft.co.id:10014/',
    headers: {
        // Authorization: localStorage.getItem('token') !== 'null' ? 'Bearer ' + localStorage.getItem('token'):'',
        'Content-Type': 'application/json',
    },
    responseType: 'json'
});