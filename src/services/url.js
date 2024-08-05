import config from "../config/index";

const url = {
    BASE_URL: config.key.BASE_API_URL,

    // Authentication
    AUTH: {
        LOGIN: "auth/user/sign-in",
        CHANGE_PASSWORD: "user/change-password",
        FORGOT_PASSWORD: "auth/user/forgot-password",
        RESET_PASSWORD: "auth/user/reset-password",
        PROFILE: "user/profile",
        UPDATE_PROFILE: "user/update-profile",
    },

};
export default url;