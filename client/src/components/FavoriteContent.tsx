import { useContext } from 'react';
import Button from './UI/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { MainContext } from '../context';
import { observer } from 'mobx-react-lite';
import handleAddToBasket from '../utils/handleAddToBasket';
import handleDeleteFromFavorite from '../utils/handleDeleteFromFavorite';

const FavoriteContent = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(MainContext) as {
    user: UsStore;
    figure: FgStore;
  };
  const productsList = user.favorite;

  return (
    <div className="favorite container">
      <div className="favorite__inner">
        <header className="favorite__header">
          <h2 className="favorite__title">Список желаний</h2>
          <Button
            className="favorite__close-button"
            onClick={() => navigate(-1)}
            isSvg={true}
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
        <main className="favorite__body">
          <ul className="favorite__body-list">
            {productsList.length
              ? productsList.map((product: Figure) => (
                  <li className="favorite__body-item item" key={product.id}>
                    <Link to={`/catalog/${product.id}`}>
                      <img
                        src={`${import.meta.env.VITE_API_URL}/${product.img}`}
                        alt=""
                        width={47}
                        height={71}
                        className="item__image"
                      />
                    </Link>
                    <div className="item__name">{product.name}</div>
                    <div className="item__price">{product.price} ₽</div>
                    <Button
                      className="item__add-cart-button"
                      isSvg={true}
                      onClick={() => handleAddToBasket(user, product)}
                    >
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
                    </Button>
                    <Button
                      className="item__delete-button"
                      isSvg={true}
                      onClick={() => handleDeleteFromFavorite(user, product)}
                    >
                      <svg
                        width="43.000000"
                        height="41.000000"
                        viewBox="0 0 43 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <clipPath id="clip2111_389">
                            <rect
                              id="trash 1"
                              width="43.000000"
                              height="41.000000"
                              fill="white"
                              fillOpacity="0"
                            />
                          </clipPath>
                        </defs>
                        <rect
                          id="trash 1"
                          width="43.000000"
                          height="41.000000"
                          fill="#FFFFFF"
                          fillOpacity="0"
                        />
                        <g clipPath="url(#clip2111_389)">
                          <path
                            id="trash"
                            d="M34.93 10.25L8.06 10.25C7.32 10.25 6.71 9.67 6.71 8.96C6.71 8.26 7.32 7.68 8.06 7.68L34.93 7.68C35.67 7.68 36.28 8.26 36.28 8.96C36.28 9.67 35.67 10.25 34.93 10.25ZM33.59 35.87C33.59 37.28 32.38 38.43 30.9 38.43L12.09 38.43C10.61 38.43 9.4 37.28 9.4 35.87L9.4 12.81L33.59 12.81L33.59 35.87ZM17.46 3.84C17.46 3.13 18.07 2.56 18.81 2.56L24.18 2.56C24.92 2.56 25.53 3.13 25.53 3.84L25.53 5.12L17.46 5.12L17.46 3.84ZM36.28 5.12L28.21 5.12L28.21 2.56C28.21 1.14 27.01 0 25.53 0L17.46 0C15.98 0 14.78 1.14 14.78 2.56L14.78 5.12L6.71 5.12C5.23 5.12 4.03 6.27 4.03 7.68L4.03 10.25C4.03 11.66 5.23 12.81 6.71 12.81L6.71 35.87C6.71 38.7 9.12 41 12.09 41L30.9 41C33.87 41 36.28 38.7 36.28 35.87L36.28 12.81C37.76 12.81 38.96 11.66 38.96 10.25L38.96 7.68C38.96 6.27 37.76 5.12 36.28 5.12ZM21.5 35.87C22.24 35.87 22.84 35.3 22.84 34.59L22.84 19.21C22.84 18.51 22.24 17.93 21.5 17.93C20.75 17.93 20.15 18.51 20.15 19.21L20.15 34.59C20.15 35.3 20.75 35.87 21.5 35.87ZM14.78 35.87C15.52 35.87 16.12 35.3 16.12 34.59L16.12 19.21C16.12 18.51 15.52 17.93 14.78 17.93C14.03 17.93 13.43 18.51 13.43 19.21L13.43 34.59C13.43 35.3 14.03 35.87 14.78 35.87ZM28.21 35.87C28.96 35.87 29.56 35.3 29.56 34.59L29.56 19.21C29.56 18.51 28.96 17.93 28.21 17.93C27.47 17.93 26.87 18.51 26.87 19.21L26.87 34.59C26.87 35.3 27.47 35.87 28.21 35.87Z"
                            fill="#000000"
                            fillOpacity="1.000000"
                            fillRule="evenodd"
                          />
                        </g>
                      </svg>
                    </Button>
                  </li>
                ))
              : 'Список желаний пуст'}
          </ul>
        </main>
        <footer className="favorite__footer">
          <div className="favorite__count">{`Всего: ${productsList.length}`}</div>
        </footer>
      </div>
    </div>
  );
});

export default FavoriteContent;
