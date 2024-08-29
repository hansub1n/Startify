import React from "react";
import { ProfileHeader } from "../components/profile/ProfileHeader";
import styled from "styled-components";
import Intro from "../components/profile/Intro";
import { ProfileContents } from "../components/profile/ProfileContents";

const Profile = () => {
    return (
        <Wrapper>
            <ProfileHeader />
            <ProfileContents />
        </Wrapper>
    );
};

export default Profile;

const Wrapper = styled.div`
    width: 100%;
`;
