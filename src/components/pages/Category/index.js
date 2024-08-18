import Layout from "../../layouts";
import BreadCrumb from "../../layouts/BreadCrumb";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import config from "../../../config";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";

function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const [sortField, setSortField] = useState("id");
    const [sortDirection, setSortDirection] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1; // Number of items per page

    useEffect(() => {
        const loadFoods = async () => {
            try {
                const response = await api.get(url.CATEGORY.LIST, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
                setCategories(response.data.data);
            } catch (error) { }
        };
        loadFoods();
    }, []);

    const handleSearchNameChange = (e) => {
        setSearchName(e.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    const handleCreatedDateChange = (e) => {
        setCreatedDate(e.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    const handleSort = (field) => {
        const newDirection = sortField === field && sortDirection === "asc" ? "desc" : "asc";
        setSortField(field);
        setSortDirection(newDirection);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const sortedCategories = [...categories]
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

    const paginatedCategories = sortedCategories.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(sortedCategories.length / itemsPerPage);

    return (
        <Layout>
            <BreadCrumb title="Category List" />
            <div className="card-header">
                <div className="row page-titles">
                    <div className="col-lg-6">
                        <input
                            type="text"
                            className="form-control input-rounded"
                            placeholder="Search name Category . . ."
                            value={searchName}
                            onChange={handleSearchNameChange}
                            style={{ fontSize: '15px', padding: '12px' }}
                        />
                    </div>
                    <div className="col-lg-6">
                        <input
                            type="datetime-local"
                            className="form-control input-rounded"
                            value={createdDate}
                            onChange={handleCreatedDateChange}
                            style={{ fontSize: '15px', padding: '12px' }}
                        />
                    </div>
                </div>

                <div className="mt-3 px-3">
                    <div className="d-flex align-items-center justify-content-end gap-3">
                        <Link to={config.routes.category_create} className="btn btn-primary d-flex align-items-center justify-content-center">
                            <i className="ti ti-plus"></i> Add New Category
                        </Link>
                    </div>
                </div>
            </div>

            <div className="box-body">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead className="bg-info">
                            <tr>
                                <th onClick={() => handleSort("id")}>ID {sortField === "id" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                <th onClick={() => handleSort("name")}>Name {sortField === "name" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                <th onClick={() => handleSort("createdBy")}>Created By {sortField === "createdBy" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedCategories.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.createdBy}</td>
                                    <td>New York</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

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
            </div>
        </Layout>
    );
}

export default CategoryList;
