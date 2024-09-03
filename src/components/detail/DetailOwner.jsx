import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const defaultProfileImgUrl = "/defaultProfile.jpg";

const DetailOwner = ({ userId, userName, profileImgUrl }) => {
    const navigate = useNavigate();

    return (
        <div>
            <StOwnerProfileBoxDiv>
                <Link to={`/profile?id=${userId}`}>
                    <StOwnerProfileImg src={profileImgUrl ?? defaultProfileImgUrl} />
                </Link>
                <StOwnerProfileNameSpan onClick={() => navigate(`/profile?id=${userId}`)}>
                    {userName}
                </StOwnerProfileNameSpan>
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
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
`;

const StOwnerProfileNameSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`;
