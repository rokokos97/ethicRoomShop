import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ItemPage from "../components/page/itemPage";
import ItemsListPage from "../components/page/itemListPage";
const ItemsLayout = () => {
  return (
    <>
      <Routes>
        <Route index element={<ItemsListPage/>}/>
        <Route path="/:itemId" element={<ItemPage/>}/>
        <Route path="*" element={<Navigate to="/items"/>}/>
      </Routes>
    </>
  );
};

export default ItemsLayout;
