import classes from './CountryCard.module.scss';

export const CountryCard = ({
    flagImg,
    name,
    population,
    region,
    capital,
    ...other
}) => {
    return (
        <article className={classes.countryCard} {...other}>
            <img className={classes.img} src={flagImg} alt='flag image' />
            <div className={classes.content}>
                <h3 className={classes.name}>{name}</h3>
                <p className={classes['info-block']}>
                    Population: <span>{population}</span>
                </p>
                <p className={classes['info-block']}>
                    Region: <span>{region}</span>
                </p>
                <p className={classes['info-block']}>
                    Capital: <span>{capital}</span>
                </p>
            </div>
        </article>
    );
};
