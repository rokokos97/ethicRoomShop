import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Info from "./layouts/info";
import NavBar from "./components/ui/navBar";
import RegisterForm from "./components/ui/registerForm";
import LoginForm from "./components/ui/loginForm";
import About from "./layouts/about";
import ItemsListPage from "./components/page/itemListPage";
import AppLoader from "./components/ui/hoc/appLoader";
import ItemPage from "./components/page/itemPage";
import LogOut from "./layouts/logOut";

function App() {
    return (
        <div>
          <NavBar/>
                <AppLoader>
                <Routes>
                    <Route index element={<Main/>} />
                    <Route path="catalogue" element={<ItemsListPage/>}>
                      <Route path="itemId" element={<ItemPage/>}/>
                    </Route>
                    <Route path="info" element={<Info/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="login/*" element={<Login/>}>
                      <Route index element={<Navigate to="/auth/signUp"/>}/>
                      <Route path="signup" element={<RegisterForm/>}/>
                      <Route path="login" element={<LoginForm/>} />
                      <Route path="*" element="/auth/signUp"/>
                    </Route>
                    <Route path="logout" element={<LogOut/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                </AppLoader>
            <ToastContainer />
        </div>
    );
}

export default App;
