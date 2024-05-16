import { FormEvent, useContext, useState } from 'react';
import { Header } from '../../../modules/Header';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import handleDeleteFromBasket from '../../CartPage/helpers/handleDeleteFromBasket';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { MainContext } from './../../../context/index';
import { createOrder } from './../API/orderRegistrationAPI';

const OrderRegistration = observer(() => {
  const { user } = useContext(MainContext) as {
    user: UsStore;
    figure: FgStore;
  };
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
                onChange={(event) => {
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
                onChange={(event) => {
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
