import CartContent from '../components/CartContent';
import Header from '../components/Header';

const Cart = () => {
  return (
    <div className="App">
      <Header selectedItem="catalog" />
      <CartContent />
    </div>
  );
};

export default Cart;
