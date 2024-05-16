import Header from '../../../modules/Header/components/Header';
import CartContent from './CartContent';

const Cart = () => {
  return (
    <div className="App">
      <Header selectedItem="catalog" />
      <CartContent />
    </div>
  );
};

export default Cart;
