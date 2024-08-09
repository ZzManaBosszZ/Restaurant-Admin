import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDecodedToken } from "../utils/auth";

const useCheckRole = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const decodeToken = getDecodedToken();
        let accountRole = "";

        if (decodeToken && decodeToken.Role && decodeToken.Role.length > 0 && decodeToken.Role[0].authority) {
            accountRole = decodeToken.Role[0].authority;
        } else {
            console.error("Role not found in token");
        }

        let redirectUrl = "";

        if (accountRole === "ADMIN" || accountRole === "") {
            redirectUrl = "/";
        } else if (accountRole === "") {
            redirectUrl = "/dashboard-";
        } else if (accountRole === "") {
            redirectUrl = "/dashboard-";
        }

        navigate(redirectUrl);
    }, [navigate]);
};

export default useCheckRole;