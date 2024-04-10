import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../context';

interface Props {
  selectedItem: string;
}

const Header = ({ selectedItem }: Props) => {
  const { user } = useContext(MainContext);

  return (
    <header className="header container">
      <Link to="/" className="header__logo logo">
        <img
          src="/src/images/logo.svg"
          alt="Japstore"
          width="158"
          height="41"
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
          {user.isAuth ? (
            <>
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
              <li className="header__menu-item">
                <Link to="/logout" className="header__menu-link">
                  Выйти
                </Link>
              </li>
            </>
          ) : (
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
          )}
          {user.isAdmin ? (
            <li
              className={
                selectedItem === 'admin'
                  ? 'header__menu-item is-selected'
                  : 'header__menu-item'
              }
            >
              <Link to="/admin" className="header__menu-link">
                Административная панель
              </Link>
            </li>
          ) : (
            ''
          )}
        </ul>
      </nav>
      <Link to="/catalog" className="header__link button">
        Купить
      </Link>
    </header>
  );
};

export default Header;
