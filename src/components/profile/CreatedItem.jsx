import React from "react";
import { getYoutubeKey } from "../../utils";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as Style from "../home/HomeStyles";

export const CreatedItem = ({ post }) => {
    const thumbnailKey = getYoutubeKey(post.url);
    const navigate = useNavigate();

    return (
        <Style.ItemLi onClick={() => navigate(`/detail?id=${post.id}`)}>
            <Style.TextName>{post.postTitle}</Style.TextName>
            <Style.ThumbnailWrap>
                <ItemImgBox>
                    <Style.ThumbnailImg src={`https://img.youtube.com/vi/${thumbnailKey}/0.jpg`} alt={post.postTitle} />
                </ItemImgBox>
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
