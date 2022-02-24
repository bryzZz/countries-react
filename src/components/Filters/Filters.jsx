import { useState } from 'react';
import classes from './Filters.module.scss';
import { IoSearch } from 'react-icons/io5';
import { FiltersSelect } from './FiltersSelect';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

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
                    regions={regions}
                    defaultValue={selectedRegion}
                    onChange={onChangeRegion}
                />
            </div>
        </div>
    );
};
