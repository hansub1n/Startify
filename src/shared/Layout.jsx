import React from "react";
import { Outlet } from "react-router-dom";
import LayoutHeader from "../components/layout/LayoutHeader";

const Layout = () => {
    return (
        <>
            <LayoutHeader />
            <Outlet />
        </>
    );
};

export default Layout;
