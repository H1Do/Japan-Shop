import ShopHeader from '../components/ShopHeader';
import ShopMain from '../components/ShopMain';
import ShopFooter from '../components/ShopFooter';

const Main = () => {
  return (
    <div className="App">
      <ShopHeader selectedItem="main" />
      <ShopMain />
      <ShopFooter />
    </div>
  );
};

export default Main;
