import React from "react";
import { getYoutubeKey } from "../../utils";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as Style from "../home/HomeStyles";
import likeImg from "../../assets/like.png";

export const CreatedItem = ({ post }) => {
    const thumbnailKey = getYoutubeKey(post.url);
    const navigate = useNavigate();
    const likeCount = post.STARTIFY_LIKES.length;

    return (
        <Style.ItemLi onClick={() => navigate(`/detail?id=${post.id}`)}>
            <Style.TextName>{post.postTitle}</Style.TextName>
            <Style.ThumbnailWrap>
                <ItemImgBox>
                    <Style.ThumbnailImg src={`https://img.youtube.com/vi/${thumbnailKey}/0.jpg`} alt={post.postTitle} />
                </ItemImgBox>
                <LikesContainer>
                    <Style.LikesText>{likeCount}</Style.LikesText>
                    <Style.LikeBtmImg src={likeImg} />
                </LikesContainer>
            </Style.ThumbnailWrap>
            <ItemTxtBox>
                <span>{post.STARTIFY_USER.userName}</span>
            </ItemTxtBox>
            <Style.Text>
                {post.name} - {post.title}
            </Style.Text>
        </Style.ItemLi>
    );
};
export const Item = styled.li`
    display: flex;
    flex-direction: column;
`;
export const ItemImgBox = styled.div`
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const ItemTxtBox = styled.div`
    text-align: center;
`;
export const LikesContainer = styled.div`
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
