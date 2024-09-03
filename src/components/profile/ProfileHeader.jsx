import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const ProfileHeader = ({ account, paramId }) => {
    const navigate = useNavigate();
    console.log("header-account", account);
    return (
        <ProfileHeaderWrap>
            <ProfileHeaderContainer>
                <UserInfoContainer>
                    <ProfileImgBox>
                        <img src={account.profileImgUrl} />
                    </ProfileImgBox>
                    <ProfileTxtBox>
                        <span>
                            {account.userName} <button onClick={() => navigate("/modify-profile")}>프로필 편집</button>
                        </span>
                        <span>{account.userEmail}</span>
                    </ProfileTxtBox>
                </UserInfoContainer>
                <ProfileNavigation>
                    <li>
                        <Link to={`/profile?id=${paramId}`}>소개</Link>
                    </li>
                    <li>
                        <Link to={`/profile?id=${paramId}&view=created`}>작성한 게시물</Link>
                    </li>
                    <li>
                        <Link to={`/profile?id=${paramId}&view=liked`}>좋아요한 게시물</Link>
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
