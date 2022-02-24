import { useState } from 'react';
import classes from './Filters.module.scss';
import { IoSearch } from 'react-icons/io5';
import { FiltersSelect } from './FiltersSelect';

const regions = [
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'Americas' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

export const Filters = ({ selectedRegion, onChangeRegion }) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={classes.Filters}>
            <div className={`${classes.container} container`}>
                <div className={classes.search}>
                    <IoSearch className={classes.icon} />
                    <input
                        className={classes.input}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        type='text'
                        placeholder='Search for a country...'
                    />
                </div>
                <FiltersSelect
                    options={regions}
                    defaultValue={selectedRegion}
                    onChange={onChangeRegion}
                    isClearable={true}
                    placeholder='Filter by Region'
                />
            </div>
        </div>
    );
};
