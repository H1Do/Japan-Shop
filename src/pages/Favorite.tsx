import FavoriteContent from '../components/FavoriteContent';
import Header from '../components/Header';

const Favorite = () => {
  return (
    <div className="App">
      <Header selectedItem="catalog" />
      <FavoriteContent />
    </div>
  );
};

export default Favorite;
