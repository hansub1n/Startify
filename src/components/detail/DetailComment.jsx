import React from "react";
import styled from "styled-components";
import DetailVisitor from "./DetailVisitor";

const DetailComment = () => {
    return (
        <div>
            <StCommentFieldDiv>
                <StCommentFieldTextarea />
                <StCommentFieldBtn>등록</StCommentFieldBtn>
            </StCommentFieldDiv>
            <StDetailCommentsDiv>
                <DetailVisitor id={2} comment={"ㅎㅇ1"} />
                <DetailVisitor id={3} comment={"ㅎㅇ2"} />
                <DetailVisitor id={4} comment={"ㅎㅇ3"} />
                <DetailVisitor id={5} comment={"ㅎㅇ4"} />
                <DetailVisitor id={6} comment={"ㅎㅇ5"} />
                <DetailVisitor id={7} comment={"ㅎㅇ6"} />
                <DetailVisitor id={8} comment={"ㅎㅇ7"} />
            </StDetailCommentsDiv>
        </div>
    );
};

export default DetailComment;
const StCommentFieldDiv = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;

    border-top: 1px solid #b6ccd8;
    padding-top: 20px;
    margin-bottom: 70px;
`;
const StCommentFieldTextarea = styled.textarea`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 130px;
    margin-bottom: 30px;
    box-sizing: border-box;
    font-size: 15px;
    padding: 15px;
    background-color: #d9d9d9;
    border: none;
    border-radius: 20px;
`;
const StCommentFieldBtn = styled.button`
    display: flex;
    position: absolute;
    justify-content: center;
    bottom: -20px;
    right: 0;
    width: 100px;
    height: 30px;
    padding: 5px;
    box-sizing: border-box;
`;
const StDetailCommentsDiv = styled.div`
    display: flex;
    flex-direction: column;
`;
