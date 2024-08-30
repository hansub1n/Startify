import React, { useEffect, useState } from "react";
import { ProfileHeader } from "../components/profile/ProfileHeader";
import styled from "styled-components";
import Intro from "../components/profile/Intro";
import { ProfileContents } from "../components/profile/ProfileContents";
import supabase from "../supabaseClient";

const Profile = () => {
    // TODO 초기값 null vs ""
    const [user, setUser] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const userData = async () => {
            const { data, error } = await supabase.from("STARTIFY_USER").select("*").eq("userId", "test1").single();
            if (error) {
                console.log(error);
            } else {
                console.log(data);
                setUser(data);
            }
            const { data: postData, error: postError } = await supabase
                .from("STARTIFY_DATA")
                .select("*")
                .eq("account_id", 4);
            if (postError) {
                console.log(postError);
            } else {
                console.log(postData);
                setPosts(postData);
            }
        };
        userData();
    }, []);

    return (
        <Wrapper>
            <ProfileHeader user={user} />
            <ProfileContents user={user} posts={posts} />
        </Wrapper>
    );
};

export default Profile;

const Wrapper = styled.div`
    width: 100%;
`;
