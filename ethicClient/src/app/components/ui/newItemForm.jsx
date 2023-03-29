import React, { useEffect, useState } from "react";
import { validator } from "../../utils/ validator";
import TextField from "../common/form/textField";
import RadioField from "../common/form/radio.Field";
import CheckBoxField from "../common/form/checkBoxField";
// import { signUp } from "../../store/users";
import { /* useDispatch */ useSelector } from "react-redux";
import TextAreaField from "../common/form/textAreaField";
import SelectField from "../common/form/selectField";
import { getCategories } from "../../store/categories";
const NewItemForm = () => {
    // const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        price: "",
        description: "",
        composition: "",
        size: "onesize",
        category: "",
        allGoods: false
    });
    const [errors, setErrors] = useState({});
    const categories = useSelector(getCategories());
    const categoryList = categories.map((category) => ({
      label: category.name,
      value: category._id
    }));

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        name: {
            isRequired: {
                message: "Name is required"
            }
        },
        price: {
            isRequired: {
                message: "Price is required"
            }
        },
        description: {
            isRequired: {
                message: "Description is required"
            }
        },
        composition: {
            isRequired: {
                message: "Composition is required"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
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
      console.log(newData);
      // dispatch(signUp(newData));
    };

    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-md-3 shadow p-4">
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
                <RadioField
                  options={[
                    { name: "One Size", value: "oneSize" },
                    { name: "XS", value: "sx" },
                    { name: "S", value: "s" },
                    { name: "M", value: "m" },
                    { name: "L", value: "l" }
                  ]}
                  value={data.size}
                  name="size"
                  onChange={handleChange}
                  label="Choose size"
                />
                <SelectField
                  label="Choose category"
                  defaultOption="Choose..."
                  name="category"
                  options={categoryList}
                  onChange={handleChange}
                  value={data.category}
                  error={errors.category}
                />
                <CheckBoxField
                  value={data.licence}
                  onChange={handleChange}
                  name="allGoods"
                  error={errors.allGoods}
                >
                  Confirm <a>license</a>
                </CheckBoxField>
                <button
                  type="submit"
                  disabled={!isValid}
                  className="btn btn-primary w-100 mx-auto"
                >
                  Add item
                </button>
              </form>
              </div>
            </div>
        </div>
      </>

    );
};
export default NewItemForm;
