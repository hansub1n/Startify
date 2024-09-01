import React, { useEffect, useState } from "react";
import { ProfileHeader } from "../components/profile/ProfileHeader";
import styled from "styled-components";
import Intro from "../components/profile/Intro";
import { ProfileContents } from "../components/profile/ProfileContents";
import supabase from "../supabaseClient";
import { useParams } from "react-router-dom";

const Profile = () => {
    // const [posts, setPosts] = useState([]);

    // const { userId } = useParams();

    // const { data: postData, error: postError } = await supabase
    //     .from("STARTIFY_DATA")
    //     .select("*")
    //     .eq("userId", "test1");
    // if (postError) {
    //     console.log(postError);
    // } else {
    //     console.log(postData);
    //     setPosts(postData);
    // }

    return (
        <>
            <Wrapper>
                <ProfileHeader />
                <ProfileContents />
            </Wrapper>
        </>
    );
};

export default Profile;

const Wrapper = styled.div`
    width: 100%;
`;
