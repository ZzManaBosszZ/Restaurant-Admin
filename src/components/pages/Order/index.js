import React from 'react'
import Layout from '../../layouts'
import BreadCrumb from '../../layouts/BreadCrumb'
function OrderList() {
    return (
        <Layout>
            <BreadCrumb />
            <section class="content">
                <div class="row">
                    <div class="col-12">
                        <div class="box">
                            <div class="box-body px-0">
                                <div class="table-responsive rounded card-table">
                                    <table class="table border-no" id="example1">
                                        <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Date</th>
                                                <th>Customer Name</th>
                                                <th>Location</th>
                                                <th>Amount</th>
                                                <th>Status Order</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="hover-primary">
                                                <td>#245879</td>
                                                <td>14 April 2021,<span class="font-size-12"> 03:13 AM</span></td>
                                                <td>Aaliyah clark</td>
                                                <td>1623 E Updahl Ct, Harrison, ID, 83833</td>
                                                <td>$124.6</td>
                                                <td>
                                                    <span class="badge badge-pill badge-primary-light">Delivery</span>
                                                </td>
                                                <td>
                                                    <div class="btn-group">
                                                        <a class="hover-primary dropdown-toggle no-caret" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></a>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#">Accept Order</a>
                                                            <a class="dropdown-item" href="#">Reject Order</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="hover-primary">
                                                <td>#245880</td>
                                                <td>25 April 2021,<span class="font-size-12"> 11:22 AM</span></td>
                                                <td>Boone Doe</td>
                                                <td>261 Poplar Ave, Devon, PA, 19333</td>
                                                <td>$74.99</td>
                                                <td>
                                                    <span class="badge badge-pill badge-danger-light">New Order</span>
                                                </td>
                                                <td>
                                                    <div class="btn-group">
                                                        <a class="hover-primary dropdown-toggle no-caret" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></a>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#">Accept Order</a>
                                                            <a class="dropdown-item" href="#">Reject Order</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="hover-primary">
                                                <td>#245881</td>
                                                <td>25 April 2021,<span class="font-size-12"> 11:52 AM</span></td>
                                                <td>Carlie Paton</td>
                                                <td>8959 State 405 Rte, Maceo, KY, 42355</td>
                                                <td>$66.21</td>
                                                <td>
                                                    <span class="badge badge-pill badge-primary-light">Delivery</span>
                                                </td>
                                                <td>
                                                    <div class="btn-group">
                                                        <a class="hover-primary dropdown-toggle no-caret" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></a>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#">Accept Order</a>
                                                            <a class="dropdown-item" href="#">Reject Order</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="hover-primary">
                                                <td>#245882</td>
                                                <td>27 April 2021,<span class="font-size-12"> 02:25 PM</span></td>
                                                <td>Delilah</td>
                                                <td>4480 Ka Haku Rd, Princeville, HI, 96722 </td>
                                                <td>$89.32</td>
                                                <td>
                                                    <span class="badge badge-pill badge-danger-light">New Order</span>
                                                </td>
                                                <td>
                                                    <div class="btn-group">
                                                        <a class="hover-primary dropdown-toggle no-caret" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></a>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#">Accept Order</a>
                                                            <a class="dropdown-item" href="#">Reject Order</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="hover-primary">
                                                <td>#245883</td>
                                                <td>27 April 2021,<span class="font-size-12"> 02:30 PM</span></td>
                                                <td>Hannah Doe</td>
                                                <td>128 Mclemore Rd, Taft, TN, 38488</td>
                                                <td>$85.2</td>
                                                <td>
                                                    <span class="badge badge-pill badge-primary-light">Delivery</span>
                                                </td>
                                                <td>
                                                    <div class="btn-group">
                                                        <a class="hover-primary dropdown-toggle no-caret" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></a>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#">Accept Order</a>
                                                            <a class="dropdown-item" href="#">Reject Order</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="hover-primary">
                                                <td>#245884</td>
                                                <td>27 April 2021,<span class="font-size-12"> 12:42 AM</span></td>
                                                <td>Emerson Clark</td>
                                                <td>505 E 14th St, Scotland Neck, NC, 27874</td>
                                                <td>$18.5</td>
                                                <td>
                                                    <span class="badge badge-pill badge-primary-light">Delivery</span>
                                                </td>
                                                <td>
                                                    <div class="btn-group">
                                                        <a class="hover-primary dropdown-toggle no-caret" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></a>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#">Accept Order</a>
                                                            <a class="dropdown-item" href="#">Reject Order</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="hover-primary">
                                                <td>#245885</td>
                                                <td>27 April 2021,<span class="font-size-12"> 12:32 AM</span></td>
                                                <td>Crystal Doe</td>
                                                <td>312 S Judd St, Sioux City, IA, 51103</td>
                                                <td>$125.2</td>
                                                <td>
                                                    <span class="badge badge-pill badge-primary-light">Delivery</span>
                                                </td>
                                                <td>
                                                    <div class="btn-group">
                                                        <a class="hover-primary dropdown-toggle no-caret" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></a>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#">Accept Order</a>
                                                            <a class="dropdown-item" href="#">Reject Order</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="hover-primary">
                                                <td>#245886</td>
                                                <td>29 April 2021,<span class="font-size-12"> 11:12 AM</span></td>
                                                <td>Jenny don</td>
                                                <td>4381 Rutledge Pike, Rutledge, TN, 37861</td>
                                                <td>$39.25</td>
                                                <td>
                                                    <span class="badge badge-pill badge-warning-light">On Delivery</span>
                                                </td>
                                                <td>
                                                    <div class="btn-group">
                                                        <a class="hover-primary dropdown-toggle no-caret" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></a>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#">Accept Order</a>
                                                            <a class="dropdown-item" href="#">Reject Order</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="hover-primary">
                                                <td>#245887</td>
                                                <td>29 April 2021,<span class="font-size-12"> 10:35 AM</span></td>
                                                <td>Joanne Clark</td>
                                                <td>Po Box 232, Bimble, KY, 40915</td>
                                                <td>$55.2</td>
                                                <td>
                                                    <span class="badge badge-pill badge-warning-light">On Delivery</span>
                                                </td>
                                                <td>
                                                    <div class="btn-group">
                                                        <a class="hover-primary dropdown-toggle no-caret" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></a>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#">Accept Order</a>
                                                            <a class="dropdown-item" href="#">Reject Order</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="hover-primary">
                                                <td>#245888</td>
                                                <td>30 April 2021,<span class="font-size-12"> 10:42 AM</span></td>
                                                <td>Madeline doe</td>
                                                <td>146 Patterson Dr, Hayneville, AL, 36040</td>
                                                <td>$24.55</td>
                                                <td>
                                                    <span class="badge badge-pill badge-warning-light">On Delivery</span>
                                                </td>
                                                <td>
                                                    <div class="btn-group">
                                                        <a class="hover-primary dropdown-toggle no-caret" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></a>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#">Accept Order</a>
                                                            <a class="dropdown-item" href="#">Reject Order</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="hover-primary">
                                                <td>#245889</td>
                                                <td>30 April 2020,<span class="font-size-12"> 11:12 AM</span></td>
                                                <td>Melinda</td>
                                                <td>143 Portsmouth Cir, Glen Mills, PA, 19342</td>
                                                <td>$78.5</td>
                                                <td>
                                                    <span class="badge badge-pill badge-warning-light">On Delivery</span>
                                                </td>
                                                <td>
                                                    <div class="btn-group">
                                                        <a class="hover-primary dropdown-toggle no-caret" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></a>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#">Accept Order</a>
                                                            <a class="dropdown-item" href="#">Reject Order</a>
                                                        </div>
                                                    </div>
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