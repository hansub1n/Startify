import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";

const Intro = () => {
    const { account } = useContext(UserContext);
    // TODO useParam으로 ..?

    return (
        <ProfileContentContainer>
            <ProfileContent>{!account.userIntro ? `작성된 소개글이 없습니다.` : account.userIntro}</ProfileContent>
        </ProfileContentContainer>
    );
};

export default Intro;

export const ProfileContentContainer = styled.section`
    display: flex;
    width: 1280px;
    margin: 0 auto;
`;
export const ProfileContent = styled.div`
    padding: 24px 20px;
`;
