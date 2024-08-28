import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import MyPage from "../pages/Mypage";
import Search from "../pages/Search";
import Form from "../pages/Form";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import ModifyProfile from "../pages/ModifyProfile";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail" element={<Detail />} />
				<Route path="/mypage" element={<MyPage />} />
				<Route path="/search" element={<Search />} />
				<Route path="/form" element={<Form />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/modify-profile" element={<ModifyProfile />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
