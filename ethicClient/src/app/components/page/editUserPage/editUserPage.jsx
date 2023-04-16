import React, { useEffect, useState } from "react";
import TextField from "../../common/form/textField";
import RadioField from "../../common/form/radioField";
import { useSelector, useDispatch } from "react-redux";
import { getUser, updateUser } from "../../../store/user";
import { useNavigate } from "react-router-dom";
import BackHistoryBlock from "../../common/backHistoryBlock";
import * as yup from "yup";

const EditUserPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const currentUser = useSelector(getUser());
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(
            updateUser({
                ...data
            })
        );
        navigate("/user");
    };
    useEffect(() => {
        if (currentUser && !data) {
            setData({
                ...currentUser
            });
        }
    }, [currentUser, data]);
    useEffect(() => {
        if (data && isLoading) {
            setIsLoading(false);
        }
    }, [data]);

    const validateSchema = yup.object().shape({
        email: yup.string()
          .required("Email is required")
          .email("Email is not correct"),
        name: yup.string()
          .required("Name is requires")
          .min(3, "Name must be at least 3 characters long")
    });
    useEffect(() => validate(), [data]);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
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
    return (<>
        <BackHistoryBlock/>
        <div className="container mt-5">
            <div className="row">
                <div className="card col-md-6 offset-md-3 shadow p-4">
                    {!isLoading ? (
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
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-secondary w-100 mx-auto"
                            >
                                Update user info
                            </button>
                        </form>
                    ) : (
                        "Loading..."
                    )}
                </div>
            </div>
        </div>
      </>
        );
};

export default EditUserPage;
