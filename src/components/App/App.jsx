import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContextProvider } from '../../ThemeContext';
import { Header } from 'components/Header';
import { Home } from 'pages/Home/Home';

export const App = () => {
    return (
        <BrowserRouter>
            <ThemeContextProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='about' element={<About />} /> */}
                </Routes>
            </ThemeContextProvider>
        </BrowserRouter>
    );
};
