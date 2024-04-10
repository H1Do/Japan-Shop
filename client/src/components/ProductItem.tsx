import { Link } from 'react-router-dom';
import Button from './UI/Button/Button';
import { MainContext } from '../context';
import { useContext } from 'react';

interface Props {
  className: string;
  item: Figure;
}

const ProductItem = ({ className, item, ...args }: Props) => {
  const { user } = useContext(MainContext);
  console.log(user);

  return (
    <li className={`${className} product-item`} {...args}>
      <Link to={'/catalog/' + item.id} className="product-item__link">
        <img
          src={item.img}
          alt=""
          width="311"
          height="509"
          loading="lazy"
          className="product-item__image"
        />
      </Link>
      <div className="product-item__name">
        {item.name.slice(20) ? item.name.slice(0, 20) + '...' : item.name}
      </div>
      <div className="product-item__price">10$</div>
      <Button
        className="product-item__favorite-button"
        onClick={() => user.setFavorite([...user.favorite, item])}
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
        className="product-item__cart-button"
        isTransparent={true}
        onClick={() => user.setBasket([...user.basket, item])}
      >
        Добавить в корзину
      </Button>
    </li>
  );
};

export default ProductItem;
