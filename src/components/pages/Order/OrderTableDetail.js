import Layout from "../../layouts";
import BreadCrumb from "../../layouts/BreadCrumb";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import config from "../../../config";
import Swal from "sweetalert2";

function OrderTableDetail() {

    const { id } = useParams();
    const navigate = useNavigate();
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
        return `#ODR${orderNumber.toString().padStart(3, '0')}`;
    };

    const orderTableCode = generateOrderCode(id);

    const [orderTableDetail, setOrderTableDetail] = useState({});

    const loadData = useCallback(async () => {
        try {
            const orderDetailRequest = await api.get(url.ORDER_TABLE.DETAIL.replace("{}", id), { headers: { Authorization: `Bearer ${getAccessToken()}` } });
            setOrderTableDetail(orderDetailRequest.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const handleAcceptOrder = async () => {
        try {
            const headers = {
                Authorization: `Bearer ${getAccessToken()}`,
                "Content-Type": "application/json",
            };
            const response = await api.put(url.ORDER_TABLE.EDIT.replace("{}", id), {}, { headers });

            if (response.status === 200) {
                Swal.fire({
                    text: "Order Accepted Successfully.",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Done",
                });
                setOrderTableDetail(response.data.data); 
                setTimeout(() => {
                    navigate(config.routes.order_table_list); //chuyển đến trang menu-list
                }, 3000);// Update the state with the new status
            }
        } catch (error) {
            Swal.fire({
                text: "Error! An error occurred. Please try again later!",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Done",
            });
        }
    };

    return (
        <Layout>
            <BreadCrumb title="Order Table Detail" />
            <section className="invoice printableArea">
                <div className="row invoice-info">
                    <div className="col-md-6 invoice-col">
                        <strong>From</strong>
                        <address>
                            <strong className="text-blue font-size-24">{orderTableDetail.name}</strong><br />
                            124 Lorem Ipsum, Suite 478, Dummuy, USA 123456<br />
                            <strong>Phone: +(84) {orderTableDetail.phone} &nbsp;&nbsp;&nbsp;&nbsp; Email: {orderTableDetail.email}</strong>
                        </address>
                    </div>
                    <div className="col-md-6 invoice-col text-right">
                        <strong>To</strong>
                        <address>
                            <strong className="text-blue font-size-24">RESTRAN</strong><br />
                            <strong className="d-inline">So 8 Ton That Thuyet, Ha Noi</strong><br />
                            <strong>Phone: +(84) 369825896 &nbsp;&nbsp;&nbsp;&nbsp; Email: restran@gmail.com</strong>
                        </address>
                    </div>
                    <div className="col-sm-12 invoice-col mb-15">
                        <div className="invoice-details row no-margin">
                            <div className="col-md-6 col-lg-3"><b>Order ID:</b> {orderTableCode}</div>
                            <div className="col-md-6 col-lg-3"><b>Payment Due:</b> {new Date(orderTableDetail.date).toLocaleDateString()}</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>Menu Order</th>
                                    <th className="text-right">Number of Person</th>
                                    <th className="text-right">Time</th>
                                    <th className="text-right">Status</th>
                                </tr>
                                <tr>
                                    <td>{orderTableDetail.menuName}</td>
                                    <td className="text-right">{orderTableDetail.numberOfPerson}</td>
                                    <td className="text-right">{orderTableDetail.time}</td>
                                    <td style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <span className={`badge badge-pill ${orderTableDetail.status === 'Paid' ? 'badge-success' : orderTableDetail.status === 'Pending' ? 'badge-warning' : 'badge-secondary'}`}>
                                            {orderTableDetail.status}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row no-print">
                    <div className="col-12">
                        <button type="button" className="btn btn-success pull-right" onClick={handleAcceptOrder}>
                            <i className="fa fa-credit-card"></i> Accept Order
                        </button>
                        <Link to={config.routes.order_table_list}>
                            <button type="button" className="btn btn-warning pull-right">
                                <i className="ti-close"></i> Back to List
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default OrderTableDetail;
