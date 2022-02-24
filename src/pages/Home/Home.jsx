import { Filters } from 'components/Filters';
import { Countries } from 'components/Countries';
import { useState } from 'react';

export const Home = () => {
    const [regionFilter, setRegionFilter] = useState(null);

    return (
        <>
            <Filters
                selectedRegion={regionFilter}
                onChangeRegion={setRegionFilter}
            />
            <Countries
                region={regionFilter === null ? null : regionFilter.value}
            />
        </>
    );
};
