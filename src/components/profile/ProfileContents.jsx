import React from "react";
import Intro from "./Intro";
import Created from "./Created";
import Liked from "./Liked";
import { Route, Routes, useParams, useSearchParams } from "react-router-dom";

export const ProfileContents = ({ account, paramView }) => {
    console.log("paramView", paramView);
    return (
        // <Routes>
        //     {/* path는 사용하고 싶은 주소
        //     element는 이동했을때 보여주고자 하는 컴포넌트 */}
        //     <Route path="/" element={<Intro account={account} />} />
        //     <Route path="created" element={paramView === "created" ? <Created /> : null} />
        //     <Route path="liked" element={paramView === "liked" ? <Liked /> : null} />
        // </Routes>
        <div>
            {paramView === null && <Intro account={account} />}
            {paramView === "created" && <Created />}
            {paramView === "liked" && <Liked />}
        </div>
    );
};
