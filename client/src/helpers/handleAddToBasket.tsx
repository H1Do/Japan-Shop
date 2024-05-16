import { addToBasket } from '../pages/CartPage/API/basketAPI';

const handleAddToBasket = (user: UsStore, figure: Figure) => {
  if (user.basket.find((item: Figure) => item.id === figure.id)) {
    console.log('Figure already in basket');
    return;
  }
  user.setBasket([...user.basket, figure]);
  console.log('Item added to cart');
  addToBasket(figure)
    .then(console.log)
    .catch((error) => console.log(error.response.data.message));
};

export default handleAddToBasket;
