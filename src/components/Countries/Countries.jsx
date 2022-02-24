import { useEffect } from 'react';
import classes from './Countries.module.scss';
import { useFetchCountries } from '../../hooks/useFetchCountries';
import { CountryCard } from '../CountryCard';
import { useNavigate } from 'react-router-dom';

export const Countries = ({ region }) => {
    const { countries, fetchAll, fetchByRegion, isLoading } =
        useFetchCountries();
    const navigate = useNavigate();

    useEffect(() => {
        if (region === null) {
            fetchAll();
        } else {
            fetchByRegion(region);
        }
    }, [region]);

    const handleClick = (name) => {
        navigate(`/detail/${name}`);
    };

    let content = null;
    if (isLoading) {
        content = 'loading...';
    } else {
        content = countries.map((country) => {
            return (
                <CountryCard
                    key={country.id}
                    flagImg={country.flags.png}
                    name={country.name.official}
                    population={country.population}
                    region={country.region}
                    capital={country?.capital?.join(', ') || 'No information'}
                    onClick={() => handleClick(country.name.official)}
                />
            );
        });
    }

    return (
        <div className={classes.countries}>
            <div className={`${classes.container} container`}>{content}</div>
        </div>
    );
};
