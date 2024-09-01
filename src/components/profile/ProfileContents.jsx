import React from "react";
import Intro from "./Intro";
import Created from "./Created";
import Liked from "./Liked";
import { Route, Routes } from "react-router-dom";

export const ProfileContents = () => {
    return (
        <Routes>
            {/* path는 사용하고 싶은 주소
            element는 이동했을때 보여주고자 하는 컴포넌트 */}
            <Route path="/" element={<Intro />} />
            <Route path="created" element={<Created />} />
            <Route path="liked" element={<Liked />} />
        </Routes>
    );
};
