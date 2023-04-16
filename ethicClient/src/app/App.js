import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginLayout from "./layouts/loginLayout";
import MainLayout from "./layouts/mainLayout";
import InfoLayout from "./layouts/infoLayout";
import NavBar from "./components/ui/navBar";
import AboutLayout from "./layouts/aboutLayout";
import AppLoader from "./components/ui/hoc/appLoader";
import LogOutLayout from "./layouts/logOutLayout";
import AddNewItem from "./components/ui/addNewItem";
import UserLayout from "./layouts/userLayout";
import ItemsLayout from "./layouts/ItemsLayout";
function App() {
    return (
        <div>
          <NavBar/>
                <AppLoader>
                <Routes>
                    <Route index element={<MainLayout/>} />
                    <Route path="/addItem" element={<AddNewItem/>}/>
                    <Route path="/items/*" element={<ItemsLayout/>}/>
                    <Route path="/info" element={<InfoLayout/>}/>
                    <Route path="/about" element={<AboutLayout/>}/>
                    <Route path="/login/*" element={<LoginLayout/>}/>
                    <Route path="/logout" element={<LogOutLayout/>}/>
                    <Route path="/user/*" element={<UserLayout/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                </AppLoader>
            <ToastContainer />
        </div>
    );
}

export default App;
