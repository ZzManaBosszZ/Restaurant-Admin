import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { getAccessToken } from "../../utils/auth";
import config from "../../config";
function Header() {
    const [profile, setProfile] = useState([]);

    //show list data
    useEffect(() => {
        const loadProfile = async () => {
            try {
                const response = await api.get(url.AUTH.PROFILE, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
                setProfile(response.data.data);
                // console.log(response.data.data);
            } catch (error) { }
        };
        loadProfile();
    }, []);
    return (
        <header className="main-header">
            <div className="d-flex align-items-center logo-box justify-content-start">
                <a href="" className="waves-effect waves-light nav-link d-none d-md-inline-block mx-10 push-btn bg-transparent hover-primary" data-toggle="push-menu" role="button">
                    <span className="icon-Align-left"><span className="path1"></span><span className="path2"></span><span className="path3"></span></span>
                </a>
                <a href="" className="logo">
                    <div className="logo-lg">
                        <span className="light-logo"><img src="../images/logo-dark-text.png" alt="logo" /></span>
                        <span className="dark-logo"><img src="../images/logo-light-text.png" alt="logo" /></span>
                    </div>
                </a>
            </div>
            <nav className="navbar navbar-static-top">
                <div className="app-menu">
                    <ul className="header-megamenu nav">
                        <li className="btn-group nav-item d-md-none">
                            <a href="#" className="waves-effect waves-light nav-link push-btn btn-info-light" data-toggle="push-menu" role="button">
                                <span className="icon-Align-left"><span className="path1"></span><span className="path2"></span><span className="path3"></span></span>
                            </a>
                        </li>
                        <li className="btn-group nav-item d-none d-xl-inline-block">
                            <div className="app-menu">
                                <div className="search-bx mx-5">
                                    <form>
                                        <div className="input-group">
                                            <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn" type="submit" id="button-addon3"><i className="ti-search"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="navbar-custom-menu r-side">
                    <ul className="nav navbar-nav">
                        <li className="btn-group nav-item d-lg-inline-flex d-none">
                            <a href="#" data-provide="fullscreen" className="waves-effect waves-light nav-link full-screen btn-info-light" title="Full Screen">
                                <i className="icon-Expand-arrows"><span className="path1"></span><span className="path2"></span></i>
                            </a>
                        </li>
                        <li className="dropdown notifications-menu">
                            <span className="label label-danger">5</span>
                            <a href="#" className="waves-effect waves-light dropdown-toggle btn-danger-light" data-toggle="dropdown" title="Notifications">
                                <i className="icon-Notifications"><span className="path1"></span><span className="path2"></span></i>
                            </a>
                            <ul className="dropdown-menu animated bounceIn">

                                <li className="header">
                                    <div className="p-20">
                                        <div className="flexbox">
                                            <div>
                                                <h4 className="mb-0 mt-0">Notifications</h4>
                                            </div>
                                            <div>
                                                <a href="#" className="text-danger">Clear All</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <ul className="menu sm-scrol">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit blandit.
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-warning text-warning"></i> Duis malesuada justo eu sapien elementum, in semper diam posuere.
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-users text-danger"></i> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-shopping-cart text-success"></i> In gravida mauris et nisi
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-user text-danger"></i> Praesent eu lacus in libero dictum fermentum.
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-user text-primary"></i> Nunc fringilla lorem
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-user text-success"></i> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer">
                                    <a href="#">View all</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown messages-menu">
                            <span className="label label-danger">5</span>
                            <a href="#" className="dropdown-toggle btn-danger-light" data-toggle="dropdown" title="Messages">
                                <i className="icon-Incoming-mail"><span className="path1"></span><span className="path2"></span></i>
                            </a>
                            <ul className="dropdown-menu animated bounceIn">

                                <li className="header">
                                    <div className="p-20">
                                        <div className="flexbox">
                                            <div>
                                                <h4 className="mb-0 mt-0">Messages</h4>
                                            </div>
                                            <div>
                                                <a href="#" className="text-danger">Clear All</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <ul className="menu sm-scrol">
                                        <a href="#">
                                            <div className="pull-left">
                                                <img src="../images/user2-160x160.jpg" className="rounded-circle" alt="User Image" />
                                            </div>
                                            <div className="mail-contnet">
                                                <h4>
                                                    Lorem Ipsum
                                                    <small><i className="fa fa-clock-o"></i> 15 mins</small>
                                                </h4>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                            </div>
                                        </a>

                                        <li>
                                            <a href="#">
                                                <div className="pull-left">
                                                    <img src="../images/user3-128x128.jpg" className="rounded-circle" alt="User Image" />
                                                </div>
                                                <div className="mail-contnet">
                                                    <h4>
                                                        Nullam tempor
                                                        <small><i className="fa fa-clock-o"></i> 4 hours</small>
                                                    </h4>
                                                    <span>Curabitur facilisis erat quis metus congue viverra.</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="pull-left">
                                                    <img src="../images/user4-128x128.jpg" className="rounded-circle" alt="User Image" />
                                                </div>
                                                <div className="mail-contnet">
                                                    <h4>
                                                        Proin venenatis
                                                        <small><i className="fa fa-clock-o"></i> Today</small>
                                                    </h4>
                                                    <span>Vestibulum nec ligula nec quam sodales rutrum sed luctus.</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="pull-left">
                                                    <img src="../images/user3-128x128.jpg" className="rounded-circle" alt="User Image" />
                                                </div>
                                                <div className="mail-contnet">
                                                    <h4>
                                                        Praesent suscipit
                                                        <small><i className="fa fa-clock-o"></i> Yesterday</small>
                                                    </h4>
                                                    <span>Curabitur quis risus aliquet, luctus arcu nec, venenatis neque.</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="pull-left">
                                                    <img src="../images/user4-128x128.jpg" className="rounded-circle" alt="User Image" />
                                                </div>
                                                <div className="mail-contnet">
                                                    <h4>
                                                        Donec tempor
                                                        <small><i className="fa fa-clock-o"></i> 2 days</small>
                                                    </h4>
                                                    <span>Praesent vitae tellus eget nibh lacinia pretium.</span>
                                                </div>

                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer">
                                    <a href="#">See all e-Mails</a>
                                </li>
                            </ul>
                        </li>
                        {/* <li className="btn-group nav-item">
                            <span className="label label-primary">5</span>
                            <a href="#" data-toggle="control-sidebar" title="Setting" className="waves-effect waves-light nav-link full-screen btn-primary-light">
                                <i className="icon-Settings-2"></i>
                            </a>
                        </li> */}
                        <li className="btn-group nav-item d-xl-none d-inline-flex">
                            <a href="#" className="push-btn right-bar-btn waves-effect waves-light nav-link full-screen btn-info-light">
                                <span className="icon-Layout-left-panel-1"><span className="path1"></span><span className="path2"></span></span>
                            </a>
                        </li>
                        <li className="dropdown user user-menu">
                            <a href="#" className="dropdown-toggle p-0 text-dark hover-primary ml-md-30 ml-10" data-toggle="dropdown" title="User">
                                <span className="pl-30 d-md-inline-block d-none">Hello,</span> <strong className="d-md-inline-block d-none">{profile.fullName}</strong><img src="../images/avatar/avatar-15.png" className="user-image rounded-circle avatar bg-white mx-10" alt="User Image" />
                            </a>
                            <ul className="dropdown-menu animated flipInX">
                                <li className="user-body">
                                    <a className="dropdown-item" href="#"><i className="ti-wallet text-muted mr-2"></i> My Wallet</a>
                                    <a className="dropdown-item" href={config.routes.profile}><i className="ti-settings text-muted mr-2"></i> Settings</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#"><i className="ti-lock text-muted mr-2"></i> Logout</a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </nav >
        </header >
    );
}
export default Header;