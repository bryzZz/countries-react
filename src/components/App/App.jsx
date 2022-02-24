import classes from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContextProvider } from '../../ThemeContext';
import { Header } from 'components/Header';
import { Home } from 'pages/Home/Home';
import { Detail } from 'pages/Detail/Detail';

export const App = () => {
    return (
        <BrowserRouter>
            <ThemeContextProvider>
                <Header />
                <main className={classes.main}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='detail/:name' element={<Detail />} />
                    </Routes>
                </main>
            </ThemeContextProvider>
        </BrowserRouter>
    );
};
