import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import LoginLayout from './layouts/loginLayout';
import MainLayout from './layouts/mainLayout';
import InfoLayout from './layouts/infoLayout';
import NavBar from './components/ui/navBar';
import AboutLayout from './layouts/aboutLayout';
import AppLoader from './components/ui/hoc/appLoader';
import LogOutLayout from './layouts/logOutLayout';
import AddNewItem from './components/ui/addNewItem';
import UserLayout from './layouts/userLayout';
import ItemsLayout from './layouts/ItemsLayout';
import UserLoader from './components/ui/hoc/userLoader';
import AuthLoader from './components/ui/hoc/authLoader';
function App() {
  return (
    <div>
      <NavBar/>
      <AppLoader>
        <Routes>
          <Route index element={<MainLayout/>} />
          <Route path="/addItem" element={
            <UserLoader>
              <AddNewItem/>
            </UserLoader>
          }/>
          <Route path="/info" element={<InfoLayout/>}/>
          <Route path="/about" element={<AboutLayout/>}/>
          <Route path="/logout" element={<LogOutLayout/>}/>
          <Route path="/items/*" element={<ItemsLayout/>}/>
          <Route path="/login/*" element={
            <AuthLoader>
              <LoginLayout/>
            </AuthLoader>
          }/>
          <Route path="/user/*" element={<UserLayout/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </AppLoader>
      <ToastContainer />
    </div>
  );
}

export default App;
