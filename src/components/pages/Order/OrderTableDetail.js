import Layout from "../../layouts";
import BreadCrumb from "../../layouts/BreadCrumb";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
function OrderTableDetail() {

    const { id } = useParams();

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
    return (
        <Layout>
            <BreadCrumb title="Order Table Detail"/>
            <section class="invoice printableArea">
                <div class="row invoice-info">
                    <div class="col-md-6 invoice-col">
                        <strong>From</strong>
                        <address>
                            <strong class="text-blue font-size-24">RESTRAN</strong><br />
                            <strong class="d-inline">So 8 Ton That Thuyet</strong><br />
                            <strong>Phone: +(84) 369825896 &nbsp;&nbsp;&nbsp;&nbsp; Email: restran@gmail.com</strong>
                        </address>
                    </div>
                    <div class="col-md-6 invoice-col text-right">
                        <strong>To</strong>
                        <address>
                            <strong class="text-blue font-size-24">Doe Shina</strong><br />
                            124 Lorem Ipsum, Suite 478, Dummuy, USA 123456<br />
                            <strong>Phone: +(84) {orderTableDetail.phone} &nbsp;&nbsp;&nbsp;&nbsp; Email: {orderTableDetail.email}</strong>
                        </address>
                    </div>
                    <div class="col-sm-12 invoice-col mb-15">
                        <div class="invoice-details row no-margin">
                            <div class="col-md-6 col-lg-3"><b>Invoice </b>#0154879</div>
                            <div class="col-md-6 col-lg-3"><b>Order ID:</b> FC12548</div>
                            <div class="col-md-6 col-lg-3"><b>Payment Due:</b> 14/08/2018</div>
                            <div class="col-md-6 col-lg-3"><b>Account:</b> 00215487541296</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 table-responsive">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>Description</th>
                                    <th>Serial #</th>
                                    <th class="text-right">Quantity</th>
                                    <th class="text-right">Unit Cost</th>
                                    <th class="text-right">Subtotal</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Milk Powder</td>
                                    <td>12345678912514</td>
                                    <td class="text-right">2</td>
                                    <td class="text-right">$26.00</td>
                                    <td class="text-right">$52.00</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Air Conditioner</td>
                                    <td>12345678912514</td>
                                    <td class="text-right">1</td>
                                    <td class="text-right">$1500.00</td>
                                    <td class="text-right">$1500.00</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>TV</td>
                                    <td>12345678912514</td>
                                    <td class="text-right">2</td>
                                    <td class="text-right">$540.00</td>
                                    <td class="text-right">$1080.00</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Mobile</td>
                                    <td>12345678912514</td>
                                    <td class="text-right">3</td>
                                    <td class="text-right">$320.00</td>
                                    <td class="text-right">$960.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row no-print">
                    <div class="col-12">
                        <button type="button" class="btn btn-success pull-right"><i class="fa fa-credit-card"></i> Accept Order 
                        </button>
                        <button type="button" class="btn btn-warning pull-right"><i class="ti-close"></i> Back to List
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default OrderTableDetail