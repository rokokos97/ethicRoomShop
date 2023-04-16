import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import UserPage from '../components/page/userPage';
import EditUserPage from '../components/page/editUserPage';
import Cart from '../components/ui/cart';
import UserLoader from '../components/ui/hoc/userLoader';
const UserLayout = () => {
  return (
    <>
      <UserLoader>
        <Routes>
          <Route index element={<UserPage />}/>
          <Route path="edit" element={<EditUserPage/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="*" element={<Navigate to=""/>}/>
        </Routes>
      </UserLoader>
    </>
  );
};
export default UserLayout;
