import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useFetchCountries = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCountries = async (endPoint = 'all') => {
        try {
            setIsLoading(true);

            const data = await fetch(
                    `https://restcountries.com/v3.1/${endPoint}`
                ),
                dataJson = await data.json(),
                dataWithIds = dataJson.map((item) => ({
                    ...item,
                    id: uuidv4(),
                }));
            // ?fields=name,capital,flags,population,region
            setCountries(dataWithIds);

            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchAll = async () => {
        await fetchCountries();
    };

    const fetchByRegion = async (region) => {
        await fetchCountries(`region/${region}`);
    };

    const fetchByName = async (name) => {
        await fetchCountries(`name/${name}`);
    };

    return { countries, fetchAll, fetchByRegion, fetchByName, isLoading };
};
