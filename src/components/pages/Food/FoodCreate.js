import { useState, useEffect } from "react";
import Layout from "../../layouts";
import url from "../../../services/url";
import api from "../../../services/api";
import ReactSelect from "react-select";
import { getAccessToken } from "../../../utils/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import config from "../../../config";
import Swal from "sweetalert2";
import BreadCrumb from "../../layouts/BreadCrumb";

function FoodCreate() {


    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    const loadData = async () => {
        try {
            const headerConfig = {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            };

            const [categoriesResponse] = await Promise.all([
                api.get(url.CATEGORY.LIST, headerConfig),
            ]);

            setCategories(categoriesResponse.data.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const categoryOptions = categories.map((category) => ({
        value: category.id,
        label: category.name,
    }));

    const [formData, setFormData] = useState({
        name: "",
        image: null,
        price: 0,
        quantity: 0,
        description: "",
        categoryId: [],
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
        image: null,
        price: 0,
        quantity: 0,
        description: "",
        categoryId: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // const handleSelectChange = (selectedOption, { name }) => {
    //     const value = Array.isArray(selectedOption) ? selectedOption.map((option) => option.value) : selectedOption?.value || null;
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [name]: value,
    //     }));
    // };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        let newValue = value;

        if (name === "image" && files.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                // Set the preview image's src to the result from the FileReader
                document.getElementById("imgPreview").src = reader.result;

                // Update the form's state with the selected image file (or its URL)
                setFormData((prevForm) => ({
                    ...prevForm,
                    image: files[0], // Store the actual file in the form state
                }));

                // Clear any errors related to the image input
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: "",
                }));
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData((prevForm) => ({
                ...prevForm,
                [name]: newValue,
            }));
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = "Please enter name.";
            valid = false;
        } else if (formData.name.length < 3) {
            newErrors.name = "Name must be at least 3 characters.";
            valid = false;
        } else if (formData.name.length > 255) {
            newErrors.name = "Name must be less than 255 characters.";
            valid = false;
        }
        if (!formData.image) {
            newErrors.image = "Please choose image food";
            valid = false;
        }
        if (formData.price <= 0 || formData.price == null) {
            newErrors.price = "Please enter price";
            valid = false;
        }
        if (formData.description === "") {
            newErrors.description = "Please enter description";
            valid = false;
        }
        if (formData.categoryId.length === 0) {
            newErrors.categoryId = "Please choose category";
            valid = false;
        }
        setFormErrors(newErrors);
        return valid;
    };

    console.log(getAccessToken());

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const headers = {
                    Authorization: `Bearer ${getAccessToken()}`,
                    "Content-Type": "multipart/form-data",
                };
                const response = await api.post(url.FOOD.CREATE, formData, { headers });

                if (response && response.data) {
                    Swal.fire({
                        text: "Create Food Successfully.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                    setTimeout(() => {
                        navigate(config.routes.food_list); //chuyển đến trang food-list
                    }, 3000);

                }
            } catch (error) {
                if (error.response.data === 400 && error.response.data.message === "Food already exists") {
                    Swal.fire({
                        text: "The name of this Food already exists",
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                } else {
                    Swal.fire({
                        text: "The name of this Food already exists",
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });

                }
                // console.error("Error creating test:", error);
                // console.error("Response data:", error.response.data);
            }
        }
    };

    return (
        <Layout>
            <BreadCrumb title="Food Create" />
            <section className="content">
                <div className="row">
                    <div className="col-12">
                        <div className="box">
                            <div className="box-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Food Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
                                                        placeholder="Food Name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        autoFocus />
                                                    {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Category</label>
                                                    <select name="categoryId" className={`form-control ${formErrors.categoryId ? "is-invalid" : ""}`} value={formData.categoryId || ""} onChange={handleChange}>
                                                        <option value="">Please choose category</option>
                                                        {categories.map((category) => (
                                                            <option value={category.id} key={category.id}>
                                                                {category.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {formErrors.categoryId && <div className="invalid-feedback d-block">{formErrors.categoryId}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Price</label>
                                                    <div className="input-group">
                                                        <div className="input-group-addon"><i className="ti-money"></i></div>
                                                        <input
                                                            type="number"
                                                            name="price"
                                                            className={`form-control ${formErrors.price ? "is-invalid" : ""}`}
                                                            placeholder="270"
                                                            value={formData.price}
                                                            onChange={handleInputChange}
                                                        />
                                                        {formErrors.price && <div className="invalid-feedback d-block">{formErrors.price}</div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Quantity</label>
                                                    <div className="input-group">
                                                        <div className="input-group-addon"><i className="ti-package"></i></div>
                                                        <input
                                                            type="number"
                                                            name="quantity"
                                                            className={`form-control ${formErrors.quantity ? "is-invalid" : ""}`}
                                                            placeholder="10"
                                                            value={formData.quantity}
                                                            onChange={handleInputChange}
                                                        />
                                                        {formErrors.quantity && <div className="invalid-feedback d-block">{formErrors.quantity}</div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Ingredients and Description</label>
                                                    <input
                                                        className={`form-control p-20 ${formErrors.price ? "is-invalid" : ""}`}
                                                        placeholder="Enter in this"
                                                        name="description"
                                                        rows="4"
                                                        value={formData.description}
                                                        onChange={handleInputChange} />
                                                    {formErrors.description && <div className="invalid-feedback d-block">{formErrors.description}</div>}
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-3">
                                                <h4 class="box-title mt-20">Uploaded Image Preview</h4>
                                                <div class="product-img text-left">
                                                    <img id="imgPreview" src="" alt="Preview" class="mb-15"></img>
                                                    <p>Upload Another Image</p>
                                                    <div class="btn btn-info mb-20">
                                                        <input type="file" name="image" onChange={handleChange} accept=".jpg, .png, .etc" />
                                                        {formErrors.image && <div className="invalid-feedback">{formErrors.image}</div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-actions mt-10">
                                        <button type="submit" class="btn btn-primary"><i class="fa fa-check"></i>Add</button>
                                        <button type="button" className="btn btn-danger">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Layout>
    );
}

export default FoodCreate;