import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ProductInfoContent from '../components/ProductInfoContent';

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