import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import TextAreaField from "../common/form/textAreaField";
import SelectField from "../common/form/selectField";
import {
  getCategories,
  getCategoriesLoadingStatus
} from "../../store/categories";
import history from "../../utils/history";
import { createItem } from "../../store/items";
import axios from "axios";
import configFile from "../../config.json";
import { useNavigate } from "react-router-dom";

const AddNewItem = () => {
  const categoriesIsLoading = useSelector(getCategoriesLoadingStatus());
  const categoryList = useSelector(getCategories());
  const dispatch = useDispatch();
  const initialState = {
    name: "",
    price: "",
    description: "",
    composition: "",
    image: "",
    category: ""
  };
  const [data, setData] = useState(initialState);
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState({});
  const inputFileRef = React.useRef(null);
  const navigate = useNavigate();
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };
  const validateSchema = yup.object().shape({
    category: yup.string()
      .required("Category is required"),
    composition: yup.string()
      .required("Composition is required"),
    description: yup.string()
      .required("Description is requires")
      .min(20, "Name must be at least 20 characters long"),
    price: yup.string()
      .required("Price is required")
      .matches(/(?=.*^[0-9]{1,6}$)/, "Price must contain at least only numbers")
      .max(5, "Price must not be longer than 5 characters"),
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
  const handleClearForm = () => {
    setData(initialState);
  };
  const handleChangeFile = async (event) => {
    console.log(event.target.files);
    try {
      const formData = new FormData();
      const imageFile = event.target.files[0];
      formData.append("image", imageFile);
      const { data } = await axios.post(configFile.apiEndpoint + "/upload/", formData);
      const imageUrl = data.url;
      setImageUrl(imageUrl);
      console.log(imageUrl);
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const newData = {
      ...data,
      image: imageUrl
    };
    dispatch(createItem(newData));
    navigate("/items");
  };
  return (
    <>
      <div className="d-flex justify-content-between m-5">
        <i className="bi bi-arrow-left" role="button" onClick={() => history.goBack()}>back to catalogue</i>
        <i className="bi bi-x-lg" role="button" onClick={() => history.goBack()}/>
      </div>
      <div className=" container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3 shadow p-4">
            <h3 className="mb-4 text-center">Add new item</h3>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
              />
              <TextField
                label="Price"
                name="price"
                value={data.price}
                onChange={handleChange}
                error={errors.price}
              />
              <TextAreaField
                label="Description"
                type="description"
                name="description"
                value={data.description}
                onChange={handleChange}
                error={errors.description}
              />
              <TextField
                label="Composition"
                type="composition"
                name="composition"
                value={data.composition}
                onChange={handleChange}
                error={errors.composition}
              />
              {
                !categoriesIsLoading && <SelectField
                  label="Category"
                  defaultOption="Choose item category..."
                  name="category"
                  options={categoryList}
                  onChange={handleChange}
                  value={data.category}
                  error={errors.category}
                />
              }
              <button
                className="btn btn-primary w-100 mb-1"
                type="button"
                onClick={() => { inputFileRef.current.click(); }}
              >Add image
              </button>
              <input
                ref={inputFileRef}
                type="file"
                hidden
                onChange={handleChangeFile}
              />
              <button
                type="button"
                className="btn btn-secondary w-100 mx-auto m-1"
                onClick={handleClearForm}
              >
                Cleat form
              </button>
              <button
                type="submit"
                disabled={!isValid}
                className="btn btn-secondary w-100 mx-auto m-1"
              >
                Add new item
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddNewItem;
