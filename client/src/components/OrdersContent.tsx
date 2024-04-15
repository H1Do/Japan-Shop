import { useContext } from 'react';
import { MainContext } from '../context';
import Button from './UI/Button/Button';
import { observer } from 'mobx-react-lite';

const OrdersContent = observer(() => {
  const { user } = useContext(MainContext);

  const orderList = user.orders;

  return (
    <div className="orders container">
      <div className="orders__inner">
        <header className="orders__header">
          <h2 className="orders__title">Список заказов</h2>
        </header>
        <main className="orders__body">
          <ul className="orders__body-list">
            {orderList.map((order: Order) => (
              <li className="orders__body-item item" key={order.id}>
                <div className="item__name">{`Заказ ${order.id} от ${order.date}`}</div>
                <div className="item__price">{`${order.price} ₽`}</div>
                <Button
                  isLink={true}
                  isSvg={true}
                  pathTo={`/orders/${order.id}`}
                >
                  <svg
                    width="39.000000"
                    height="36.000000"
                    viewBox="0 0 39 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <path
                      id="Vector"
                      d="M38.5 5.25L38.5 35.87L6 35.87L6 5.25L38.5 5.25ZM34.16 9.33L10.33 9.33L10.33 31.79L34.16 31.79L34.16 9.33ZM32 -0.88L32 3.2L3.83 3.2L3.83 29.75L-0.5 29.75L-0.5 -0.88L32 -0.88ZM29.83 21.58L29.83 25.66L14.66 25.66L14.66 21.58L29.83 21.58ZM29.83 13.41L29.83 17.5L14.66 17.5L14.66 13.41L29.83 13.41Z"
                      fill="#000000"
                      fillOpacity="1.000000"
                      fillRule="evenodd"
                    />
                  </svg>
                </Button>
              </li>
            ))}
          </ul>
        </main>
        <footer className="orders__footer">
          <div className="orders__count">{`Всего ${user.orders.length}`}</div>
        </footer>
      </div>
    </div>
  );
});

export default OrdersContent;
