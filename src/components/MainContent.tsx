import { useEffect, useState } from 'react';
import Banner from './Banner';
import MainProducts from './MainProducts';
import PostService from '../API/PostService';

const MainContent = () => {
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
      <Banner />
      <MainProducts specialProducts={specProd} newProducts={newProd} />
    </main>
  );
};

export default MainContent;
