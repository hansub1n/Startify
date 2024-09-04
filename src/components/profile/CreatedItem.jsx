import React from "react";
import { getYoutubeKey } from "../../utils";
import { useNavigate } from "react-router-dom";
import * as PostStyle from "../home/HomeStyles";
import * as Style from "./ProfileStyles";
import likeImg from "../../assets/like.png";

export const CreatedItem = ({ post }) => {
    const thumbnailKey = getYoutubeKey(post.url);
    const navigate = useNavigate();
    const likeCount = post.STARTIFY_LIKES.length;

    return (
        <PostStyle.ItemLi onClick={() => navigate(`/detail?id=${post.id}`)}>
            <PostStyle.TextName>{post.postTitle}</PostStyle.TextName>
            <PostStyle.ThumbnailWrap>
                <Style.ItemImgBox>
                    <PostStyle.ThumbnailImg
                        src={`https://img.youtube.com/vi/${thumbnailKey}/0.jpg`}
                        alt={post.postTitle}
                    />
                </Style.ItemImgBox>
                <Style.LikesContainer>
                    <PostStyle.LikesText>{likeCount}</PostStyle.LikesText>
                    <PostStyle.LikeBtmImg src={likeImg} />
                </Style.LikesContainer>
            </PostStyle.ThumbnailWrap>
            <Style.ItemTxtBox>
                <span>{post.STARTIFY_USER.userName}</span>
            </Style.ItemTxtBox>
            <PostStyle.Text>
                {post.name} - {post.title}
            </PostStyle.Text>
        </PostStyle.ItemLi>
    );
};
