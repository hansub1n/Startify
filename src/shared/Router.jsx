import React, { useContext } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Form from "../pages/Form";
import Login from "../pages/Login";
import ModifyProfile from "../pages/ModifyProfile";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import { MusicProvider } from "../context/MusicContext";
import SearchedMusicProvider from "../context/SearchedMusicContext";
import SignUp from "../pages/SignUp";
import { UserContext } from "../context/UserContext";

const AuthRoute = () => {
    const { user } = useContext(UserContext);

    if (user) {
        alert("이미 로그인 되어있습니다. 메인으로 이동합니다. 🥺");
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

const PrivateRoute = () => {
    const { user } = useContext(UserContext);
    if (!user) {
        alert("로그인이 필요한 페이지입니다. 로그인 해주세요. 🥺");
        return <Navigate to="/login" />;
    }
    return <Outlet />;
};

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Layout />}>
                    <Route
                        path="/"
                        element={
                            <MusicProvider>
                                <Home />
                            </MusicProvider>
                        }
                    />
                    <Route
                        path="/search"
                        element={
                            <SearchedMusicProvider>
                                <Search />
                            </SearchedMusicProvider>
                        }
                    />
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
