import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../context/PostContext";
import { LikedItem } from "./LikedItem";
import * as Style from "./ProfileStyles";

const Liked = () => {
    const { likePosts } = useContext(PostContext);

    return (
        <Style.ProfileContentContainer>
            <Style.ProfileContent>
                <Style.ItemCounter>
                    <span>{likePosts.length}개의 좋아요 한 게시물이 있습니다.</span>
                </Style.ItemCounter>
                <Style.ItemsContainer>
                    {likePosts.length > 0 ? (
                        <Style.Items>
                            {likePosts.map((likePost) => (
                                <LikedItem key={likePost.id} likePost={likePost} />
                            ))}
                        </Style.Items>
                    ) : (
                        <p>좋아요한 게시물이 없습니다.</p>
                    )}
                </Style.ItemsContainer>
            </Style.ProfileContent>
        </Style.ProfileContentContainer>
    );
};

export default Liked;
