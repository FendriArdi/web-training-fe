import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const ProtectedAdminRoute = ({ children }) => {
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);

    const checkIsAdmin = () => {
        const userRole = localStorage.getItem("role");
        if (userRole !== "admin" || !userRole || userRole === undefined) {
            setIsAdmin(false);
            return navigate("/riwayat-pengajuan");
        }
        setIsAdmin(true);
    };

    useEffect(() => {
        checkIsAdmin();
    }, [isAdmin]);

    return <React.Fragment>{isAdmin ? children : null}</React.Fragment>;
};

ProtectedAdminRoute.propTypes = {
    children: PropTypes.element,
};
