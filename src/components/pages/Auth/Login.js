import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDecodedToken, removeAccessToken, setAccessToken } from "../../../utils/auth";
import api from "../../../services/api";
import url from "../../../services/url";

function Login() {

    // const navigate = useNavigate();

    // const [showPassword, setShowPassword] = useState(false);
    // const [submitting, setSubmitting] = useState(false);

    // const [formStaff, setFormStaff] = useState({
    //     email: "",
    //     password: "",
    // });

    // const [formErrors, setFormErrors] = useState({
    //     email: "",
    //     password: "",
    // });

    // const handleTogglePassword = () => {
    //     setShowPassword(!showPassword);
    // };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormStaff({ ...formStaff, [name]: value });
    //     setFormErrors({ ...formErrors, [name]: "" });
    // };

    // const validateForm = () => {
    //     let valid = true;
    //     const newErrors = {};

    //     if (!formStaff.email) {
    //         newErrors.email = "Please enter your email address.";
    //         valid = false;
    //     }

    //     if (!formStaff.password) {
    //         newErrors.password = "Please enter your password.";
    //         valid = false;
    //     } else if (formStaff.password.length < 6) {
    //         newErrors.password = "Password must be at least 6 characters.";
    //         valid = false;
    //     } else if (formStaff.password.length > 50) {
    //         newErrors.password = "Password must be less than 50 characters.";
    //         valid = false;
    //     }

    //     setFormErrors(newErrors);
    //     return valid;
    // };

    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     if (validateForm()) {
    //         try {
    //             setSubmitting(true);
    //             const loginRequest = await api.post(url.AUTH.LOGIN, formStaff);

    //             if (loginRequest.status === 200) {
    //                 const token = loginRequest.data.token;
    //                 setAccessToken(token);

    //                 const decodeToken = getDecodedToken();
    //                 let accountRole = decodeToken.Role[0].authority;

    //                 let redirectUrl = "";
    //                 if (accountRole === "ADMIN" || accountRole === "ADMIN") {
    //                     redirectUrl = "/";
    //                 } else if (accountRole === "") {
    //                     removeAccessToken();
    //                     setFormErrors({
    //                         email: "Invalid email or password.",
    //                         password: "Invalid email or password.",
    //                     });
    //                 }

    //                 navigate(redirectUrl);
    //             } else {
    //                 setFormErrors({
    //                     email: "Invalid email or password.",
    //                     password: "Invalid email or password.",
    //                 });
    //             }
    //         } catch (error) {
    //             setFormErrors({
    //                 email: "Invalid email or password.",
    //                 password: "Invalid email or password.",
    //             });
    //         } finally {
    //             setSubmitting(false);
    //         }
    //     }
    // };
    return (
        <body class="hold-transition theme-primary bg-img" style={{ backgroundImage: "url(../images/auth-bg/bg-1.jpg)" }}>
            <div class="container h-p100">
                <div class="row align-items-center justify-content-md-center h-p100">
                    <div class="col-12">
                        <div class="row justify-content-center no-gutters">
                            <div class="col-lg-5 col-md-5 col-12">
                                <div class="bg-white rounded30 shadow-lg">
                                    <div class="content-top-agile p-20 pb-0">
                                        <h2 class="text-primary">Let's Get Started</h2>
                                        <p class="mb-0">Sign in to continue to Restran.</p>
                                    </div>
                                    <div class="p-40">
                                        <form action="" method="post">
                                            <div class="form-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text bg-transparent"><i class="ti-user"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control pl-15 bg-transparent" placeholder="Username" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text  bg-transparent"><i class="ti-lock"></i></span>
                                                    </div>
                                                    <input type="password" class="form-control pl-15 bg-transparent" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="checkbox">
                                                        <input type="checkbox" id="basic_checkbox_1" />
                                                        <label for="basic_checkbox_1">Remember Me</label>
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                    <div class="fog-pwd text-right">
                                                        <a href="" class="hover-warning"><i class="ion ion-locked"></i> Forgot pwd?</a><br />
                                                    </div>
                                                </div>

                                                <div class="col-12 text-center">
                                                    <button type="submit" class="btn btn-danger mt-10">SIGN IN</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="text-center">
                                            <p class="mt-15 mb-0">Don't have an account? <a href="auth_register.html" class="text-warning ml-5">Sign Up</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <p class="mt-20 text-white">- Sign With -</p>
                                    <p class="gap-items-2 mb-20">
                                        <a class="btn btn-social-icon btn-round btn-facebook" href="#"><i class="fa fa-facebook"></i></a>
                                        <a class="btn btn-social-icon btn-round btn-twitter" href="#"><i class="fa fa-twitter"></i></a>
                                        <a class="btn btn-social-icon btn-round btn-instagram" href="#"><i class="fa fa-instagram"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Login;