import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classes from './App.module.scss';
import { ThemeContextProvider } from '../../ThemeContext';
import { Header } from 'components';
import { Home, Details, NotFound } from 'pages';

export const App = () => {
    return (
        <BrowserRouter>
            <ThemeContextProvider>
                <Header />
                <main className={classes.main}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="detail/:name" element={<Details />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </ThemeContextProvider>
        </BrowserRouter>
    );
};
