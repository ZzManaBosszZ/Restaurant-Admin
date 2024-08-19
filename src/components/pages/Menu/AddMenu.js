import { useState } from "react";
import Layout from "../../layouts";
import url from "../../../services/url";
import api from "../../../services/api";
import { getAccessToken } from "../../../utils/auth";
import { useNavigate } from "react-router-dom";
import config from "../../../config";
import Swal from "sweetalert2";
import BreadCrumb from "../../layouts/BreadCrumb";
import { Link } from "react-router-dom";

function AddMenu() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        image: null,
        description: "",
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
        image: null,
        description: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

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
        if (formData.description === "") {
            newErrors.description = "Please enter description";
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
                    // "Content-Type": "multipart/form-data",
                };
                const response = await api.post(url.MENU.CREATE, formData, { headers });

                if (response && response.data) {
                    Swal.fire({
                        text: "Create Menu Successfully.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                    setTimeout(() => {
                        navigate(config.routes.menu); //chuyển đến trang food-list
                    }, 3000);

                }
            } catch (error) {
                if (error.response.data === 400 && error.response.data.message === "Menu already exists") {
                    Swal.fire({
                        text: "The name of this Menu already exists",
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                } else {
                    Swal.fire({
                        text: "The name of this Menu already exists",
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
            <BreadCrumb title="Menu Create" />
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
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Description About Menu</label>
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
                                        <Link to={config.routes.menu}><button type="button" className="btn btn-danger">Cancel</button></Link>
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

export default AddMenu;