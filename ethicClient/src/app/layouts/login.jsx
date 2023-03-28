import React, { useState } from "react";
import { useParams } from "react-router";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );
    const toggleFormType = (params) => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };

    return (
        <div className=" container mt-5">
            <div className="row">
                <div className="card col-md-6 offset-md-3 shadow p-4">
                    {formType === "register" ? (
                        <>
                            <h3 className="mb-4 text-center">Register</h3>
                            <RegisterForm />
                            <p>
                                Already have account?{"  "}
                                <a
                                  role="button"
                                  onClick={toggleFormType}
                                  className="link-dark"
                                >
                                    {" "}
                                    Sign In
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="mb-4">Login</h3>
                            <LoginForm />
                            <p>
                                Dont have account?{"  "}
                                <a
                                  role="button"
                                  onClick={toggleFormType}
                                  className="link-dark"
                                >
                                    {" "}
                                    Sign Up
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Login;