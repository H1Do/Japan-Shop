type Book = {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  image: string;
  url: string;
};

interface Props {
  title: string;
  description: string;
  products: Array<Book>;
  className: string;
}

const ShopLine = ({
  title,
  description,
  products,
  className,
  ...args
}: Props) => {
  return (
    <div className={'line ' + className} {...args}>
      <h3 className="line__title">{title}</h3>
      <div className="line__description">
        <p>{description}</p>
      </div>
      <ul className="line__list">
        {products.map((product) => (
          <li className="line__list-item" key={product.id}>
            <a href={product.url} className="line__list-link">
              <img
                src={product.image}
                alt="book image"
                width="300"
                height="393"
                loading="lazy"
                className="line__list-image"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopLine;
