import { useLayoutEffect, useState } from 'react';

export const useTheme = (initialTheme) => {
    const [theme, setTheme] = useState(
        localStorage.getItem('app-theme') || initialTheme || 'dark'
    );

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    useLayoutEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('app-theme', theme);
    }, [theme]);

    return { theme, toggleTheme };
};
