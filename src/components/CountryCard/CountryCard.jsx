import classes from './CountryCard.module.scss';

export const CountryCard = ({ flagImg, name, info = [], ...other }) => {
    return (
        <article className={classes.countryCard} {...other}>
            <img className={classes.img} src={flagImg} alt='flag image' />
            <div className={classes.content}>
                <h3 className={classes.name}>{name}</h3>
                {info.map(({ label, data }, index) => (
                    <p className={classes['info-block']} key={index}>
                        {label}: <span>{data}</span>
                    </p>
                ))}
            </div>
        </article>
    );
};
