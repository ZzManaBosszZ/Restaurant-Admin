import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "../../layouts";
import url from "../../../services/url";
import api from "../../../services/api";
import ReactSelect from "react-select";
import { getAccessToken } from "../../../utils/auth";
import { toast } from "react-toastify";
import config from "../../../config";
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

    const [formData, setFormData] = useState({
        name: "",
        image: null,
        price: "",
        description: "",
        categoryIds: [],
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
        image: null,
        price: "",
        description: "",
        categoryIds: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSelectChange = (selectedOption, { name }) => {
        const value = Array.isArray(selectedOption) ? selectedOption.map((option) => option.value) : selectedOption?.value || null;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const categoryOptions = categories.map((category) => ({
        value: category.id,
        label: category.name,
    }));


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image" && files.length > 0) {
            setFormData({ ...formData, image: "https://www.shutterstock.com/image-vector/3d-web-vector-illustrations-online-600nw-2152289507.jpg" });
            setFormErrors({ ...formErrors, [name]: "" });

            const reader = new FileReader();
            reader.onload = () => {
                document.getElementById("imgPreview").src = reader.result;
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData({ ...formData, [name]: value });
            setFormErrors({ ...formErrors, [name]: "" });
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
            newErrors.image = "Please choose image course";
            valid = false;
        }
        if (formData.price === "") {
            newErrors.price = "Please enter price";
            valid = false;
        }
        if (formData.description === "") {
            newErrors.description = "Please enter description";
            valid = false;
        }
        if (formData.categoryIds === "") {
            newErrors.categoryIds = "Please choose category";
            valid = false;
        }
        if (formData.quantity === "") {
            newErrors.quantity = "Please enter quantity";
            valid = false;
        }
        setFormErrors(newErrors);
        return valid;
    };

    const handleCreateFood = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const headerConfig = {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            };
            const createRequest = await api.post(url.FOOD.CREATE, formData, headerConfig);

            if (createRequest.status === 200) {
                toast.success("Created successfully!");
                setFormData({
                    name: "",
                    image: null,
                    price: "",
                    description: "",
                    categoryIds: [],
                });

                navigate(config.routes.food_list);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
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
                                <form onSubmit={handleCreateFood}>
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
                                                    <ReactSelect
                                                        options={categoryOptions}
                                                        placeholder="Please Choose Category"
                                                        name="categoryIds"
                                                        onChange={handleSelectChange}
                                                        className={formErrors.categoryIds ? "is-invalid" : ""}
                                                    />
                                                    {formErrors.categoryIds && <div className="invalid-feedback d-block">{formErrors.categoryIds}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Category</label>
                                                    <select className="form-control" data-placeholder="Choose a Category" tabindex="1">
                                                        <option value="Category 1">Category 1</option>
                                                        <option value="Category 2">Category 2</option>
                                                        <option value="Category 3">Category 5</option>
                                                        <option value="Category 4">Category 4</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Status</label>
                                                    <div className="radio-list">
                                                        <label className="radio-inline p-0 mr-10">
                                                            <div className="radio radio-info">
                                                                <input type="radio" name="radio" id="radio1" value="option1" />
                                                                <label for="radio1">Published</label>
                                                            </div>
                                                        </label>
                                                        <label className="radio-inline">
                                                            <div className="radio radio-info">
                                                                <input type="radio" name="radio" id="radio2" value="option2" />
                                                                <label for="radio2">Draft</label>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Price</label>
                                                    <div className="input-group">
                                                        <div className="input-group-addon"><i className="ti-money"></i></div>
                                                        <input type="text" className="form-control" placeholder="270" /> </div>
                                                </div>
                                            </div>
                                            {/* <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Discount</label>
                                                    <div className="input-group">
                                                        <div className="input-group-addon"><i className="ti-cut"></i></div>
                                                        <input type="text" className="form-control" placeholder="50%" /> </div>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Ingredients and Description</label>
                                                    <textarea className="form-control p-20" rows="4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Meta Title</label>
                                                    <input type="text" className="form-control" /> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Meta Keyword</label>
                                                    <input type="text" className="form-control" /> </div>
                                            </div>
                                            <div className="col-md-3">
                                                <h4 className="box-title mt-20">Uploaded Image</h4>
                                                <div className="product-img text-left">
                                                    <img src="../images/product/product-9.png" alt="" className="mb-15" />
                                                    <p>Upload Anonther Image</p>
                                                    <div className="btn btn-info mb-20">
                                                        <input type="file" className="upload" />
                                                    </div>
                                                    <button className="btn btn-success">Edit</button>
                                                    <button className="btn btn-danger">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row no-gutters">
                                            <div className="col-md-12">
                                                <h4 className="box-title mt-40">General Info</h4>
                                                <div className="table-responsive">
                                                    <table className="table no-border td-padding">
                                                        <tbody>
                                                            <tr>
                                                                <td className="pl-0">
                                                                    <input type="text" className="form-control" placeholder="Baking & Spices" />
                                                                </td>
                                                                <td className="pl-0">
                                                                    <input type="text" className="form-control" placeholder="Oils & Vinegars" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pl-0">
                                                                    <input type="text" className="form-control" placeholder="Nuts & Seeds" />
                                                                </td>
                                                                <td className="pl-0">
                                                                    <input type="text" className="form-control" placeholder="Condiments" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pl-0">
                                                                    <input type="text" className="form-control" placeholder="Delivery Condition" />
                                                                </td>
                                                                <td className="pl-0">
                                                                    <input type="text" className="form-control" placeholder="Knock Down" />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-actions mt-10">
                                    <button type="submit" class="btn btn-primary"> <i class="fa fa-check"></i>Add</button>
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