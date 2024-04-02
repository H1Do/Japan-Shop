import Button from './UI/button/Button';

const ShopBanner = () => {
  return (
    <section className="banner container">
      <div className="banner__inner">
        <h2 className="banner__title">
          Погрузись в<br />
          книгу с головой!
        </h2>
        <Button isLink={true} className="banner__button">
          Купить
        </Button>
      </div>
    </section>
  );
};

export default ShopBanner;
