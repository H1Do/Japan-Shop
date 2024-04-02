import { useEffect, useState } from 'react';
import ShopBanner from './ShopBanner';
import ShopProducts from './ShopProducts';
import PostService from '../API/PostService';

const ShopMain = () => {
  const [specProd, setSpecProd] = useState([]);
  const [newProd, setNewProd] = useState([]);

  useEffect(() => {
    const response = PostService.getAll(7, 1);
    response.then((result) => {
      console.log(result.data.books[0]);
      setSpecProd(result.data.books.slice(0, 3));
      setNewProd(result.data.books.slice(3, 6));
    });
  }, []);

  return (
    <main className="content">
      <ShopBanner />
      <ShopProducts specialProducts={specProd} newProducts={newProd} />
    </main>
  );
};

export default ShopMain;
