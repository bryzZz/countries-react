import Select from 'react-select';

const selectStyles = {
    control: (provided) => ({
        ...provided,
        maxWidth: 300,
        minWidth: 250,
        height: '4rem',
        padding: '0.5rem 1rem',
        backgroundColor: 'var(--color-elements)',
        boxShadow: 'var(--shadow)',
        border: 'none',
    }),
    menu: (provided) => ({
        ...provided,
        maxWidth: 300,
        backgroundColor: 'var(--color-elements)',
        boxShadow: 'var(--shadow)',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'var(--color-text)',
    }),
    option: (provided, { isFocused, isSelected }) => ({
        ...provided,
        color: isSelected
            ? 'var(--color-elements)'
            : isFocused
            ? 'var(--color-elements)'
            : 'var(--color-text)',
        fontWeight: 600,
        backgroundColor: isSelected
            ? 'var(--color-text)'
            : isFocused
            ? 'var(--color-text)'
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

export const FiltersSelect = (props) => {
    return <Select styles={selectStyles} {...props} />;
};
