import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import exampImg from "../../assets/temporalLogo.png";
import { UserContext } from "../../context/UserContext";

export const ProfileHeader = () => {
    const { user, account } = useContext(UserContext);

    if (!user || !account) {
        return <div>로딩중..</div>;
    }
    // console.table("user", user);
    // console.log("account", account);

    return (
        <ProfileHeaderWrap>
            <ProfileHeaderContainer>
                <UserInfoContainer>
                    <ProfileImgBox>
                        <img src={account.profileImgUrl} />
                    </ProfileImgBox>
                    <ProfileTxtBox>
                        <span>
                            {account.userName} <button>프로필 편집</button>
                        </span>
                        <span>{user.email}</span>
                    </ProfileTxtBox>
                </UserInfoContainer>
                <ProfileNavigation>
                    <li>
                        <Link to={"/profile"}>소개</Link>
                    </li>
                    <li>
                        <Link to={"/profile/created"}>작성한 게시물</Link>
                    </li>
                    <li>
                        <Link to={"/profile/liked"}>좋아요한 게시물</Link>
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
    padding: 20px;
`;
