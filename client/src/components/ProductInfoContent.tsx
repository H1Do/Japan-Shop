import { useContext, useEffect, useState } from 'react';
import Button from './UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import { MainContext } from './../context/index';
import { fetchBrands, fetchOneFigure } from '../API/figureAPI';
import handleAddToFavorite from '../utils/handleAddToFavorite';
import handleAddToBasket from '../utils/handleAddToBasket';

interface Props {
  id: string;
}

const ProductInfoContent = ({ id }: Props) => {
  const { user } = useContext(MainContext);
  const [figure, setFigure] = useState<Figure>({
    name: '',
    img: '',
    price: 0,
    id: 0,
  });
  const [brand, setBrand] = useState<Brand>({
    id: 0,
    name: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchOneFigure(id)
      .then((data: Figure) => {
        setFigure(data);
        console.log(data.brandId);
        return data;
      })
      .then((data) =>
        fetchBrands().then((brands) => {
          setBrand(brands.find((item: Brand) => item.id === data.brandId));
        }),
      );
  }, []);

  return (
    <div className="product-info container">
      <div className="product-info__inner">
        <header className="product-info__header">
          <h2 className="product-info__title">{figure.name}</h2>
          <Button
            className="product-info__close-button"
            isSvg={true}
            onClick={() => navigate(-1)}
          >
            <svg
              width="40.000000"
              height="36.000000"
              viewBox="0 0 40 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs />
              <path
                id="Vector"
                d="M0.27 -0.28C1.13 -1.08 2.53 -1.08 3.39 -0.28L10.66 6.44L10.66 3.2C10.66 2.08 11.65 1.16 12.87 1.16C14.09 1.16 15.08 2.08 15.08 3.2L15.08 11.37C15.08 12.5 14.09 13.41 12.87 13.41L4.04 13.41C2.82 13.41 1.83 12.5 1.83 11.37C1.83 10.24 2.82 9.33 4.04 9.33L7.54 9.33L0.27 2.61C-0.6 1.81 -0.6 0.52 0.27 -0.28ZM35.6 -0.28C36.46 -1.08 37.86 -1.08 38.72 -0.28C39.59 0.52 39.59 1.81 38.72 2.61L31.45 9.33L34.95 9.33C36.17 9.33 37.16 10.24 37.16 11.37C37.16 12.5 36.17 13.41 34.95 13.41L26.12 13.41C24.9 13.41 23.91 12.5 23.91 11.37L23.91 3.2C23.91 2.08 24.9 1.16 26.12 1.16C27.34 1.16 28.33 2.08 28.33 3.2L28.33 6.44L35.6 -0.28ZM1.83 23.62C1.83 22.49 2.82 21.58 4.04 21.58L12.87 21.58C14.09 21.58 15.08 22.49 15.08 23.62L15.08 31.79C15.08 32.91 14.09 33.83 12.87 33.83C11.65 33.83 10.66 32.91 10.66 31.79L10.66 28.55L3.39 35.27C2.53 36.07 1.13 36.07 0.27 35.27C-0.6 34.47 -0.6 33.18 0.27 32.38L7.54 25.66L4.04 25.66C2.82 25.66 1.83 24.75 1.83 23.62ZM23.91 23.62C23.91 22.49 24.9 21.58 26.12 21.58L34.95 21.58C36.17 21.58 37.16 22.49 37.16 23.62C37.16 24.75 36.17 25.66 34.95 25.66L31.45 25.66L38.72 32.38C39.59 33.18 39.59 34.47 38.72 35.27C37.86 36.07 36.46 36.07 35.6 35.27L28.33 28.55L28.33 31.79C28.33 32.91 27.34 33.83 26.12 33.83C24.9 33.83 23.91 32.91 23.91 31.79L23.91 23.62Z"
                fill="#000000"
                fillOpacity="1.000000"
                fillRule="evenodd"
              />
            </svg>
          </Button>
        </header>
        <main className="product-info__body">
          <img
            src={`${import.meta.env.VITE_API_URL}${figure.img}`}
            alt=""
            width="426"
            height="573"
            className="product-info__image"
          />

          <div className="product-info__description">
            <div className="product-info__extra">Брэнд: {brand.name}</div>
          </div>
        </main>
        <footer className="product-info__footer">
          <div className="product-info__price">{figure.price}₽</div>
          <Button
            className="product-info__favorite-button"
            isSvg={true}
            onClick={() => handleAddToFavorite(user, figure)}
          >
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
          </Button>
          <Button
            className="product-info__cart-button"
            onClick={() => handleAddToBasket(user, figure)}
          >
            Добавить в корзину
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default ProductInfoContent;
