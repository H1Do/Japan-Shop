import CatalogProducts from './CatalogProducts';
import DiscountBanner from './DiscountBanner';

const CatalogContent = () => {
  return (
    <main className="content">
      <DiscountBanner />
      <CatalogProducts />
    </main>
  );
};

export default CatalogContent;
