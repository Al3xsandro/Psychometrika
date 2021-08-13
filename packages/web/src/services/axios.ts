import axios from 'axios';
import { parseCookies } from 'nookies';

export function getAPIClient(ctx?: any) {
    const { 'psychometrika.token': token } = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'https://psychometrika.herokuapp.com/'
    });

    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
    };

    return api;
};