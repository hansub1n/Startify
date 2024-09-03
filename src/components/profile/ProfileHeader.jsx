import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Style from "./ProfileStyles";
import blankProfileImg from "../../assets/blankProfile.png";

export const ProfileHeader = ({ account, paramId, paramView }) => {
    const navigate = useNavigate();
    return (
        <Style.ProfileHeaderWrap>
            <Style.ProfileHeaderContainer>
                <Style.UserInfoContainer>
                    <Style.ProfileImgBox>
                        {account.profileImgUrl ? <img src={account.profileImgUrl} /> : <img src={blankProfileImg} />}
                    </Style.ProfileImgBox>
                    <Style.ProfileTxtBox>
                        <Style.ProfileUserName>
                            {account.userName}
                            <Style.Button onClick={() => navigate("/modify-profile")}>프로필 편집</Style.Button>
                        </Style.ProfileUserName>
                        <Style.ProfileEmail>{account.userEmail}</Style.ProfileEmail>
                    </Style.ProfileTxtBox>
                </Style.UserInfoContainer>
                <Style.ProfileNavigation>
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
                </Style.ProfileNavigation>
            </Style.ProfileHeaderContainer>
        </Style.ProfileHeaderWrap>
    );
};
const LinkItem = styled(Link)`
    text-decoration: none;
    color: ${({ active }) => (active ? "#000" : "#3d3d3d")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
    /* border-bottom: ${({ active }) => (active ? "border 1px solid" : "none")}; */
`;
