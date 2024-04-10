import { useContext, useEffect, useState } from 'react';
import Banner from './Banner';
import MainProducts from './MainProducts';
import PostService from '../API/PostService';
import { MainContext } from '../context';

const MainContent = () => {
  const { figure } = useContext(MainContext);

  return (
    <main className="content">
      <Banner />
      <MainProducts
        specialProducts={figure.figures}
        newProducts={figure.figures}
      />
    </main>
  );
};

export default MainContent;
