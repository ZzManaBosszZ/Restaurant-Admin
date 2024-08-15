import config from "../config/index";

import Home from "../components/pages/Dashboard";
import NotFound from "../components/pages/Other/NotFound";
import OrderList from "../components/pages/Order";
import OrderDetail from "../components/pages/Order/OrderDetail";
import MenuList from "../components/pages/Menu";
import AddMenu from "../components/pages/Menu/AddMenu";
import MenuCategory from "../components/pages/Menu/MenuCategories";
import FoodList from "../components/pages/Food/FoodList";
import FoodDetail from "../components/pages/Food/FoodDetail/FoodDetail";
import Login from "../components/pages/Auth/Login";
import ForgotPassword from "../components/pages/Auth/ForgotPassWord";
import FoodCreate from "../components/pages/Food/FoodCreate";
import FoodEdit from "../components/pages/Food/FoodEdit";
import MenuDetail from "../components/pages/Menu/MenuDetail";
import ResetPassword from "../components/pages/Auth/ResetPassword";

const privateRoutes = [
     // Dashboard routes
     { path: config.routes.home, component: Home, allowedRoles: ["ADMIN"] },

     //Blog routes

     
     { path: config.routes.error, component: NotFound },
 
     //Chef routes
     { path: config.routes.home, component: Home },
     { path: config.routes.error, component: NotFound },
 
     //Other pages
     { path: config.routes.error, component: NotFound },
 
     //Profile routes
 
 
     //Order routes
     { path: config.routes.order_list, component: OrderList },
     { path: config.routes.order_detail, component: OrderDetail },
 
     //Menu routes
     { path: config.routes.menu, component: MenuList },
     { path: config.routes.add_menu, component: AddMenu },
     { path: config.routes.menu_detail, component: MenuDetail },
     { path: config.routes.menu_category, component: MenuCategory },
 
     //Food routes
     { path: config.routes.food_list, component: FoodList },
     { path: config.routes.food_detail, component: FoodDetail },
     { path: config.routes.food_create, component: FoodCreate, allowedRoles: ["ADMIN"]},
     { path: config.routes.food_edit, component: FoodEdit },
];

const authenticationRoutes = [
    { path: config.routes.login, component: Login },
    // { path: config.routes.register, component: Register },
    { path: config.routes.forgot_password, component: ForgotPassword },
    { path: config.routes.reset_password, component: ResetPassword },
];

export { privateRoutes, authenticationRoutes };