import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const defaultProfileImgUrl = "/defaultProfile.jpg";

const DetailOwner = ({ userId, userName, postTitle, desc, profileImgUrl }) => {
    const navigate = useNavigate();

    return (
        <div>
            <StOwnerProfileBoxDiv>
                <Link to={`/profile?id=${userId}`}>
                    <StOwnerProfileImg src={profileImgUrl ?? defaultProfileImgUrl} />
                </Link>
                <StOwnerProfileTextDiv>
                    <StOwnerProfileNameSpan onClick={() => navigate(`/profile?id=${userId}`)}>
                        {userName}
                    </StOwnerProfileNameSpan>
                    <StCommentDiv>
                        <StOwnerProfilesCommentTitleSpan>{postTitle}</StOwnerProfilesCommentTitleSpan>
                        <StOwnerProfilesCommentSpan>{desc}</StOwnerProfilesCommentSpan>
                    </StCommentDiv>
                </StOwnerProfileTextDiv>
            </StOwnerProfileBoxDiv>
        </div>
    );
};

export default DetailOwner;

const StOwnerProfileBoxDiv = styled.div`
    display: flex;
    flex-direction: row;
`;
const StOwnerProfileImg = styled.img`
    display: flex;
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
`;

const StOwnerProfileTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin-left: 10px;
`;

const StOwnerProfileNameSpan = styled.span`
    display: flex;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`;
const StCommentDiv = styled.div`
    display: flex;
    gap: 10px;
`;
const StOwnerProfilesCommentTitleSpan = styled.span`
    display: flex;
    font-size: 15px;
    font-weight: 700;
`;
const StOwnerProfilesCommentSpan = styled.span`
    display: flex;
    font-size: 15px;
`;
