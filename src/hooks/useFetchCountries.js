import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useFetchCountries = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAll = async () => {
        try {
            setIsLoading(true);

            const data = await fetch('https://restcountries.com/v2/all'),
                dataJson = await data.json();

            setCountries(
                dataJson.slice(0, 10).map((item) => ({ ...item, id: uuidv4() }))
            );

            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    return { countries, fetchAll, isLoading };
};
