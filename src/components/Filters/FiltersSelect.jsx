import Select from 'react-select';

const selectStyles = {
    container: (provided) => ({
        ...provided,
    }),
    control: (provided) => ({
        ...provided,
        maxWidth: 300,
        minWidth: 250,
        height: '4rem',
        padding: '0.5rem 1rem',
        backgroundColor: 'var(--color-elements)',
        boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.05)',
        border: 'none',
    }),
    menu: (provided) => ({
        ...provided,
        maxWidth: 300,
        backgroundColor: 'var(--color-elements)',
        boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.05)',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'var(--color-text)',
    }),
    option: (provided, { isFocused, isSelected }) => ({
        ...provided,
        color: 'var(--color-text)',
        fontWeight: 600,
        backgroundColor: isSelected
            ? 'rgba(0, 0, 0, 0.05)'
            : isFocused
            ? 'rgba(0, 0, 0, 0.05)'
            : 'transparent',
    }),
    placeholder: (provided) => ({
        ...provided,
        fontWeight: 600,
        fontSize: '1rem',
        color: 'var(--color-placeholder)',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
};

export const FiltersSelect = ({ regions, defaultValue, onChange }) => {
    regions = regions.reduce(
        (accum, current) => [...accum, { value: current, label: current }],
        []
    );

    return (
        <Select
            styles={selectStyles}
            options={regions}
            defaultValue={defaultValue}
            onChange={onChange}
            isClearable={true}
            placeholder='Filter by Region'
        />
    );
};
