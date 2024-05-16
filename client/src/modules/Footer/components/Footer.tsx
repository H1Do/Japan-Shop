import altLogoImg from '../assets/logo-alt.svg';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__body">
        <a href="./" className="footer__logo logo">
          <img
            src={altLogoImg}
            alt="Japstore"
            width="158"
            height="41"
            loading="lazy"
          />
        </a>
        <div className="footer__description">
          Japstore начал свою работу в 2003 году
        </div>
      </div>
      <div className="footer__about-us">
        <h3 className="footer__about-us-title">О нас</h3>
        <ul className="footer__about-us-list">
          <li className="footer__about-us-item">
            <a href="./" className="footer__about-us-link">
              Компания
            </a>
          </li>
          <li className="footer__about-us-item">
            <a href="./" className="footer__about-us-link">
              Руководство
            </a>
          </li>
          <li className="footer__about-us-item">
            <a href="./" className="footer__about-us-link">
              Цели
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__support">
        <h3 className="footer__support-title">Поддержка</h3>
        <ul className="footer__support-list">
          <li className="footer__support-item">
            <a href="./" className="footer__support-link">
              Пользовательское соглашение
            </a>
          </li>
          <li className="footer__support-item">
            <a href="./" className="footer__support-link">
              Политика конфиденциальности
            </a>
          </li>
          <li className="footer__support-item">
            <a href="./" className="footer__support-link">
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
