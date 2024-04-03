import { Link } from 'react-router-dom';

interface Props {
  selectedItem: string;
}

const Header = ({ selectedItem }: Props) => {
  return (
    <header className="header container">
      <Link to="/" className="header__logo logo">
        <img
          src="/src/images/logo.svg"
          alt="Bookstore"
          width="178"
          height="43"
        />
      </Link>
      <nav className="header__menu">
        <ul className="header__menu-list">
          <li
            className={
              selectedItem === 'main'
                ? 'header__menu-item is-selected'
                : 'header__menu-item'
            }
          >
            <Link to="/" className="header__menu-link">
              Главная
            </Link>
          </li>
          <li
            className={
              selectedItem === 'catalog'
                ? 'header__menu-item is-selected'
                : 'header__menu-item'
            }
          >
            <Link to="/catalog" className="header__menu-link">
              Каталог
            </Link>
          </li>
          <li
            className={
              selectedItem === 'login'
                ? 'header__menu-item is-selected'
                : 'header__menu-item'
            }
          >
            <Link to="/signin" className="header__menu-link">
              Войти
            </Link>
          </li>
          <li
            className={
              selectedItem === 'orders'
                ? 'header__menu-item is-selected'
                : 'header__menu-item'
            }
          >
            <Link to="/orders" className="header__menu-link">
              Заказы
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/catalog" className="header__link button">
        Купить
      </Link>
    </header>
  );
};

export default Header;
