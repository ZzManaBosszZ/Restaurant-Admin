import Layout from "../../layouts";
import BreadCrumb from "../../layouts/BreadCrumb";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import Swal from "sweetalert2";
import config from "../../../config";
import { Link } from "react-router-dom";

function MenuList() {

    const [menu, setMenu] = useState([]);

    //show list data
    useEffect(() => {
        const loadMenus = async () => {
            try {
                const response = await api.get(url.MENU.LIST, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
                setMenu(response.data.data);
                // console.log(response.data.data);
            } catch (error) { }
        };
        loadMenus();
    }, []);

    //search, filter
    const [searchName, setSearchName] = useState("");
    const [searchDescription, setSearchDescription] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const handleSearchNameChange = (e) => {
        setSearchName(e.target.value);
    };
    const handleSearchDescriptionChange = (e) => {
        setSearchDescription(e.target.value);
    };
    const handleCreatedDateChange = (e) => {
        setCreatedDate(e.target.value);
    };
    const filteredMenus = menu.filter((item) => {
        const nameMatch = item.name.toLowerCase().includes(searchName.toLowerCase());
        const descriptionMatch = item.description.toLowerCase().includes(searchDescription.toLowerCase());
        const createdDateMatch = createdDate ? new Date(item.createdDate) >= new Date(createdDate) : true;
        return nameMatch && descriptionMatch && createdDateMatch;
    });

    // delete data
    const handleDeleteData = async (id) => {
        const selectedDataIds = [id];

        const isConfirmed = await Swal.fire({
            title: "Are you sure?",
            text: "You want to delete selected data?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "I'm sure",
        });
        if (isConfirmed.isConfirmed) {
            try {
                const deleteResponse = await api.delete(url.MENU.DELETE, {
                    headers: { Authorization: `Bearer ${getAccessToken()}` },
                    "Content-Type": "application/json",
                    data: selectedDataIds,
                });
                if (deleteResponse.status === 200) {
                    setMenu((prevData) => prevData.filter((data) => !selectedDataIds.includes(data.id)));
                    Swal.fire({
                        text: "Delete Menu Successfully.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                }
            } catch (error) {
                if (error.response.status === 400) {
                    Swal.fire({
                        text: "This Menu can't delete",
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                } else {
                    Swal.fire({
                        text: "An error occurred while deleting Menu",
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                }
            }
        }
    };

    //paginate
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1; // Number of items per page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(filteredMenus.length / itemsPerPage);
    const paginatedMenus = filteredMenus.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    return (
        <Layout>
            <BreadCrumb title="Menu List" />

            <div className="card-header">
                <div className="row page-titles">
                    <div className="col-lg-4">
                        <input
                            type="text"
                            className="form-control input-rounded"
                            placeholder="Search name Menu . . ."
                            value={searchName}
                            onChange={handleSearchNameChange}
                            style={{ fontSize: '15px', padding: '12px' }}
                        />
                    </div>
                    <div className="col-lg-4">
                        <input
                            type="text"
                            className="form-control input-rounded"
                            placeholder="Search description Menu . . ."
                            value={searchDescription}
                            onChange={handleSearchDescriptionChange}
                            style={{ fontSize: '15px', padding: '12px' }}
                        />
                    </div>
                    <div className="col-lg-4">
                        <input
                            type="datetime-local"
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

            <section class="content">
                <div class="row">
                {paginatedMenus.map((item, index) => {
                        return (
                    <div class="col-xxxl-3 col-xl-4 col-lg-6 col-12">
                        <div class="box food-box">
                            <div class="box-body text-center">
                                <div class="menu-item"><img src="../images/food/dish-1.png" class="img-fluid w-p75" alt="" /></div>
                                <div class="menu-details text-center">
                                    <h4 class="mt-20 mb-10">Kung Pao Tofu Recipe</h4>
                                    <p>Food/Noodle</p>
                                </div>
                                <div class="act-btn d-flex justify-content-between">
                                    <div class="text-center mx-5">
                                        <a href="#" class="waves-effect waves-circle btn btn-circle btn-success-light btn-xs mb-5"><i class="fa fa-eye-slash"></i></a>
                                        <small class="d-block">View</small>
                                    </div>
                                    <div class="text-center mx-5">
                                        <a href="#" class="waves-effect waves-circle btn btn-circle btn-danger-light btn-xs mb-5"><i class="fa fa-edit"></i></a>
                                        <small class="d-block">Edit</small>
                                    </div>
                                    <div class="text-center mx-5">
                                        <a href="#" class="waves-effect waves-circle btn btn-circle btn-primary-light btn-xs mb-5"><i class="fa fa-trash"></i></a>
                                        <small class="d-block">Delete</small>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                     );
                    })}
                </div>
                
            </section>

            {/* Pagination Controls */}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </Layout>

    );
}

export default MenuList;