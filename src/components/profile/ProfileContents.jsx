import React from "react";
import Intro from "./Intro";
import Created from "./Created";
import Liked from "./Liked";

export const ProfileContents = ({ account, paramView }) => {
    return (
        <div>
            {paramView === null && <Intro account={account} />}
            {paramView === "created" && <Created />}
            {paramView === "liked" && <Liked />}
        </div>
    );
};
