import React from "react";
import styled from "styled-components";

const PostItem = () => {
    return (
        <ItemLi>
            <h3>아이유 노래 같이들어요</h3>
            <ThumbnailWrap>
                <ThumbnailImg src="https://img.youtube.com/vi/d9IxdwEFk1c/0.jpg" />
                <ThumbnailTextWrap>
                    <LikesText>1234</LikesText>
                    <LikesButton>♡</LikesButton>
                </ThumbnailTextWrap>
            </ThumbnailWrap>
            <p>아이유 - love wins all</p>
        </ItemLi>
    );
};

export default PostItem;

const ItemLi = styled.li`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 360px;
    height: 360px;
    border-radius: 30px;
    border: 10px solid black;
    padding: 20px;
`;

const ThumbnailWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const ThumbnailImg = styled.img`
    width: 300px;
    height: 224px;
    object-fit: fill;
`;

const ThumbnailTextWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    padding: 5px;
    background-color: rgb(255, 255, 255, 0.4);
    border-radius: 10px;
`;

const LikesText = styled.p`
    /* color: white; */
    font-weight: 700;
`;

const LikesButton = styled.button`
    color: red;
    background-color: transparent;
    border: none;
`;
