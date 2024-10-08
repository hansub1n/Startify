import React, { useContext, useEffect, useState } from "react";
import { ProfileHeader } from "../components/profile/ProfileHeader";
import styled from "styled-components";
import Intro from "../components/profile/Intro";
import { ProfileContents } from "../components/profile/ProfileContents";
import supabase from "../supabaseClient";
import { useParams, useSearchParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import PostProvider from "../context/PostContext";

const Profile = () => {
    const { user } = useContext(UserContext);
    const [account, setAccount] = useState();
    const [searchParams] = useSearchParams();
    const paramId = searchParams.get("id");
    const paramView = searchParams.get("view");

    useEffect(() => {
        const fetchAccountData = async () => {
            const { data, error } = await supabase
                .from("STARTIFY_USER")
                .select("id, userName, userIntro, profileImgUrl, user_id, userEmail")
                .eq("user_id", user.id)
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
                <ProfileHeader account={account} paramId={paramId} paramView={paramView} />
                <ProfileContents account={account} paramView={paramView} />
            </Wrapper>
        </PostProvider>
    );
};

export default Profile;

const Wrapper = styled.div`
    width: 100%;
    font-family: "SUITE-Regular";
`;
