import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Style from "./ProfileStyles";
import blankProfileImg from "../../assets/blankProfile.png";
import "./css/active.css";

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
                        <Link
                            to={`/profile?id=${paramId}`}
                            className={paramView === null ? "nav-link active" : "nav-link"}
                        >
                            소개
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/profile?id=${paramId}&view=created`}
                            className={paramView === "created" ? "nav-link active" : "nav-link"}
                        >
                            작성한 게시물
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/profile?id=${paramId}&view=liked`}
                            className={paramView === "liked" ? "nav-link active" : "nav-link"}
                        >
                            좋아요한 게시물
                        </Link>
                    </li>
                </Style.ProfileNavigation>
            </Style.ProfileHeaderContainer>
        </Style.ProfileHeaderWrap>
    );
};
