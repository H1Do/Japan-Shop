import { addToFavorite } from '../API/addFavoriteAPI';

const handleAddToFavorite = (user: UsStore, figure: Figure) => {
  if (user.favorite.find((item: Figure) => item.id === figure.id)) {
    console.log('Figure already in favorite');
    return;
  }
  user.setFavorite([...user.favorite, figure]);
  addToFavorite(figure)
    .then(console.log)
    .catch((error) => console.log(error.response.data.message));
};

export default handleAddToFavorite;
``;
