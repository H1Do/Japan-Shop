import Button from '../../../UI/Button/Button';

const Banner = () => {
  return (
    <section className="banner container">
      <div className="banner__inner">
        <h2 className="banner__title">
          Собери свою
          <br />
          коллекцию!
        </h2>
        <Button isLink={true} className="banner__button" pathTo="/catalog">
          Купить
        </Button>
      </div>
    </section>
  );
};

export default Banner;
