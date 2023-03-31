import React from "react";
import CarouselBox from "../components/ui/carouselBox";
import Footer from "../components/ui/footer";
import CategoriesListPage from "../components/page/categoriesListPage";

const Main = () => {
  return (
    <div>
      <CarouselBox/>
      <CategoriesListPage/>
      <Footer/>
    </div>
  );
};

export default Main;
