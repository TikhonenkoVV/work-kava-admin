import { lang } from 'lang/lang';
import { CardSelect, CheckBox, FilterLabel } from './FilterSelect.styled';
import { selectUser } from 'store/auth/selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const FilterSelect = ({ className, onChange, onToggle }) => {
  const { local } = useSelector(selectUser);

  const [checked, setChecked] = useState('active');

  const handleChange = e => {
    const id = e.target.id;
    setChecked(id);
    onChange(id);
    onToggle();
  };

  return (
    <CardSelect className={className}>
      <FilterLabel>
        <CheckBox className={checked === 'active' ? 'active' : null} />
        {lang[local].onlyActiveCards}
        <input
          id="active"
          hidden
          name="filter"
          type="radio"
          onChange={handleChange}
        />
      </FilterLabel>
      <FilterLabel>
        <CheckBox className={checked === 'archive' ? 'active' : null} />
        {lang[local].onlyArchivedCards}
        <input
          id="archive"
          hidden
          name="filter"
          type="radio"
          onChange={handleChange}
        />
      </FilterLabel>
      <FilterLabel>
        <CheckBox className={checked === 'all' ? 'active' : null} />
        {lang[local].allCards}
        <input
          id="all"
          hidden
          name="filter"
          type="radio"
          onChange={handleChange}
        />
      </FilterLabel>
    </CardSelect>
  );
};
