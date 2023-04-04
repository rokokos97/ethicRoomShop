import React from "react";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";
import { Navigate, Route, Routes } from "react-router-dom";

const Login = () => {
    return (
        <div className=" container mt-5">
            <div className="row">
                <div className="card col-md-6 offset-md-3 shadow p-4">
                            <Routes>
                                <Route index element={<LoginForm />}/>
                                <Route path="signUp" element={<RegisterForm/>}/>
                                <Route path="*" element={<Navigate to="/login"/>}/>
                            </Routes>
                </div>
            </div>
        </div>
    );
};
export default Login;
