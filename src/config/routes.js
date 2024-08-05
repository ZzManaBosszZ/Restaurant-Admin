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
    add_menu: "/add-menu",
    menu_category: "/menu-category",

    //Food routes
    food_list: "/food-list",
    food_detail: "/food-detail",
    food_category: "/food-categories",
};
export default routes;