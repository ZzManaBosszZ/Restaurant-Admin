import Loading from "./Loading"
import Header from "./Header"
import Footer from "./Footer";
import SideBar from "./SideBar";
import RightSideBar from "./RightSideBar";
function Layout({ children }) {
    return (
        <body className="hold-transition dark-skin sidebar-mini theme-danger fixed sidebar-collapse">
        <div className="wrapper">
            <Header />
            <SideBar />
            <div class="content-wrapper">
                <div class="container-full">
                    {children}
                </div>
            </div>
            <RightSideBar/>
            <Footer />
        </div>
        </body>
    );
}

export default Layout;