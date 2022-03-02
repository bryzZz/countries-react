import axios from 'axios';

export const BASE_API_KEY = 'https://restcountries.com/v3.1/';

export const getAll = (fields = '') => {
    return axios.get(`${BASE_API_KEY}all?fields=${fields}`);
};

export const getByName = (name, fields = '') => {
    return axios.get(`${BASE_API_KEY}name/${name}?fields=${fields}`);
};

export const getNamesByCodes = (codes) => {
    return axios.get(`${BASE_API_KEY}alpha?codes=${codes}&fields=name`);
};
