import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, login } from "../../store/user";
import * as yup from "yup";

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const loginError = useSelector(getAuthErrors());
    const dispath = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validateSchema = yup.object().shape({
        password: yup.string().required("Password is required"),
        email: yup.string()
          .required("Email is required")
          .email("Email is not correct")
    });
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        validateSchema
          .validate(data)
          .then(() => {
              setErrors({});
          })
          .catch((err) => {
              setErrors({ [err.path]: err.message });
          });
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const redirect = navigate("/");
        dispath(login({ payload: data, redirect }));
    };
    return (
      <>
          <h3 className="mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
              />
              <TextField
                label="Password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
              />
              {loginError && <p className="text-danger">{loginError}</p>}

              <button
                type="submit"
                disabled={!isValid}
                className="btn btn-secondary w-100 mx-auto"
              >
                  Log In
              </button>
          </form>
          <p>
              Dont have account?{"  "}
              <NavLink to="signUp"
                role="button"
                className="link-dark"
              >
                  {" "}
                  Sign Up
              </NavLink>
          </p>
      </>
    );
};

export default LoginForm;
