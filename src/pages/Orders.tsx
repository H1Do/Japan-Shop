import Header from '../components/Header';
import OrdersContent from '../components/OrdersContent';

const Orders = () => {
  return (
    <div className="App">
      <Header selectedItem="orders" />
      <OrdersContent />
    </div>
  );
};

export default Orders;
