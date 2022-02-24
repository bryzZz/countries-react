import { useFetchCountries } from '../../hooks/useFetchCountries';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export const Details = () => {
    const params = useParams();
    const { countries, isLoading, fetchByName } = useFetchCountries();

    useEffect(() => {
        fetchByName(params.name);
    }, []);

    useEffect(() => {
        console.log(countries);
    }, [countries]);

    if (isLoading) {
        return 'Loading...';
    }

    return (
        <>
            <div className='container'>
                <Link to={'/'}>Back</Link>
                <img src={countries[0].flags.png} alt='flag' className='img' />
                <div className='info'>
                    <h3 className='name'>{countries[0].name.official}</h3>
                    <p>
                        Native name:{' '}
                        {countries[0]?.name?.nativeName?.eng?.official || ''}
                    </p>
                    <p>Population: {countries[0].population}</p>
                    <p>Sub Region: {countries[0].subregion}</p>
                    <p>
                        Capital:{' '}
                        {countries[0]?.capital?.join(', ') || 'No information'}
                    </p>
                    <p>Top Level Domain: {countries[0].tld[0]}</p>
                    <p>
                        Currencies:
                        {Object.values(countries[0].currencies)
                            .map((value) => value.name)
                            .join(', ')}
                    </p>
                    <p>
                        Lenguages:
                        {Object.values(countries[0].languages).join(', ')}
                    </p>
                </div>
            </div>
        </>
    );
};
