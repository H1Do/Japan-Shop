import CatalogContent from '../components/CatalogContent';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Catalog = () => {
  return (
    <div className="App">
      <Header selectedItem="catalog" />
      <CatalogContent />
      <Footer />
    </div>
  );
};

export default Catalog;
