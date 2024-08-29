import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import LayoutHeader from "../components/layout/LayoutHeader";

const Layout = () => {
    return (
        <>
            <LayoutHeader />
            <Outlet />
            {/* <LayoutFooter>@copyright. 리액트도14경</LayoutFooter> */}
        </>
    );
};

export default Layout;

const LayoutFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
