import { useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";

function TotalOrderCancel() {
    const [orders, setOrders] = useState([]);

    const loadData = async () => {
        try {
            const orderResponse = await api.get(url.DASHBOARD.TOTAL_ORDER_CANCEL, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
            setOrders(orderResponse.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="col-xxxl-3 col-lg-6 col-12">
            <div className="box">
                <div className="box-body">
                    <div className="d-flex align-items-start">
                        <div>
                            <img src="../images/food/online-order-3.png" className="w-80 mr-20" alt="" />
                        </div>
                        <div>
                            <h2 className="my-0 font-weight-700">{orders.cancelledOrders}</h2>
                            <p className="text-fade mb-0">Total Canceled</p>
                            <p className="font-size-12 mb-0 text-primary"><span className="badge badge-pill badge-primary-light mr-5"><i className="fa fa-arrow-down"></i></span>2% (15 Days)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalOrderCancel;