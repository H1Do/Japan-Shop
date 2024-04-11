import { removeFromBasket } from '../API/basketAPI';

const handleDeleteFromBasket = (user: UsStore, figure: Figure) => {
  console.log('Remove from basket');
  user.setBasket(user.basket.filter((item) => item.id !== figure.id));
  removeFromBasket(figure)
    .then(console.log)
    .catch((error) => console.log(error.response.data.message));
};

export default handleDeleteFromBasket;
