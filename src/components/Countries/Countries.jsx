import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Countries.module.scss';
import { useFetchCountries } from '../../hooks/useFetchCountries';
import { CountryCard } from '../CountryCard';
import { Loader } from '../Loader/Loader';

export const Countries = ({ filters }) => {
    const { countries, isLoading, fetchAll } = useFetchCountries();
    const navigate = useNavigate();

    useEffect(fetchAll, []);

    const getFiltredCountries = () => {
        return countries.filter(
            (country) =>
                country.name.official.includes(filters.name) &&
                (filters.region === null ? true : filters.region === country.region)
        );
    };

    const handleClick = (name) => {
        navigate(`/detail/${name}`);
    };

    let content = null;
    if (isLoading) {
        content = <Loader style={{ margin: '3rem auto 0' }} />;
    } else {
        const filtredCountries = getFiltredCountries();
        if (filtredCountries.length === 0) {
            content = 'Nothing found';
        } else {
            content = filtredCountries.map((country) => {
                const countryData = {
                    flagImg: country.flags.png,
                    name: country.name.official,
                    info: [
                        {
                            label: 'Population',
                            data: country.population.toLocaleString(),
                        },
                        { label: 'Region', data: country.region },
                        {
                            label: 'Capital',
                            data: country?.capital?.join(', ') || 'No information',
                        },
                    ],
                };
                return (
                    <CountryCard
                        key={country.name.official}
                        onClick={() => handleClick(country.name.official)}
                        {...countryData}
                    />
                );
            });
        }
    }

    return (
        <div className={classes.countries}>
            <div className={`${classes.container} container`}>{content}</div>
        </div>
    );
};
