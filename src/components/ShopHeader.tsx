interface Props {
  selectedItem: string;
}

const ShopHeader = ({ selectedItem }: Props) => {
  return (
    <header className="header container">
      <a href="./" className="header__logo logo">
        <img
          src="./src/images/logo.svg"
          alt="Bookstore"
          width="178"
          height="43"
        />
      </a>
      <nav className="header__menu">
        <ul className="header__menu-list">
          <li
            className={
              selectedItem === 'main'
                ? 'header__menu-item is-selected'
                : 'header__menu-item'
            }
          >
            <a href="./" className="header__menu-link">
              Главная
            </a>
          </li>
          <li
            className={
              selectedItem === 'catalog'
                ? 'header__menu-item is-selected'
                : 'header__menu-item'
            }
          >
            <a href="./" className="header__menu-link">
              Каталог
            </a>
          </li>
          <li
            className={
              selectedItem === 'login'
                ? 'header__menu-item is-selected'
                : 'header__menu-item'
            }
          >
            <a href="./" className="header__menu-link">
              Войти
            </a>
          </li>
          <li
            className={
              selectedItem === 'orders'
                ? 'header__menu-item is-selected'
                : 'header__menu-item'
            }
          >
            <a href="./" className="header__menu-link">
              Заказы
            </a>
          </li>
        </ul>
      </nav>
      <a href="./" className="header__link button">
        Купить
      </a>
    </header>
  );
};

export default ShopHeader;
