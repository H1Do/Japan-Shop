import { useEffect, useState } from 'react';
import Banner from './Banner';
import MainProducts from './MainProducts';
import { fetchOneFigure } from '../API/figureAPI';
import { observer } from 'mobx-react-lite';

const MainContent = observer(() => {
  const [specialProducts, setSpecialProducts] = useState<Array<Figure>>([]);
  const [newProducts, setNewProducts] = useState<Array<Figure>>([]);

  const fillProducts = async () => {
    setSpecialProducts(
      await Promise.all([
        fetchOneFigure('1'),
        fetchOneFigure('5'),
        fetchOneFigure('9'),
      ]),
    );

    setNewProducts(
      await Promise.all([
        fetchOneFigure('7'),
        fetchOneFigure('6'),
        fetchOneFigure('2'),
      ]),
    );
  };

  useEffect(() => {
    fillProducts();
  }, []);

  return (
    <main className="content">
      <Banner />
      <MainProducts
        specialProducts={specialProducts}
        newProducts={newProducts}
      />
    </main>
  );
});

export default MainContent;
