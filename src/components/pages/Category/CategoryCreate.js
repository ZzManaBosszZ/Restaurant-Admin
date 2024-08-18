import React from 'react'
import Layout from '../../layouts';
import BreadCrumb from '../../layouts/BreadCrumb';
import { useState } from 'react';
import Swal from 'sweetalert2';
import api from '../../../services/api';
import url from '../../../services/url';
import { getAccessToken } from '../../../utils/auth';
import { useNavigate } from 'react-router-dom';
import config from '../../../config';

export default function CategoryCreate() {


    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
    });

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

        setFormErrors(newErrors);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const headers = {
                    Authorization: `Bearer ${getAccessToken()}`,
                    // "Content-Type": "multipart/form-data",
                };
                const response = await api.post(url.CATEGORY.CREATE, formData, { headers });

                if (response && response.data) {
                    Swal.fire({
                        text: "Create Category Successfully.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                    setTimeout(() => {
                        navigate(config.routes.category_list); //chuyển đến trang food-list
                    }, 3000);

                }
            } catch (error) {
                if (error.response.data === 400 && error.response.data.message === "Category already exists") {
                    Swal.fire({
                        text: "The name of this Category already exists",
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                } else {
                    Swal.fire({
                        text: "Create Category Failed",
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
            <BreadCrumb title="Category Create" />
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
                                                    <label className="font-weight-700 font-size-16">Category Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
                                                        placeholder="Category Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        autoFocus />
                                                    {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
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
    )
}
