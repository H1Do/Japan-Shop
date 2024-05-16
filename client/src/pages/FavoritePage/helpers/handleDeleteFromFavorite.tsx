import { removeFromFavorite } from '../API/favoriteAPI';

const handleDeleteFromFavorite = (user: UsStore, figure: Figure) => {
  console.log('Remove from favorite');
  user.setFavorite(user.favorite.filter((item) => item.id !== figure.id));
  removeFromFavorite(figure)
    .then(console.log)
    .catch((error) => console.log(error.response.data.message));
};

export default handleDeleteFromFavorite;
