import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailVisitor = ({ id, comment }) => {
    const navigate = useNavigate();
    return (
        <div>
            <StVisitorCommentBox>
                <Link to={`/mypage?id=${id}`}>
                    <StVisitorProfileImg src="https://cdn.ibos.kr/template/DESIGN_shared/program/theme/01/THUMBNAIL_60_60_icon_rep_box.gif" />
                </Link>
                <StVisitorProfileTextDiv>
                    <StVisitorProfileNameSpan onClick={() => navigate(`/mypage?id=${id}`)}>
                        닉네임{id}
                    </StVisitorProfileNameSpan>
                    <StVisitorCommentSpan>작성글: {comment}</StVisitorCommentSpan>
                </StVisitorProfileTextDiv>
                <StVisitorCommentBtns>
                    <button>수정</button>
                    <button>삭제</button>
                </StVisitorCommentBtns>
            </StVisitorCommentBox>
        </div>
    );
};

export default DetailVisitor;

const StVisitorCommentBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 25px;
`;
const StVisitorProfileImg = styled.img`
    display: flex;
    width: 50px;
    height: 50px;

    border-radius: 50%;
`;

const StVisitorProfileTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin-left: 10px;
`;

const StVisitorProfileNameSpan = styled.span`
    display: flex;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
`;
const StVisitorCommentSpan = styled.span`
    display: flex;
    font-size: 14px;
`;

const StVisitorCommentBtns = styled.div`
    display: flex;
    margin-left: 30px;
    margin-bottom: 18px;
    gap: 3px;
`;
