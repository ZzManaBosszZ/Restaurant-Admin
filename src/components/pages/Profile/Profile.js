import Layout from "../../layouts";
import BreadCrumb from "../../layouts/BreadCrumb";

function Profile() {
    return (
        <Layout>
            <BreadCrumb title="Profile" />
            <section className="content">
                <div className="row">
                    <div className="col-12 col-lg-7 col-xl-8">
                        <div className="nav-tabs-custom">
                            <ul className="nav nav-tabs">
                                <li><a className="active" href="#settings" data-toggle="tab">Settings</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="settings">
                                    <div className="box p-15">
                                        <form className="form-horizontal form-element col-12">
                                            <div className="form-group row">
                                                <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" id="inputName" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control" id="inputEmail" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="inputPhone" className="col-sm-2 control-label">Phone</label>
                                                <div className="col-sm-10">
                                                    <input type="tel" className="form-control" id="inputPhone" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
                                                <div className="col-sm-10">
                                                    <input type="password" className="form-control" id="inputPassword" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="inputPasswordRepeat" className="col-sm-2 control-label">Password Repeat</label>
                                                <div className="col-sm-10">
                                                    <input type="password" className="form-control" id="inputPasswordRepeat" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="ml-auto col-sm-10">
                                                    <button type="submit" className="btn btn-success">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 col-xl-4">
                        <div className="box box-widget widget-user">
                            <div className="widget-user-header bg-black" style={{ background: "url('../images/gallery/full/10.jpg') center center" }}>
                                <h3 className="widget-user-username">Michael Jorden</h3>
                                <h6 className="widget-user-desc">Designer</h6>
                            </div>
                            <div className="widget-user-image">
                                <img className="rounded-circle" src="../images/user3-128x128.jpg" alt="User Avatar" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-body box-profile">
                                <div className="row">
                                    <div className="col-12">
                                        <div>
                                            <p>Email :<span className="text-gray pl-10">David@yahoo.com</span></p>
                                            <p>Phone :<span className="text-gray pl-10">+11 123 456 7890</span></p>
                                            <p>Address :<span className="text-gray pl-10">123, Lorem Ipsum, Florida, USA</span></p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="pb-15">
                                            <p className="mb-10">Social Profile</p>
                                            <div className="user-social-acount">
                                                <button className="btn btn-circle btn-social-icon btn-facebook"><i className="fa fa-facebook"></i></button>
                                                <button className="btn btn-circle btn-social-icon btn-twitter"><i className="fa fa-twitter"></i></button>
                                                <button className="btn btn-circle btn-social-icon btn-instagram"><i className="fa fa-instagram"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div>
                                            <div className="map-box">
                                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805244.1745767146!2d-86.32675167439648!3d29.383165774894163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C+USA!5e0!3m2!1sen!2sin!4v1501665415329" width="100%" height="100" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Profile;
