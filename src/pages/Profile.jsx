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
    const [account, setAccount] = useState();
    const { userId } = useParams();

    useEffect(() => {
        const fetchAccountData = async () => {
            const { data, error } = await supabase
                .from("STARTIFY_USER")
                .select("userName, userIntro, profileImgUrl, user_id, userEmail")
                .eq("user_id", userId)
                .single();
            if (error) {
                console.log("accountError", error);
            }
            setAccount(data);
        };
        fetchAccountData();
    }, []);

    if (!account) {
        return <div>로딩중</div>;
    }

    return (
        <PostProvider>
            <Wrapper>
                <ProfileHeader account={account} />
                <ProfileContents account={account} />
            </Wrapper>
        </PostProvider>
    );
};

export default Profile;

const Wrapper = styled.div`
    width: 100%;
`;
