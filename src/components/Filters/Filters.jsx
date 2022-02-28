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

export const Filters = ({ onChangeFilters, filters }) => {
    return (
        <div className={classes.Filters}>
            <div className={`${classes.container} container`}>
                <div className={classes.search}>
                    <IoSearch className={classes.icon} />
                    <input
                        className={classes.input}
                        value={filters.name}
                        onChange={(e) => onChangeFilters('name', e.target.value)}
                        type="text"
                        placeholder="Search for a country..."
                    />
                </div>
                <FiltersSelect
                    options={regions}
                    defaultValue={filters.region}
                    onChange={(value) => onChangeFilters('region', value?.value || null)}
                    isClearable={true}
                    placeholder="Filter by Region"
                />
            </div>
        </div>
    );
};
