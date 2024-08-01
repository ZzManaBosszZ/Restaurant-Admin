import config from "../config/index";

import Home from "../components/pages/Home";
import NotFound from "../components/pages/Other/NotFound";
import OrderList from "../components/pages/Order";
import OrderDetail from "../components/pages/Order/OrderDetail";
import MenuList from "../components/pages/Menu";
import AddMenu from "../components/pages/Menu/AddMenu";
import MenuCategory from "../components/pages/Menu/MenuCategories";
import ProductList from "../components/pages/Food";
import FoodDetail from "../components/pages/Food/FoodDetail/FoodDetail";
const publicRoutes = [
    // Home routes
    { path: config.routes.home, component: Home },
    { path: config.routes.error, component: NotFound },

    // Authentication routes

    //Order routes
    { path: config.routes.order_list, component: OrderList },
    { path: config.routes.order_detail, component: OrderDetail },

    //Menu routes
    { path: config.routes.menu, component: MenuList },
    { path: config.routes.add_menu, component: AddMenu },
    { path: config.routes.menu_category, component: MenuCategory },

    //Product routes
    { path: config.routes.food_list, component: ProductList },
    { path: config.routes.food_detail, component: FoodDetail },
    { path: config.routes.menu_category, component: MenuCategory },
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