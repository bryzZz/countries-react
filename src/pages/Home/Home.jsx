import { Filters } from 'components/Filters';
import { Countries } from 'components/Countries';
import { useState } from 'react';

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
