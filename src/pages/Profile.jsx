import React, { useEffect, useState } from "react";
import { ProfileHeader } from "../components/profile/ProfileHeader";
import styled from "styled-components";
import Intro from "../components/profile/Intro";
import { ProfileContents } from "../components/profile/ProfileContents";
import supabase from "../supabaseClient";

const Profile = () => {
    // TODO 초기값 null vs ""
    const [user, setUser] = useState("");

    useEffect(() => {
        const userData = async () => {
            const { data, error } = await supabase.from("STARTIFY_USER").select("*").eq("userId", "test1").single();
            if (error) {
                console.log(error);
            } else {
                console.log(data);
                setUser(data);
            }
        };
        userData();
    }, []);

    return (
        <Wrapper>
            <ProfileHeader user={user} />
            <ProfileContents user={user} />
        </Wrapper>
    );
};

export default Profile;

const Wrapper = styled.div`
    width: 100%;
`;
