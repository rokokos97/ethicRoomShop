import React from 'react';
import CarouselBox from '../components/ui/carouselBox';
import Footer from '../components/common/footer';
import ItemsListPage from '../components/page/itemListPage';

const Main = () => {
  return (
    <div>
      <CarouselBox/>
      <ItemsListPage/>
      <Footer/>
    </div>
  );
};

export default Main;
