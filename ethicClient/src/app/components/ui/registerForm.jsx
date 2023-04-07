import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import RadioField from "../common/form/radio.Field";
import CheckBoxField from "../common/form/checkBoxField";
import { signUp } from "../../store/user";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
const RegisterForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        sex: "other",
        licence: false
    });
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validateSchema = yup.object().shape({
        licence: yup.boolean().oneOf([true], "You may not use our service without acknowledging the license agreement"),
        password: yup.string()
          .required("Password is required")
          .min(8, "Password has to be longer than 8 characters")
          .matches(/(?=.*[0-9])/, "Password must contain at least one number")
          .matches(/(?=.*[!_$%&*"])/, "Password must contain at least one of symbols !_$%&*")
          .matches(/(?=.*[A-Z])/, "Password must contain at least one capital letter")
          .max(16, "Password hasn't' to be longer than 16 characters"),
        email: yup.string()
          .required("Email is required")
          .email("Email is not correct"),
        name: yup.string()
          .required("Name is requires")
          .min(3, "Name must be at least 3 characters long")
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
        const newData = {
            ...data
        };
        dispatch(signUp(newData));
    };

    return (
      <>
          <h3 className="mb-4 text-center">Register</h3>
          <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
              />
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
              <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Choose your gender"
              />
              <CheckBoxField
                value={data.licence}
                onChange={handleChange}
                name="licence"
                error={errors.licence}
              >
                  Confirm <a>license</a>
              </CheckBoxField>
              <button
                type="submit"
                disabled={!isValid}
                className="btn btn-secondary w-100 mx-auto"
              >
                  Register
              </button>
          </form>
          <p>
              Already have account?{"  "}
              <NavLink to="login"
                role="button"
                className="link-dark"
              >
                  {" "}
                  Sign In
              </NavLink>
          </p>
     </>
    );
};
export default RegisterForm;
