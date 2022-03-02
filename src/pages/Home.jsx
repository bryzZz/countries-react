import { useState } from 'react';
import { Filters, Countries } from 'components';

export const Home = () => {
    const [filters, setFilters] = useState({ region: null, name: '' });

    const handleChangeFilters = (tag, value) => setFilters((prev) => ({ ...prev, [tag]: value }));

    return (
        <>
            <Filters filters={filters} onChangeFilters={handleChangeFilters} />
            <Countries filters={filters} />
        </>
    );
};
