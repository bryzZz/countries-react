import { useState } from 'react';

export const useFetchCountries = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCountries = async (endPoint = 'all', fields = '') => {
        try {
            setIsLoading(true);

            const data = await fetch(`https://restcountries.com/v3.1/${endPoint + fields}`);
            const dataJson = await data.json();

            setCountries(dataJson);

            setIsLoading(false);

            return dataJson;
        } catch (error) {
            console.log(error);
        }
    };

    const fetchAll = async () => {
        await fetchCountries('all', '?fields=name,capital,flags,population,region');
    };

    const fetchByRegion = async (region) => {
        await fetchCountries(`region/${region}`);
    };

    const fetchByName = async (name) => {
        await fetchCountries(`name/${name}`);
    };

    return { countries, isLoading, fetchAll, fetchByRegion, fetchByName };
};
