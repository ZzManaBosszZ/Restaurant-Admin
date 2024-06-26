import config from "../config/index";

import Home from "../components/pages/Home";
import NotFound from "../components/pages/Other/NotFound";

const publicRoutes = [
    // Home routes
    { path: config.routes.home, component: Home },
    { path: config.routes.error, component: NotFound },
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