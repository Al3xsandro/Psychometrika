import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://psychometrika.herokuapp.com/'
});