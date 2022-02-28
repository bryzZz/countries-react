import { Link } from 'react-router-dom';
import { ThemeSwitch } from 'components/ThemeSwitch';
import classes from './Header.module.scss';

export const Header = () => {
    return (
        <header className={classes.header}>
            <div className={`${classes.container} container`}>
                <Link to='/' className={classes.title}>
                    Where in the world?
                </Link>
                <ThemeSwitch />
            </div>
        </header>
    );
};
