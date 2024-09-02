import React from "react";
import { getYoutubeKey } from "../../utils";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const CreatedItem = ({ post }) => {
    const thumbnailKey = getYoutubeKey(post.url);
    const navigate = useNavigate();

    return (
        <Item onClick={() => navigate(`/detail?id=${post.id}`)}>
            <ItemImgBox>
                <img src={`https://img.youtube.com/vi/${thumbnailKey}/0.jpg`} alt={post.postTitle} />
            </ItemImgBox>
            <ItemTxtBox>
                <span>{post.STARTIFY_USER.userName}</span>
                <h1>{post.postTitle}</h1>
            </ItemTxtBox>
        </Item>
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
