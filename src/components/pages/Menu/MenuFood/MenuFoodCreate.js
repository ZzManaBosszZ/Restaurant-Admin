import { useState, useEffect } from "react";
import Layout from "../../../layouts";
import url from "../../../../services/url";
import api from "../../../../services/api";
import { getAccessToken } from "../../../../utils/auth";
import { useNavigate } from "react-router-dom";
import config from "../../../../config";
import Swal from "sweetalert2";
import BreadCrumb from "../../../layouts/BreadCrumb";
import { Link } from "react-router-dom";

function MenuFoodCreate() {

    const navigate = useNavigate();
    const [menus, setMenu] = useState([]);
    const [foods, setFoods] = useState([]);

    const loadData = async () => {
        try {
            const headerConfig = {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            };

            const [menuResponse, foodsResponse] = await Promise.all([
                api.get(url.MENU.LIST, headerConfig),
                api.get(url.FOOD.LIST, headerConfig),
            ]);

            setMenu(menuResponse.data.data);
            setFoods(foodsResponse.data.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const [formData, setFormData] = useState({
        image: null,
        foodId: [],
        menuId: [],
    });

    const [formErrors, setFormErrors] = useState({
        image: null,
        foodId: [],
        menuId: [],
    });

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
            newErrors.image = "Please choose Image food";
            valid = false;
        }
        if (formData.foodId.length === 0) {
            newErrors.foodId = "Please choose Food";
            valid = false;
        }
        if (formData.menuId.length === 0) {
            newErrors.menuId = "Please choose Menu";
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
                const response = await api.post(url.MENU_FOOD.CREATE, formData, { headers });

                if (response && response.data) {
                    Swal.fire({
                        text: "Create Menu Food Successfully.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                    setTimeout(() => {
                        navigate(config.routes.food_list); //chuyển đến trang food-list
                    }, 3000);

                }
            } catch (error) {
                if (error.response.data === 400 && error.response.data.message === "Create Menu Food error") {
                    Swal.fire({
                        text: "Create Menu Food error",
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                } else {
                    Swal.fire({
                        text: "Create Menu Food error",
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
            <BreadCrumb title="Menu-Food Create" />
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
                                                    <label className="font-weight-700 font-size-16">Menu</label>
                                                    <select name="menuId" className={`form-control ${formErrors.menuId ? "is-invalid" : ""}`} value={formData.menuId || ""} onChange={handleChange}>
                                                        <option value="">Please choose Menu</option>
                                                        {menus.map((menu) => (
                                                            <option value={menu.id} key={menu.id}>
                                                                {menu.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {formErrors.menuId && <div className="invalid-feedback d-block">{formErrors.menuId}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Food</label>
                                                    <select name="foodId" className={`form-control ${formErrors.foodId ? "is-invalid" : ""}`} value={formData.foodId || ""} onChange={handleChange}>
                                                        <option value="">Please choose Food</option>
                                                        {foods.map((food) => (
                                                            <option value={food.id} key={food.id}>
                                                                {food.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {formErrors.foodId && <div className="invalid-feedback d-block">{formErrors.foodId}</div>}
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
                                        <Link to={config.routes.food_list}><button type="button" className="btn btn-danger">Cancel</button></Link>
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

export default MenuFoodCreate;