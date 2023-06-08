import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
// import LoginLayout from './layouts/loginLayout';
import Main from './layouts/main';
import Info from './layouts/info';
import NavBar from './components/ui/navBar';
import About from './layouts/about';
import AppLoader from './components/ui/hoc/appLoader';
import LogOut from './layouts/logOut';
import AddNewItem from './components/ui/addNewItem';
import UserLayout from './layouts/userLayout';
import ItemsLayout from './layouts/ItemsLayout';
import UserLoader from './components/ui/hoc/userLoader';
// import AuthLoader from './components/ui/hoc/authLoader';
import NavProfileAlternative from './components/ui/navProfileAlternative';
function App() {
  return (
    <div>
      <NavBar/>
      <AppLoader>
        <Routes>
          <Route index element={<Main/>} />
          <Route path="/addItem" element={
            <UserLoader>
              <AddNewItem/>
            </UserLoader>
          }/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/logout" element={<LogOut/>}/>
          <Route path="/items/*" element={<ItemsLayout/>}/>
          <Route path="/login/*" element={
            <NavProfileAlternative/>
          }/>
          {/* <Route path="/login/*" element={*/}
          {/*  <AuthLoader>*/}
          {/*    <LoginLayout/>*/}
          {/*  </AuthLoader>*/}
          {/* }/>*/}
          <Route path="/user/*" element={<UserLayout/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </AppLoader>
      <ToastContainer />
    </div>
  );
}

export default App;
