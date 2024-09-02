import React, { useContext, useEffect, useState } from "react";
import { ProfileHeader } from "../components/profile/ProfileHeader";
import styled from "styled-components";
import Intro from "../components/profile/Intro";
import { ProfileContents } from "../components/profile/ProfileContents";
import supabase from "../supabaseClient";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import PostProvider from "../context/PostContext";

const Profile = () => {
    const { user, account } = useContext(UserContext);

    if (!user || !account) {
        return <div>로딩중</div>;
    }

    return (
        <PostProvider>
            <Wrapper>
                <ProfileHeader />
                <ProfileContents />
            </Wrapper>
        </PostProvider>
    );
};

export default Profile;

const Wrapper = styled.div`
    width: 100%;
`;
