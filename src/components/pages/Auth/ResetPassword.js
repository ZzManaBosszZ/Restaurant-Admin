function ResetPassword() {

    // const [formSubmitted, setFormSubmitted] = useState(false);
    // const [submitting, setSubmitting] = useState(false);

    // const [formData, setFormData] = useState({
    //     email: "",
    // });

    // const [formErrors, setFormErrors] = useState({
    //     email: "",
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    //     setFormErrors({ ...formErrors, [name]: "" });
    // };

    // const isEmailValid = (email) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    // };

    // const validateForm = () => {
    //     let valid = true;
    //     const newErrors = {};

    //     if (!formData.email) {
    //         valid = false;
    //         newErrors.email = "Please enter your email.";
    //     } else if (!isEmailValid(formData.email)) {
    //         valid = false;
    //         newErrors.email = "Please enter a valid email address.";
    //     }

    //     setFormErrors(newErrors);

    //     return valid;
    // };

    // const submitResponse = async (e) => {
    //     e.preventDefault();

    //     if (validateForm()) {
    //         try {
    //             setSubmitting(true);

    //             await api.post(url.AUTH.FORGOT_PASSWORD, formData);
    //             setTimeout(() => {
    //                 setFormSubmitted(true);
    //                 setSubmitting(false);
    //                 toast.success("Submitted successfully!", {
    //                     position: "top-right",
    //                     autoClose: 2000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "colored",
    //                 });
    //             }, 1500);
    //         } catch (error) {
    //             setTimeout(() => {
    //                 setFormSubmitted(true);
    //                 setSubmitting(false);
    //                 toast.success("Submitted successfully!", {
    //                     position: "top-right",
    //                     autoClose: 2000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "colored",
    //                 });
    //             }, 1500);
    //         }
    //     }
    // };
    return ( 
        <body class="hold-transition theme-primary bg-img" style={{backgroundImage: "url(../images/auth-bg/bg-2.jpg)"}}>
	
	<div class="container h-p100">
		<div class="row align-items-center justify-content-md-center h-p100">
			
			<div class="col-12">
				<div class="row justify-content-center no-gutters">
					<div class="col-lg-5 col-md-5 col-12">						
						<div class="bg-white rounded30 shadow-lg">
							<div class="content-top-agile p-20 pb-0">
								<h3 class="mb-0 text-primary">Recover Password</h3>								
							</div>
							<div class="p-40">
								<form action="" method="post">
									<div class="form-group">
										<div class="input-group mb-3">
											<div class="input-group-prepend">
												<span class="input-group-text bg-transparent"><i class="ti-password"></i></span>
											</div>
											<input type="password" class="form-control pl-15 bg-transparent" placeholder="Enter Your New Password"/>
										</div>
									</div>

                                    <div class="form-group">
										<div class="input-group mb-3">
											<div class="input-group-prepend">
												<span class="input-group-text bg-transparent"><i class="ti-password"></i></span>
											</div>
											<input type="password-repeat" class="form-control pl-15 bg-transparent" placeholder="Repeat Your Password"/>
										</div>
									</div>
									  <div class="row">
										<div class="col-12 text-center">
										  <button type="submit" class="btn btn-info margin-top-10">Reset</button>
										</div>
									  </div>
								</form>	
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>	
    </body>
     );
}

export default ResetPassword;