import { useThemeContext } from '../../ThemeContext';
import classes from './ThemeSwitch.module.scss';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';

export const ThemeSwitch = () => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <div className={classes.themeSwitch} onClick={toggleTheme}>
            {theme === 'dark' ? <IoMoonOutline /> : <IoMoon />}
            <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
        </div>
    );
};
