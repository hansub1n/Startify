import React, { useEffect, useState } from "react";
import { ProfileContent, ProfileContentContainer } from "./Intro";
import { Item, ItemCounter, ItemImgBox, Items, ItemsContainer, ItemTxtBox } from "./Created";
import supabase from "../../supabaseClient";

const Liked = () => {
    const [likePosts, setLikePosts] = useState([]);

    useEffect(() => {
        const fetchLikePosts = async () => {
            const { data, error } = await supabase
                .from("STARTIFY_LIKES")
                .select("post_id, STARTIFY_DATA(postTitle, userName), STARTIFY_USER(userId)")
                .eq("user_id", "test1");

            if (error) {
                console.log(error);
            } else {
                console.log("likedata", data);
                setLikePosts(data);
            }
        };
        fetchLikePosts();
    }, []);

    return (
        <ProfileContentContainer>
            <ProfileContent>
                <ItemCounter>
                    <span>{likePosts.length}개의 좋아요 게시물이 있습니다.</span>
                </ItemCounter>
                <ItemsContainer>
                    {likePosts.length > 0 ? (
                        <Items>
                            {likePosts.map((likePost) => (
                                <Item key={likePost.id}>
                                    <ItemImgBox>
                                        <img src="" alt="" />
                                    </ItemImgBox>
                                    <ItemTxtBox>
                                        <span>{likePost.userName}</span>
                                        <h1>{likePost.postTitle}</h1>
                                    </ItemTxtBox>
                                </Item>
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
