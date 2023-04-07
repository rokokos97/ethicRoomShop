import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Info from "./layouts/info";
import NavBar from "./components/ui/navBar";
import RegisterForm from "./components/ui/registerForm";
import About from "./layouts/about";
import ItemsListPage from "./components/page/itemListPage";
import AppLoader from "./components/ui/hoc/appLoader";
import LogOut from "./layouts/logOut";
import AddNewItem from "./components/ui/addNewItem";
import UserPage from "./components/page/userPage";

function App() {
    return (
        <div>
          <NavBar/>
                <AppLoader>
                <Routes>
                    <Route index element={<Main/>} />
                    <Route path="addItem" element={<AddNewItem/>}/>
                    <Route path="items/*" element={<ItemsListPage/>}/>
                    <Route path="info" element={<Info/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="login/*" element={<Login/>}>
                      <Route index element={<Navigate to="/auth/signUp"/>}/>
                      <Route path="signup" element={<RegisterForm/>}/>
                      <Route path="*" element="/auth/signUp"/>
                    </Route>
                    <Route path="logout" element={<LogOut/>}/>
                    <Route path="user" element={<UserPage/>}>
                    </Route>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                </AppLoader>
            <ToastContainer />
        </div>
    );
}

export default App;
