import { useState } from 'react';
import Button from '../Button/Button';

interface Props {
  setQuery: (arg: string) => void;
}

const SearchForm = ({ setQuery }: Props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <form
      className="catalog-products__search search-form"
      onSubmit={(event) => {
        event.preventDefault();
        setQuery(inputValue);
      }}
    >
      <input
        type="text"
        className="search-form__input"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
      <Button buttonType="submit" className="search-form__button">
        Поиск
      </Button>
    </form>
  );
};

export default SearchForm;
