import React, { useContext, useEffect, useState } from "react";
import { ProfileContent, ProfileContentContainer } from "./Intro";
import { ItemCounter, Items, ItemsContainer } from "./Created";
import supabase from "../../supabaseClient";
import { PostContext } from "../../context/PostContext";
import { LikedItem } from "./LikedItem";

const Liked = () => {
    const { likePosts } = useContext(PostContext);

    return (
        <ProfileContentContainer>
            <ProfileContent>
                <ItemCounter>
                    <span>{likePosts.length}개의 좋아요 한 게시물이 있습니다.</span>
                </ItemCounter>
                <ItemsContainer>
                    {likePosts.length > 0 ? (
                        <Items>
                            {likePosts.map((likePost) => (
                                <LikedItem key={likePost.id} likePost={likePost} />
                            ))}
                        </Items>
                    ) : (
                        <p>좋아요한 게시물이 없습니다.</p>
                    )}
                </ItemsContainer>
            </ProfileContent>
        </ProfileContentContainer>
    );
};

export default Liked;
