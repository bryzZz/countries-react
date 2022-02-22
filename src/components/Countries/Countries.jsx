import { useLayoutEffect } from 'react';
import classes from './Countries.module.scss';
import { useFetchCountries } from '../../hooks/useFetchCountries';
import { CountryCard } from '../CountryCard';

export const Countries = () => {
    const { countries, fetchAll, isLoading } = useFetchCountries();

    useLayoutEffect(() => {
        fetchAll();

        console.log(countries);
    }, []);

    let content = null;
    if (isLoading) {
        content = 'loading...';
    } else {
        content = countries.map(
            ({ flags: { png }, name, population, region, capital, id }) => (
                <CountryCard
                    key={id}
                    flagImg={png}
                    name={name}
                    population={population}
                    region={region}
                    capital={capital}
                />
            )
        );
    }

    return (
        <div className={classes.countries}>
            <div className={`${classes.container} container`}>{content}</div>
        </div>
    );
};
