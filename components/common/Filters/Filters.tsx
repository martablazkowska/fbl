import { ChangeEvent } from 'react';
import { FiltersWrapper } from './Filters.style';

interface IFiltersProps {
  options: Record<string, boolean>;
  handleFiltersChange: (options: Record<string, boolean>) => void;
}

const Filters = ({ options, handleFiltersChange }: IFiltersProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiltersChange({
      ...options,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <FiltersWrapper>
      {Object.entries(options).map(([key]) => (
        <label key={key}>
          <input
            type="checkbox"
            checked={!!options[key]}
            onChange={handleChange}
            name={key}
          />
          {key}
        </label>
      ))}
    </FiltersWrapper>
  );
};

export default Filters;
