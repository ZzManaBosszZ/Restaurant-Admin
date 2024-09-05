import Layout from "../../layouts";
import TotalOrder from "../../views/Dashboard/TotalOrder";
import TotalOrderDelivered from "../../views/Dashboard/TotalDelivered";
import TotalOrderCancel from "../../views/Dashboard/TotalCanceled";
import TotalOrderRevenue from "../../views/Dashboard/TotalRevenue";
import DashboardStatistic from "../../views/Dashboard/Statistics";
function Home() {

    return (
        <>
            <Layout title="Home Page">
                <section className="content">
                    <div className="row">
                        <TotalOrder />
                        <TotalOrderDelivered />
                        <TotalOrderCancel />
                        <TotalOrderRevenue />
                        <DashboardStatistic />
                        <div className="col-12">
                            <div className="box bg-transparent no-shadow">
                                <div className="box-header pt-0 px-0">
                                    <h4 className="box-title">
                                        Customer Review
                                    </h4>
                                </div>
                                <div className="box-body px-0">
                                    <div class="review-slider owl-carousel">
                                        <div className="box p-0">
                                            <div className="box-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="review-tx">
                                                        <div className="d-flex mb-10">
                                                            <img src="../images/avatar/1.jpg" className="w-40 h-40 mr-10 rounded100" alt="" />
                                                            <div>
                                                                <p className="mb-0">Johen Doe</p>
                                                                <p className="mb-0"><small className="text-mute">1 day ago</small></p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. </p>
                                                        <div className="d-flex text-warning align-items-center">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half-empty"></i>
                                                            <span className="text-fade ml-10">4.5</span>
                                                        </div>
                                                    </div>
                                                    <img src="../images/food/dish-1.png" className="dish-img" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box p-0">
                                            <div className="box-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="review-tx">
                                                        <div className="d-flex mb-10">
                                                            <img src="../images/avatar/2.jpg" className="w-40 h-40 mr-10 rounded100" alt="" />
                                                            <div>
                                                                <p className="mb-0">Mical Doe</p>
                                                                <p className="mb-0"><small className="text-mute">2 day ago</small></p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. </p>
                                                        <div className="d-flex text-warning align-items-center">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half-empty"></i>
                                                            <span className="text-fade ml-10">4.5</span>
                                                        </div>
                                                    </div>
                                                    <img src="../images/food/dish-2.png" className="dish-img" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box p-0">
                                            <div className="box-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="review-tx">
                                                        <div className="d-flex mb-10">
                                                            <img src="../images/avatar/3.jpg" className="w-40 h-40 mr-10 rounded100" alt="" />
                                                            <div>
                                                                <p className="mb-0">Stepni Doe</p>
                                                                <p className="mb-0"><small className="text-mute">3 day ago</small></p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. </p>
                                                        <div className="d-flex text-warning align-items-center">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half-empty"></i>
                                                            <span className="text-fade ml-10">4.5</span>
                                                        </div>
                                                    </div>
                                                    <img src="../images/food/dish-3.png" className="dish-img" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box p-0">
                                            <div className="box-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="review-tx">
                                                        <div className="d-flex mb-10">
                                                            <img src="../images/avatar/4.jpg" className="w-40 h-40 mr-10 rounded100" alt="" />
                                                            <div>
                                                                <p className="mb-0">Rehan Doe</p>
                                                                <p className="mb-0"><small className="text-mute">4 day ago</small></p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. </p>
                                                        <div className="d-flex text-warning align-items-center">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half-empty"></i>
                                                            <span className="text-fade ml-10">4.5</span>
                                                        </div>
                                                    </div>
                                                    <img src="../images/food/dish-4.png" className="dish-img" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box p-0">
                                            <div className="box-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="review-tx">
                                                        <div className="d-flex mb-10">
                                                            <img src="../images/avatar/5.jpg" className="w-40 h-40 mr-10 rounded100" alt="" />
                                                            <div>
                                                                <p className="mb-0">Himesh Doe</p>
                                                                <p className="mb-0"><small className="text-mute">1 day ago</small></p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. </p>
                                                        <div className="d-flex text-warning align-items-center">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half-empty"></i>
                                                            <span className="text-fade ml-10">4.5</span>
                                                        </div>
                                                    </div>
                                                    <img src="../images/food/dish-5.png" className="dish-img" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxxl-5 col-12">
                            {/* <div className="box">
                                <div className="box-header no-border">
                                    <h4 className="box-title">
                                        Trending Keyword
                                        <small className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit</small>
                                    </h4>
                                </div>
                                <div className="box-body pt-0">
                                    <div>
                                        <div className="progress mb-5">
                                            <div className="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-primary">#paneer</p>
                                            <p className="text-mute">420 times</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="progress mb-5">
                                            <div className="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-primary">#breakfast</p>
                                            <p className="text-mute">150 times</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="progress mb-5">
                                            <div className="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-primary">#tea</p>
                                            <p className="text-mute">120 times</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body pt-0">
                                    <h4 className="box-title d-block">
                                        Others Tag
                                    </h4>
                                    <div className="d-inline-block">
                                        <a href="#" className="waves-effect waves-light btn btn-outline btn-rounded btn-primary mb-5">#panjabifood</a>
                                        <a href="#" className="waves-effect waves-light btn btn-outline btn-rounded btn-primary mb-5">#chainissfood</a>
                                        <a href="#" className="waves-effect waves-light btn btn-outline btn-rounded btn-primary mb-5">#pizza</a>
                                        <a href="#" className="waves-effect waves-light btn btn-outline btn-rounded btn-primary mb-5">#burgar</a>
                                        <a href="#" className="waves-effect waves-light btn btn-outline btn-rounded btn-primary mb-5">#coffee</a>
                                        <a href="#" className="waves-effect waves-light btn btn-outline btn-rounded btn-primary mb-5">20+</a>
                                    </div>
                                </div>
                            </div> */}
                            <div className="box">
                                <div className="box-header no-border">
                                    <h4 className="box-title">
                                        Today's Special
                                    </h4>
                                </div>
                                <div className="box-body pt-0">
                                    <div className="mb-5">
                                        <img className="rounded img-fluid" src="../images/food/img1.jpg" alt="" />
                                    </div>
                                    <div className="info-content">
                                        <h5 className="my-15"><a href="ecommerce_details.html">Spicy Pizza with Extra Cheese</a></h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4 className="mb-0 text-black">$6.53</h4>
                                            <div className="d-flex align-items-center">
                                                <i className="fa fa-heart text-primary"></i>
                                                <h6 className="text-black mb-0">256k</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xxxl-7 col-12">
                            <div className="box">
                                <div className="box-header no-border pb-0">
                                    <h4 className="box-title">Delivery Map</h4>
                                </div>
                                <div className="box-body">
                                    <div id="chartdiv" className="h-400"></div>
                                    <div className="pt-30">
                                        <h4 className="box-title mb-20">Upcoming Shipping Schedule</h4>
                                        <div className="bb-1 pb-10 mb-20 d-lg-flex d-block justify-content-between">
                                            <div className="d-flex">
                                                <img src="../images/avatar/4.jpg" className="w-40 h-40 mr-10 rounded100" alt="" />
                                                <div>
                                                    <p className="mb-0">Stepni Doe <span className="text-primary ml-10">(3 items)</span></p>
                                                    <p className="mb-0"><small className="text-mute">will be shipping on 10:12 am</small></p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <p className="mb-0 mr-10">8817 Sand Pine Dr, Navarre, FL, 32566</p>
                                                <div className="bg-info rounded-circle w-30 h-30 l-h-30 text-center">
                                                    <i className="fa fa-location-arrow"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bb-1 pb-10 mb-20  d-lg-flex d-block justify-content-between">
                                            <div className="d-flex">
                                                <img src="../images/avatar/5.jpg" className="w-40 h-40 mr-10 rounded100" alt="" />
                                                <div>
                                                    <p className="mb-0">Mical clark <span className="text-primary ml-10">(2 items)</span></p>
                                                    <p className="mb-0"><small className="text-mute">will be shipping on 12:12 am</small></p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <p className="mb-0 mr-10">8817 Sand Pine Dr, Navarre, FL, 32566</p>
                                                <div className="bg-info rounded-circle w-30 h-30 l-h-30 text-center">
                                                    <i className="fa fa-location-arrow"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bb-1 pb-10  d-lg-flex d-block justify-content-between">
                                            <div className="d-flex">
                                                <img src="../images/avatar/7.jpg" className="w-40 h-40 mr-10 rounded100" alt="" />
                                                <div>
                                                    <p className="mb-0">Steponi mohan <span className="text-primary ml-10">(7 items)</span></p>
                                                    <p className="mb-0"><small className="text-mute">will be shipping on 11:12 am</small></p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <p className="mb-0 mr-10">8817 Sand Pine Dr, Navarre, FL, 32566</p>
                                                <div className="bg-info rounded-circle w-30 h-30 l-h-30 text-center">
                                                    <i className="fa fa-location-arrow"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>

            </Layout>
        </>
    );
}

export default Home;