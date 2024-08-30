import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Form from "../pages/Form";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import ModifyProfile from "../pages/ModifyProfile";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail" element={<Detail />} />
                    <Route path="/profile/:userId" element={<Profile />} />
                    <Route path="/profile/:userId/*" element={<Profile />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/modify-profile" element={<ModifyProfile />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
