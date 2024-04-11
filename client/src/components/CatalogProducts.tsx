import { Link } from 'react-router-dom';
import SearchForm from './UI/SearchForm/SearchForm';
import { useContext, useEffect, useMemo, useState } from 'react';
import ProductItem from './ProductItem';
import Pagination from './Pagination';
import { MainContext } from '../context';
import { fetchFigures } from '../API/figureAPI';
import { observer } from 'mobx-react-lite';

const CatalogProducts = observer(() => {
  const { figure }: { figure: FgStore } = useContext(MainContext);
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchFigures().then((data) => {
      figure.setFigures(data.rows);
      setProducts(figure.figures);
    });
  }, []);

  const showedProducts = useMemo(
    () => products.slice((page - 1) * 9, page * 9),
    [products, page],
  );

  return (
    <section className="catalog-products container">
      <header className="catalog-products__header">
        <SearchForm setQuery={setQuery} />
        <div className="catalog-products__actions">
          <Link to="/favorite" className="products__actions-favorite">
            <svg
              width="44px"
              height="44px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link to="/cart" className="products__actions-cart">
            <svg
              width="44px"
              height="44px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </header>
      <main className="catalog-products__body">
        <ul className="catalog-products__list">
          {products.length
            ? showedProducts.map((item: Figure) => (
                <ProductItem
                  className="catalog-products__item"
                  item={item}
                  key={item.id}
                />
              ))
            : 'Книг не найдено'}
        </ul>
        {products.length / 9 > 1 ? (
          <Pagination
            className="catalog-products__pagination"
            totalPages={products.length / 9}
            currentPage={page}
            setPage={setPage}
          />
        ) : (
          ''
        )}
      </main>
    </section>
  );
});

export default CatalogProducts;
