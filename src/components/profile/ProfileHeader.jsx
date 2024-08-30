import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import exampImg from "../../assets/temporalLogo.png";

export const ProfileHeader = ({ user }) => {
    console.table("user", user);
    // console.log("userName", user.userName);
    return (
        <ProfileHeaderWrap>
            <ProfileHeaderContainer>
                <UserInfoContainer>
                    <ProfileImgBox>
                        <img src={exampImg} />
                    </ProfileImgBox>
                    <ProfileTxtBox>
                        <span>
                            {user.userName} <button>프로필 편집</button>
                        </span>
                        <span>{user.userId}</span>
                    </ProfileTxtBox>
                </UserInfoContainer>
                <ProfileNavigation>
                    <li>
                        <Link to={""}>소개</Link>
                    </li>
                    <li>
                        <Link to={"created"}>작성한 게시물</Link>
                    </li>
                    <li>
                        <Link to={"liked"}>좋아요한 게시물</Link>
                    </li>
                </ProfileNavigation>
            </ProfileHeaderContainer>
        </ProfileHeaderWrap>
    );
};
const ProfileHeaderWrap = styled.div`
    width: 100%;
    border-bottom: 1px solid #000;
`;

const ProfileHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    margin: 0 auto;
`;

const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
    gap: 1rem;
`;

const ProfileImgBox = styled.div`
    width: 100px;
    height: 100px;
    & img {
        width: 100%;
        height: 100%;
    }
`;
const ProfileTxtBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProfileNavigation = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;
`;
