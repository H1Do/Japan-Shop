import { FormEvent, useContext, useState } from 'react';
import { MainContext } from '../context';
import Header from '../components/Header';
import Input from '../components/UI/Input/Input';
import Button from '../components/UI/Button/Button';
import { createOrder } from '../API/ordersAPI';
import handleDeleteFromBasket from '../utils/handleDeleteFromBasket';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const OrderRegistration = observer(() => {
  const { user } = useContext(MainContext);
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const navigate = useNavigate();

  const totalPrice = user.basket.reduce((acc: number, figure: Figure) => {
    return acc + figure.price;
  }, 0);

  const registerOrder = (event: FormEvent) => {
    event.preventDefault();
    createOrder(user.basket, totalPrice, Date.now());
    user.basket.forEach((figure: Figure) => {
      handleDeleteFromBasket(user, figure);
    });
    navigate('/orders');
  };

  return (
    <div className="App">
      <Header selectedItem="" />
      <div className="order-registration container">
        <div className="order-registration__inner">
          <h2 className="order-registration__title">Оформление заказа</h2>
          <ul className="order-registration__list">
            {user.basket.map((figure: Figure) => (
              <li className="order-registration__list-item" key={figure.id}>
                {figure.id} - {figure.name} - {figure.price}
              </li>
            ))}
          </ul>
          <div className="order-registration__price">
            Общая сумма: {totalPrice} ₽
          </div>

          <form className="order-registration__form" onSubmit={registerOrder}>
            <label className="order-registration__form-label">
              Адрес доставки:
              <Input
                name="address"
                className="order-registration__form-input"
                required
                value={address}
                onChange={(event: InputEvent) => {
                  setAddress(event.target.value);
                }}
              />
            </label>
            <label className="order-registration__form-label">
              Номер телефона для связи:
              <Input
                name="tel"
                className="order-registration__form-input"
                type="tel"
                required
                value={telephone}
                onChange={(event: InputEvent) => {
                  setTelephone(event.target.value);
                }}
              />
            </label>
            <Button
              className="order-registration__form-button"
              buttonType="submit"
            >
              Перейти к оплате
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default OrderRegistration;
