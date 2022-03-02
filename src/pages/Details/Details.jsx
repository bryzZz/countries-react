import classes from './Details.module.scss';
import { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from 'components';
import { getByName, getNamesByCodes } from '../../api/countriesApi';

export const Details = () => {
    const [country, setCountry] = useState(null);
    const [borders, setBorders] = useState(null);
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getByName(
            name,
            'flags,name,population,region,subregion,capital,tld,currencies,languages,borders'
        ).then(({ data }) => {
            getNamesByCodes(data[0].borders.join(','))
                .then(({ data }) => {
                    setBorders(data.map(({ name }) => name.common));
                })
                .catch((error) => {
                    console.log(error);
                });
            setCountry(data[0]);
        });
    }, [name]);

    if (!country) {
        return <Loader style={{ margin: '3rem auto 0' }} />;
    }

    const handleBorderClick = (name) => {
        navigate(`/detail/${name}`);
    };

    const flag = country.flags.png,
        nativeName = Object.entries(country.name.nativeName)
            .reduce((accum, [, curr]) => [...accum, curr.official], [])
            .join(', '),
        population = country.population,
        region = country.region,
        subregion = country.subregion,
        capital = country.capital?.join(', ') || 'No information',
        tld = country.tld[0],
        currencies = Object.values(country.currencies)
            .map((value) => value.name)
            .join(', '),
        languages = Object.values(country.languages).join(', ');

    return (
        <div className={`container ${classes.container}`}>
            <button className={classes.back} onClick={() => navigate(-1)}>
                <IoArrowBack />
                Back
            </button>
            <div className={classes.inner}>
                <img src={flag} alt="flag" className={classes.img} />
                <div className={classes.info}>
                    <h3 className={classes.name}>{name}</h3>
                    <div className={classes.infoBlock}>
                        <p>
                            <strong>Native name:</strong> {nativeName}
                        </p>
                        <p>
                            <strong>Population:</strong> {population}
                        </p>
                        <p>
                            <strong>Region:</strong> {region}
                        </p>
                        <p>
                            <strong>Sub Region:</strong> {subregion}
                        </p>
                        <p>
                            <strong>Capital:</strong> {capital}
                        </p>
                    </div>
                    <div className={classes.infoBlock}>
                        <p>
                            <strong>Top Level Domain:</strong> {tld}
                        </p>
                        <p>
                            <strong>Currencies:</strong> {currencies}
                        </p>
                        <p>
                            <strong>Lenguages:</strong> {languages}
                        </p>
                    </div>
                    <div className={classes.borders}>
                        <strong>Borders: </strong>
                        <div className={classes.tags}>
                            {borders
                                ? borders.map((border) => (
                                      <div
                                          onClick={() => handleBorderClick(border)}
                                          className={classes.tag}
                                      >
                                          {border}
                                      </div>
                                  ))
                                : 'No information'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
