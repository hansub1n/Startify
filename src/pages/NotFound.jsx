import React from "react";
import { Navigate } from "react-router-dom";

const NotFound = () => {
    return <Navigate to="/" replace={true} />;
};

export default NotFound;
