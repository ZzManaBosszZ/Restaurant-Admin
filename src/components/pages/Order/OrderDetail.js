import Layout from "../../layouts";
import BreadCrumb from "../../layouts/BreadCrumb";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
function OrderDetail() {

    const { orderId } = useParams();
    console.log("Order ID:", orderId);

    const hashCode = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Convert to 32-bit integer
        }
        return Math.abs(hash);
    };

    // Generate the Order code based on the hashed orderCode
    const generateOrderCode = (orderCode) => {
        const hash = hashCode(orderCode);
        const orderNumber = hash % 1000; // Ensure a 6-digit number
        return `ODR${orderNumber.toString().padStart(3, '0')}`;
    };



    const [orderDetail, setOrderDetail] = useState([]);

    const loadData = useCallback(async () => {
        try {
            const orderDetailRequest = await api.get(url.ORDER.DETAIL.replace("{}", orderId), { headers: { Authorization: `Bearer ${getAccessToken()}` } });
            setOrderDetail(orderDetailRequest.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [orderId]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <Layout>
            <BreadCrumb title="Order Detail" />
            <section className="content">
                <div className="row">
                    <div className="col-xxxl-4 col-12">
                        <div className="box">
                            <div className="box-body">
                                <div className="d-flex align-items-center">
                                    <img className="mr-10 rounded-circle avatar avatar-xl b-2 border-primary" src="../images/avatar/1.jpg" alt="" />
                                    <div>
                                        {/* <h4 className="mb-0">Johen doe- {generateOrderCode(orderDetail.orderId[0].orderCode)}</h4> */}
                                        {/* <h4 className="mb-0">{orderDetail.food[0].name}</h4> */}
                                        <span className="font-size-14 text-info">Customer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-body border-bottom">
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-phone mr-10 font-size-24"></i>
                                    <h4 className="mb-0">+1 123 456 7890</h4>
                                </div>
                            </div>
                            <div className="box-body border-bottom">
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-map-marker mr-10 font-size-24"></i>
                                    <h4 className="mb-0 text-black">1623 E Updahl Ct, Harrison, ID, 83833</h4>
                                </div>
                            </div>
                            <div className="box-body">
                                <h4 className="mb-10">Order Nots</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxxl-12 col-lg-6 col-12">
                                <div className="box">
                                    <div className="box-header no-border">
                                        <h4 className="box-title">Delivery Person</h4>
                                    </div>
                                    <div className="box-body text-center">
                                        <div className="text-center">
                                            <img src="../images/avatar/3.jpg" className="mb-20 avatar avatar-xxl b-2 border-primary" alt="" />
                                            <div>
                                                <h4 className="mb-10 font-weight-500">Boone Doe</h4>
                                                <span className="fs-14 font-w400">Join since April 21, 2019</span>
                                            </div>
                                        </div>
                                        <div className="user-social-acount mt-20">
                                            <a href="javascript:void(0);" className="btn btn-circle btn-primary-light"><i className="fa fa-phone"></i></a>
                                            <a href="javascript:void(0);" className="btn btn-circle btn-primary-light"><i className="fa fa-map-marker"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxxl-12 col-lg-6 col-12">
                                <div className="box">
                                    <div className="box-header no-border">
                                        <h4 className="box-title">
                                            Customer Favourite
                                        </h4>
                                    </div>
                                    <div className="box-body text-center">
                                        <div className="bar mx-auto" data-peity='{ "fill": ["#2196f3", "#3da643", "#FDAC42"], "height": 150, "width": 320, "padding":0.2 }'>52,38,24</div>
                                        <div className="d-flex justify-content-center mt-30">
                                            <div className="d-flex text-left">
                                                <i className="fa fa-circle text-info mr-5"></i>
                                                <h4 className="font-weight-600">25% <br /><small className="text-fade">Pizza</small></h4>
                                            </div>
                                            <div className="d-flex text-left mx-50">
                                                <i className="fa fa-circle text-danger mr-5"></i>
                                                <h4 className="font-weight-600">15% <br /><small className="text-fade">Juice </small></h4>
                                            </div>
                                            <div className="d-flex text-left">
                                                <i className="fa fa-circle text-primary mr-5"></i>
                                                <h4 className="font-weight-600">21% <br /><small className="text-fade">Dessert </small></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxxl-8 col-12">
                        <div className="box">
                            <div className="box-body">
                                <ol className="c-progress-steps">
                                    <li className="c-progress-steps__step  done"><span>Order Created</span></li>
                                    <li className="c-progress-steps__step  done"><span>Payment Success</span></li>
                                    <li className="c-progress-steps__step  current"><span>On Delivery</span></li>
                                    <li className="c-progress-steps__step"><span>Order Delivered</span></li>
                                </ol>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-body">
                                <div className="table-responsive-xl">
                                    <table className="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th style={{ minWidth: "300px" }}>Product info</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th style={{ textAlign: "center" }}>Total</th>
                                                {/* <th style={{ textAlign: "center" }}>Action</th> */}

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img src="../images/product/product-1.png" alt="" width="80" /></td>
                                                <td>
                                                    <h6>MAIN COURSE</h6>
                                                    <h4>Instant Pot Pad Thai</h4>
                                                </td>
                                                <td>$270</td>
                                                <td width="100" align="center" className="font-weight-900">1</td>
                                                <td width="100" align="center" className="font-weight-900">$270</td>

                                            </tr>
                                            <tr>
                                                <td><img src="../images/product/product-2.png" alt="" width="80" /></td>
                                                <td>
                                                    <h6>MAIN COURSE</h6>
                                                    <h4>Instant Pot Pad Thai</h4>
                                                </td>
                                                <td>$270</td>
                                                <td>
                                                    {/* <input type="number" className="form-control" placeholder="1" min="0" max="5" /> */}
                                                </td>
                                                <td align="center" className="font-weight-900">$270</td>

                                            </tr>
                                            <tr>
                                                <td><img src="../images/product/product-3.png" alt="" width="80" /></td>
                                                <td>
                                                    <h6>MAIN COURSE</h6>
                                                    <h4>Instant Pot Pad Thai</h4>
                                                </td>
                                                <td>$270</td>
                                                <td>
                                                    {/* <input type="number" className="form-control" placeholder="1" min="0" max="5" /> */}
                                                </td>
                                                <td align="center" className="font-weight-900">$270</td>

                                            </tr>
                                            <tr>
                                                <td><img src="../images/product/product-4.png" alt="" width="80" /></td>
                                                <td>
                                                    <h6>MAIN COURSE</h6>
                                                    <h4>Instant Pot Pad Thai</h4>
                                                </td>
                                                <td>$270</td>
                                                <td>
                                                    {/* <input type="number" className="form-control" placeholder="1" min="0" max="5" /> */}
                                                </td>
                                                <td align="center" className="font-weight-900">$270</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>                     
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default OrderDetail