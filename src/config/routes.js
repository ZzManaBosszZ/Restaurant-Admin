import { ca } from "date-fns/locale";

const routes = {
    // Home routes
    home: "/",
    error: "/error",

    // Authentication routes
    profile: "/profile",
    login: "/login",
    forgot_password: "/forgot-password",
    reset_password: "/reset-password/:resetToken",

    //Order routes
    order_list: "/order-list",
    order_detail: "/order-detail",

    //Menu routes
    menu: "/menu",
    menu_create: "/add-menu",
    menu_category: "/menu-category",
    menu_detail: "/menu-detail/:id",

    //Food routes
    food_list: "/food-list",
    food_detail: "/food-detail/:id",
    food_create: "/food-create",
    food_edit: "/food-edit/:id",

    //Category routes
    category_list: "/category-list",
    category_create: "/category-create",

    //Blog routes

    //Profile routes
};
export default routes;