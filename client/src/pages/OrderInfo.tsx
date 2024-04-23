import Header from '../components/Header';
import OrderInfoContent from '../components/OrderInfoContent';

const OrderInfo = () => {
  return (
    <div className="App">
      <Header selectedItem="orders" />
      <OrderInfoContent />
    </div>
  );
};

export default OrderInfo;
