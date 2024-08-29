import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailOwner = ({ id, comment }) => {
    const navigate = useNavigate();

    return (
        <div>
            <StOwnerProfileBoxDiv>
                <Link to={`/mypage?id=${id}`}>
                    <StOwnerProfileImg src="https://cdn.ibos.kr/template/DESIGN_shared/program/theme/01/THUMBNAIL_60_60_icon_rep_box.gif" />
                </Link>
                <StOwnerProfileTextDiv>
                    <StOwnerProfileNameSpan onClick={() => navigate(`/mypage?id=${id}`)}>
                        닉네임{id}
                    </StOwnerProfileNameSpan>
                    <StOwnerProfilesCommentSpan>작성글: {comment}</StOwnerProfilesCommentSpan>
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
const StOwnerProfilesCommentSpan = styled.span`
    display: flex;
    font-size: 15px;
`;
