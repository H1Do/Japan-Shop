import { Link } from 'react-router-dom';

interface Props {
  title: string;
  description: string;
  products: Array<Figure>;
  className: string;
}

const Line = ({ title, description, products, className, ...args }: Props) => {
  return (
    <div className={'line ' + className} {...args}>
      <h3 className="line__title">{title}</h3>
      <div className="line__description">
        <p>{description}</p>
      </div>
      <ul className="line__list">
        {products.map((product) => (
          <li className="line__list-item" key={product.id}>
            <Link to={`catalog/${product.id}`} className="line__list-link">
              <img
                src={product.img}
                alt="figure image"
                width="300"
                height="393"
                loading="lazy"
                className="line__list-image"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Line;
