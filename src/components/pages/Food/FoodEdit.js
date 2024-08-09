import Layout from "../../layouts";
import BreadCrumb from "../../layouts/BreadCrumb";

function FoodEdit() {

    // const navigate = useNavigate();

    // const levels = levelCourse();

    // const [formData, setFormData] = useState({
    //     name: "",
    //     image: null,
    //     price: "",
    //     description: "",
    //     level: "",
    //     language: "",
    //     trailer: "",
    // });

    // const [formErrors, setFormErrors] = useState({
    //     name: "",
    //     image: "",
    //     price: "",
    //     description: "",
    //     level: "",
    //     language: "",
    //     trailer: "",
    // });

    // const [videoUrl, setVideoUrl] = useState("");

    // const handleChange = (e) => {
    //     const { name, value, files } = e.target;
    //     if (name === "image" && files.length > 0) {
    //         setFormData({ ...formData, image: "https://www.shutterstock.com/image-vector/3d-web-vector-illustrations-online-600nw-2152289507.jpg" });
    //         setFormErrors({ ...formErrors, [name]: "" });

    //         const reader = new FileReader();
    //         reader.onload = () => {
    //             document.getElementById("imgPreview").src = reader.result;
    //         };
    //         reader.readAsDataURL(files[0]);
    //     } else {
    //         setFormData({ ...formData, [name]: value });
    //         setFormErrors({ ...formErrors, [name]: "" });
    //     }
    // };

    // const validateForm = () => {
    //     let valid = true;
    //     const newErrors = {};
    //     if (!formData.name) {
    //         newErrors.name = "Please enter name.";
    //         valid = false;
    //     } else if (formData.name.length < 3) {
    //         newErrors.name = "Name must be at least 3 characters.";
    //         valid = false;
    //     } else if (formData.name.length > 255) {
    //         newErrors.name = "Name must be less than 255 characters.";
    //         valid = false;
    //     }
    //     if (!formData.image) {
    //         newErrors.image = "Please choose image course";
    //         valid = false;
    //     }
    //     if (formData.price === "") {
    //         newErrors.price = "Please enter price";
    //         valid = false;
    //     }
    //     if (formData.description === "") {
    //         newErrors.description = "Please enter description";
    //         valid = false;
    //     }
    //     if (formData.level === "") {
    //         newErrors.level = "Please choose level";
    //         valid = false;
    //     }
    //     if (formData.language === "") {
    //         newErrors.language = "Please enter language";
    //         valid = false;
    //     }
    //     if (formData.trailer === "") {
    //         newErrors.trailer = "Please enter trailer";
    //         valid = false;
    //     }
    //     setFormErrors(newErrors);
    //     return valid;
    // };

    // const handleCreateCourse = async (e) => {
    //     e.preventDefault();
    //     if (validateForm()) {
    //         try {
    //             const createRequest = await api.post(url.COURSE_OFFLINE.CREATE, formData, { headers: { Authorization: `Bearer ${getAccessToken()}` } });

    //             if (createRequest.status === 200) {
    //                 navigate(config.routes.course_offline);

    //                 setFormData({
    //                     name: "",
    //                     image: null,
    //                     price: "",
    //                     description: "",
    //                     level: "",
    //                     language: "",
    //                     trailer: "",
    //                 });
    //                 toast.success("Course Offline created successfully!", {
    //                     position: "top-right",
    //                     autoClose: 3000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "colored",
    //                 });
    //             }
    //         } catch (error) {
    //             if (error.response.status === 400) {
    //                 toast.error(error.response.data.message, {
    //                     position: "top-right",
    //                     autoClose: 3000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "colored",
    //                 });
    //             } else {
    //                 toast.error("Error! An error occurred. Please try again later!", {
    //                     position: "top-right",
    //                     autoClose: 3000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "colored",
    //                 });
    //             }
    //         }
    //     }
    // };

    return (
        <Layout>
            <BreadCrumb />
            <section class="content">
                <div class="row">
                    <div class="col-12">
                        <div class="box">
                            <div class="box-body">
                                <form action="#">
                                    <div class="form-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="font-weight-700 font-size-16">Menu Name</label>
                                                    <input type="text" class="form-control" placeholder="Product Name" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="font-weight-700 font-size-16">Ingredients</label>
                                                    <input type="text" class="form-control" placeholder="Lorem Ipsum Text..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="font-weight-700 font-size-16">Category</label>
                                                    <select class="form-control" data-placeholder="Choose a Category" tabindex="1">
                                                        <option value="Category 1">Category 1</option>
                                                        <option value="Category 2">Category 2</option>
                                                        <option value="Category 3">Category 5</option>
                                                        <option value="Category 4">Category 4</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="font-weight-700 font-size-16">Status</label>
                                                    <div class="radio-list">
                                                        <label class="radio-inline p-0 mr-10">
                                                            <div class="radio radio-info">
                                                                <input type="radio" name="radio" id="radio1" value="option1" />
                                                                <label for="radio1">Published</label>
                                                            </div>
                                                        </label>
                                                        <label class="radio-inline">
                                                            <div class="radio radio-info">
                                                                <input type="radio" name="radio" id="radio2" value="option2" />
                                                                <label for="radio2">Draft</label>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="font-weight-700 font-size-16">Price</label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon"><i class="ti-money"></i></div>
                                                        <input type="text" class="form-control" placeholder="270" /> </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="font-weight-700 font-size-16">Discount</label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon"><i class="ti-cut"></i></div>
                                                        <input type="text" class="form-control" placeholder="50%" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="font-weight-700 font-size-16">Ingredients and Description</label>
                                                    <textarea class="form-control p-20" rows="4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="font-weight-700 font-size-16">Meta Title</label>
                                                    <input type="text" class="form-control" /> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="font-weight-700 font-size-16">Meta Keyword</label>
                                                    <input type="text" class="form-control" /> </div>
                                            </div>
                                            <div class="col-md-3">
                                                <h4 class="box-title mt-20">Uploaded Image</h4>
                                                <div class="product-img text-left">
                                                    <img src="../images/product/product-9.png" alt="" class="mb-15" />
                                                    <p>Upload Anonther Image</p>
                                                    <div class="btn btn-info mb-20">
                                                        <input type="file" class="upload" />
                                                    </div>
                                                    <button class="btn btn-success">Edit</button>
                                                    <button class="btn btn-danger">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row no-gutters">
                                            <div class="col-md-12">
                                                <h4 class="box-title mt-40">General Info</h4>
                                                <div class="table-responsive">
                                                    <table class="table no-border td-padding">
                                                        <tbody>
                                                            <tr>
                                                                <td class="pl-0">
                                                                    <input type="text" class="form-control" placeholder="Baking & Spices" />
                                                                </td>
                                                                <td class="pl-0">
                                                                    <input type="text" class="form-control" placeholder="Oils & Vinegars" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="pl-0">
                                                                    <input type="text" class="form-control" placeholder="Nuts & Seeds" />
                                                                </td>
                                                                <td class="pl-0">
                                                                    <input type="text" class="form-control" placeholder="Condiments" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="pl-0">
                                                                    <input type="text" class="form-control" placeholder="Delivery Condition" />
                                                                </td>
                                                                <td class="pl-0">
                                                                    <input type="text" class="form-control" placeholder="Knock Down" />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-actions mt-10">
                                        <button type="submit" class="btn btn-primary"> <i class="fa fa-check"></i> Save / Add</button>
                                        <button type="button" class="btn btn-danger">Cancel</button>
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

export default FoodEdit;