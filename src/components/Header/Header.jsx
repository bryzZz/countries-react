import { ThemeSwitch } from 'components/ThemeSwitch';
import classes from './Header.module.scss';

export const Header = () => {
    return (
        <header className={classes.header}>
            <div className={`${classes.container} container`}>
                <h1 className={classes.title}>Where in the world?</h1>
                <ThemeSwitch />
            </div>
        </header>
    );
};
