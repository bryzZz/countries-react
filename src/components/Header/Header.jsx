import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { ThemeSwitch } from 'components';

export const Header = () => {
    return (
        <header className={classes.header}>
            <div className={`${classes.container} container`}>
                <Link to="/" className={classes.title}>
                    Where in the world?
                </Link>
                <ThemeSwitch />
            </div>
        </header>
    );
};
