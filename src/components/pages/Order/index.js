import Layout from "../../layouts";
import BreadCrumb from "../../layouts/BreadCrumb";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import Swal from "sweetalert2";
import config from "../../../config";
import { Link } from "react-router-dom";
function OrderList() {

    const [order, setOrder] = useState([]);
    const [sortField, setSortField] = useState("id");
    const [sortDirection, setSortDirection] = useState("asc");

    //show list data
    useEffect(() => {
        const loadMenus = async () => {
            try {
                const response = await api.get(url.ORDER.LIST, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
                setOrder(response.data.data);
                // console.log(response.data.data);
            } catch (error) { }
        };
        loadMenus();
    }, []);

    //search, filter
    const [searchName, setSearchName] = useState("");
    // const [searchDescription, setSearchDescription] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const handleSearchNameChange = (e) => {
        setSearchName(e.target.value);
    };
    // const handleSearchDescriptionChange = (e) => {
    //     setSearchDescription(e.target.value);
    // };
    const handleCreatedDateChange = (e) => {
        setCreatedDate(e.target.value);
    };

    const handleSort = (field) => {
        const newDirection = sortField === field && sortDirection === "asc" ? "desc" : "asc";
        setSortField(field);
        setSortDirection(newDirection);
    };
    const sortedOrders = [...order]
        .filter((item) => {
            const nameMatch = item.name.toLowerCase().includes(searchName.toLowerCase());
            const createdDateMatch = createdDate ? new Date(item.createdDate) >= new Date(createdDate) : true;
            return nameMatch && createdDateMatch;
        })
        .sort((a, b) => {
            if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
            if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
            return 0;
        });

    //paginate
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1; // Number of items per page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedOrders = sortedOrders.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);

    return (
        <Layout>
            <BreadCrumb title="Order List" />
            <br />

            <div className="card-header">
                <div className="row page-titles">
                    <div className="col-lg-6">
                        <input
                            type="text"
                            className="form-control input-rounded"
                            placeholder="Search name Menu . . ."
                            value={searchName}
                            onChange={handleSearchNameChange}
                            style={{ fontSize: '15px', padding: '12px' }}
                        />
                    </div>
                    <div className="col-lg-6">
                        <input
                            type="date" // use type "datetime-local" for date and time
                            className="form-control input-rounded"
                            value={createdDate}
                            onChange={handleCreatedDateChange}
                            style={{ fontSize: '15px', padding: '12px' }}
                        />
                    </div>
                </div>

                <div className=" mt-3 px-3">
                    <div className="d-flex align-items-center justify-content-end gap-3">
                        <Link to={config.routes.menu_create} className="btn btn-primary d-flex align-items-center justify-content-center">
                            <i className="ti ti-plus"></i> Add New Menu
                        </Link>
                    </div>
                </div>
            </div>

            <br />
            <section class="content">
                <div class="row">
                    <div class="col-12">
                        <div class="box">
                            <div class="box-body">
                                <div class="table-responsive">
                                    <table id="" class="table table-hover no-wrap product-order" data-page-size="10">
                                        <thead>
                                            <tr>
                                                <th onClick={() => handleSort("name")}>Customer Name {sortField === "name" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("order_code")}>Order Code {sortField === "order_code" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("createdBy")}>Created By {sortField === "createdBy" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("total")}>Total {sortField === "total" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("createdDate")}>Created Date {sortField === "createdDate" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("status")}>Status {sortField === "status" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Maical Roy</td>
                                                <td>#12485791</td>
                                                <td>Product Title</td>
                                                <td>17</td>
                                                <td>24-01-2018</td>
                                                <td><span class="badge badge-pill badge-success">Paid</span></td>
                                                <td><a href="javascript:void(0)" class="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                                    <i class="ti-marker-alt"></i>
                                                </a>
                                                    <a href="javascript:void(0)" class="text-danger" data-original-title="Delete" data-toggle="tooltip">
                                                        <i class="ti-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Maical Roy</td>
                                                <td>#12485791</td>
                                                <td>Product Title</td>
                                                <td>12</td>
                                                <td>24-01-2018</td>
                                                <td><span class="badge badge-pill badge-warning">Pending</span></td>
                                                <td><a href="javascript:void(0)" class="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                                    <i class="ti-marker-alt"></i>
                                                </a>
                                                    <a href="javascript:void(0)" class="text-danger" data-original-title="Delete" data-toggle="tooltip">
                                                        <i class="ti-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Maical Roy</td>
                                                <td>#12485791</td>
                                                <td>Product Title</td>
                                                <td>15</td>
                                                <td>24-01-2018</td>
                                                <td><span class="badge badge-pill badge-success">Paid</span></td>
                                                <td><a href="javascript:void(0)" class="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                                    <i class="ti-marker-alt"></i>
                                                </a>
                                                    <a href="javascript:void(0)" class="text-danger" data-original-title="Delete" data-toggle="tooltip">
                                                        <i class="ti-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Maical Roy</td>
                                                <td>#12485791</td>
                                                <td>Product Title</td>
                                                <td>19</td>
                                                <td>24-01-2018</td>
                                                <td><span class="badge badge-pill badge-danger">Failed</span></td>
                                                <td><a href="javascript:void(0)" class="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                                    <i class="ti-marker-alt"></i>
                                                </a>
                                                    <a href="javascript:void(0)" class="text-danger" data-original-title="Delete" data-toggle="tooltip">
                                                        <i class="ti-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Maical Roy</td>
                                                <td>#12485791</td>
                                                <td>Product Title</td>
                                                <td>24</td>
                                                <td>24-01-2018</td>
                                                <td><span class="badge badge-pill badge-success">Pending</span></td>
                                                <td><a href="javascript:void(0)" class="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                                    <i class="ti-marker-alt"></i>
                                                </a>
                                                    <a href="javascript:void(0)" class="text-danger" data-original-title="Delete" data-toggle="tooltip">
                                                        <i class="ti-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Maical Roy</td>
                                                <td>#12485791</td>
                                                <td>Product Title</td>

                                                <td>04</td>
                                                <td>24-01-2018</td>
                                                <td><span class="badge badge-pill badge-danger">Failed</span></td>
                                                <td><a href="javascript:void(0)" class="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                                    <i class="ti-marker-alt"></i>
                                                </a>
                                                    <a href="javascript:void(0)" class="text-danger" data-original-title="Delete" data-toggle="tooltip">
                                                        <i class="ti-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Maical Roy</td>
                                                <td>#12485791</td>
                                                <td>Product Title</td>
                                                <td>10</td>
                                                <td>24-01-2018</td>
                                                <td><span class="badge badge-pill badge-success">Paid</span></td>
                                                <td><a href="javascript:void(0)" class="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                                    <i class="ti-marker-alt"></i>
                                                </a>
                                                    <a href="javascript:void(0)" class="text-danger" data-original-title="Delete" data-toggle="tooltip">
                                                        <i class="ti-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Maical Roy</td>
                                                <td>#12485791</td>
                                                <td>Product Title</td>
                                                <td>11</td>
                                                <td>24-01-2018</td>
                                                <td><span class="badge badge-pill badge-warning">Pending</span></td>
                                                <td><a href="javascript:void(0)" class="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                                    <i class="ti-marker-alt"></i>
                                                </a>
                                                    <a href="javascript:void(0)" class="text-danger" data-original-title="Delete" data-toggle="tooltip">
                                                        <i class="ti-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Maical Roy</td>
                                                <td>#12485791</td>
                                                <td>Product Title</td>
                                                <td>13</td>
                                                <td>24-01-2018</td>
                                                <td><span class="badge badge-pill badge-success">Paid</span></td>
                                                <td><a href="javascript:void(0)" class="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                                    <i class="ti-marker-alt"></i>
                                                </a>
                                                    <a href="javascript:void(0)" class="text-danger" data-original-title="Delete" data-toggle="tooltip">
                                                        <i class="ti-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Maical Roy</td>
                                                <td>#12485791</td>
                                                <td>Product Title</td>
                                                <td>34</td>
                                                <td>24-01-2018</td>
                                                <td><span class="badge badge-pill badge-warning">Pending</span></td>
                                                <td><a href="javascript:void(0)" class="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                                    <i class="ti-marker-alt"></i>
                                                </a>
                                                    <a href="javascript:void(0)" class="text-danger" data-original-title="Delete" data-toggle="tooltip">
                                                        <i class="ti-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Maical Roy</td>
                                                <td>#12485791</td>
                                                <td>Product Title</td>
                                                <td>22</td>
                                                <td>24-01-2018</td>
                                                <td><span class="badge badge-pill badge-danger">Failed</span></td>
                                                <td><a href="javascript:void(0)" class="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                                    <i class="ti-marker-alt"></i>
                                                </a>
                                                    <a href="javascript:void(0)" class="text-danger" data-original-title="Delete" data-toggle="tooltip">
                                                        <i class="ti-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Maical Roy</td>
                                                <td>#12485791</td>
                                                <td>Product Title</td>
                                                <td>12</td>
                                                <td>24-01-2018</td>
                                                <td><span class="badge badge-pill badge-warning">Pending</span></td>
                                                <td><a href="javascript:void(0)" class="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                                    <i class="ti-marker-alt"></i>
                                                </a>
                                                    <a href="javascript:void(0)" class="text-danger" data-original-title="Delete" data-toggle="tooltip">
                                                        <i class="ti-trash"></i>
                                                    </a>
                                                </td>
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

export default OrderList