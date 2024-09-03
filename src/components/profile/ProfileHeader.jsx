import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Buttons } from "../form/style";

export const ProfileHeader = ({ account, paramId, paramView }) => {
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
                        <ProfileUserName>
                            {account.userName}
                            <Button onClick={() => navigate("/modify-profile")}>프로필 편집</Button>
                        </ProfileUserName>
                        <ProfileEmail>{account.userEmail}</ProfileEmail>
                    </ProfileTxtBox>
                </UserInfoContainer>
                <ProfileNavigation>
                    <li>
                        <LinkItem to={`/profile?id=${paramId}`} active={paramView === null}>
                            소개
                        </LinkItem>
                    </li>
                    <li>
                        <LinkItem to={`/profile?id=${paramId}&view=created`} active={paramView === "created"}>
                            작성한 게시물
                        </LinkItem>
                    </li>
                    <li>
                        <LinkItem to={`/profile?id=${paramId}&view=liked`} active={paramView === "liked"}>
                            좋아요한 게시물
                        </LinkItem>
                    </li>
                </ProfileNavigation>
            </ProfileHeaderContainer>
        </ProfileHeaderWrap>
    );
};
const ProfileHeaderWrap = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
const ProfileUserName = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;
const ProfileEmail = styled.span`
    padding: 4px 10px;
`;

const Button = styled.button`
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #71c4ef;
    color: #fff;
    border: none;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
    }

    &:active {
        background-color: #004494;
    }
`;
const ProfileNavigation = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    margin: 0 auto;
    padding-left: 20px;
    font-size: 1.2rem;
    & li {
        padding: 8px;
    }
`;
const LinkItem = styled(Link)`
    text-decoration: none;
    color: ${({ active }) => (active ? "#000" : "#3d3d3d")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
    /* border-bottom: ${({ active }) => (active ? "border 1px solid" : "none")}; */
`;
