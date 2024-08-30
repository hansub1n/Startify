import React from "react";
import styled from "styled-components";

const Intro = () => {
    return (
        <ProfileContentContainer>
            <ProfileContent>작성된 소개글이 없습니다.</ProfileContent>
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
