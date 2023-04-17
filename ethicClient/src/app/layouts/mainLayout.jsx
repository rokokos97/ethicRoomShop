import React from 'react';
import CarouselBox from '../components/ui/carouselBox';
import Footer from '../components/ui/footer';
import ItemsListPage from '../components/page/itemListPage';

const MainLayout = () => {
  return (
    <div>
      <CarouselBox/>
      <ItemsListPage/>
      <Footer/>
    </div>
  );
};

export default MainLayout;
