import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import { ToastContainer } from "react-toastify";
import LogOut from "./layouts/logOut";
import AppLoader from "./components/ui/hoc/appLoader";
import Info from "./layouts/info";
import About from "./layouts/about";
import Kimono from "./layouts/kimono";
import NewItemForm from "./components/ui/newItemForm";

function App() {
    return (
        <div>
            <AppLoader>
                <NavBar />
                <Switch>
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/logout" component={LogOut} />
                    <Route path="/info" component={Info} />
                    <Route path="/about" component={About} />
                    <Route path="/catalogue" component={NewItemForm} />
                    <Route path="/kimono" component={Kimono} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
            </AppLoader>
            <ToastContainer />
        </div>
    );
}

export default App;
