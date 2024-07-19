import config from "../config/index";

import Home from "../components/pages/Home";
import NotFound from "../components/pages/Other/NotFound";
import OrderList from "../components/pages/Order";
import OrderDetail from "../components/pages/Order/OrderDetail";
const publicRoutes = [
    // Home routes
    { path: config.routes.home, component: Home },
    { path: config.routes.error, component: NotFound },

    // Authentication routes

    //Order routes
    { path: config.routes.order_list, component: OrderList },
    { path: config.routes.order_detail, component: OrderDetail },
];

const privateRoutes = [
    
];

const authenticationRoutes = [
    // { path: config.routes.login, component: Login },
    // { path: config.routes.register, component: Register },
    // { path: config.routes.forgot_password, component: ForgotPassword },
    // { path: config.routes.reset_password, component: ResetPassword },
];

export { publicRoutes, privateRoutes, authenticationRoutes };