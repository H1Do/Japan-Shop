import { useParams } from 'react-router-dom';
import { Header } from '../../../modules/Header';
import ProductInfoContent from './ProductInfoContent';

const ProductInfo = () => {
  const params = useParams();

  return (
    <div className="App">
      <Header selectedItem="catalog" />
      <ProductInfoContent id={params.id!} />
    </div>
  );
};

export default ProductInfo;
