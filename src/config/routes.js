const routes = {
    // Home routes
    home: "/",
    error: "/error",

    // Authentication routes
    profile: "/profile",
    login: "/login",
    forgot_password: "/forgot-password",
    reset_password: "/reset-password/:resetToken",
    // reset_password: "/reset-password",

    //Order routes
    order_list: "/order-list",
    order_detail: "/order-detail",

    //Menu routes
    menu: "/menu",
    add_menu: "/add-menu",
    menu_category: "/menu-category",
    menu_detail: "/menu-detail",

    //Food routes
    food_list: "/food-list",
    food_detail: "/food-detail",
    food_create: "/food-create",
    food_edit: "/food-edit/:id",

    //Chef routes

    //Blog routes

    //Profile routes
};
export default routes;