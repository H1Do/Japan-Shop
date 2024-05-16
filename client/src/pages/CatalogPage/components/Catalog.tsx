import CatalogContent from '../components/CatalogContent';
import { Footer } from '../../../modules/Footer';
import { Header } from '../../../modules/Header';

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
