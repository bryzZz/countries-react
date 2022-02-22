import { useTheme } from './hooks/useTheme';
import React, { useContext } from 'react';

const ThemeContext = React.createContext({
    theme: 'dark',
    toggleTheme: () => {},
});

const ThemeContextProvider = (props) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeContext, ThemeContextProvider, useThemeContext };
