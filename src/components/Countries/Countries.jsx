import classes from './Countries.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAll } from '../../api/countriesApi';
import { CountryCard, Loader } from 'components';

export const Countries = ({ filters }) => {
    const [countries, setCountries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAll().then(({ data }) => setCountries(data));
    }, []);

    const getFiltredCountries = () => {
        return countries.filter(
            (country) =>
                country.name.official.includes(filters.name) &&
                (filters.region === null ? true : filters.region === country.region)
        );
    };

    const handleClick = (name) => navigate(`/detail/${name}`);

    if (countries.length === 0) {
        return <Loader style={{ margin: '3rem auto 0' }} />;
    }

    let content = null;
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

    return (
        <div className={classes.countries}>
            <div className={`${classes.container} container`}>{content}</div>
        </div>
    );
};
