import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import supabase from "../supabaseClient";

export const PostContext = createContext();
const PostProvider = ({ children }) => {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [likePosts, setLikePosts] = useState([]);

    useEffect(() => {
        const fetchPostsData = async () => {
            if (user) {
                const { data: postData, error: postError } = await supabase
                    .from("STARTIFY_DATA")
                    .select(
                        `id, postTitle, url, name, title,
                        STARTIFY_USER(userName),
                        STARTIFY_LIKES(user_id)`
                    )
                    .eq("user_id", user.id);

                if (postError) {
                    console.log(postError);
                } else {
                    setPosts(postData);
                }
            }
        };
        fetchPostsData();

        const fetchLikePostsData = async () => {
            if (user) {
                const { data: likePostData, error: likePostError } = await supabase
                    .from("STARTIFY_LIKES")
                    .select(
                        `*,
                        STARTIFY_DATA(id, postTitle, url, name, title
                         ,STARTIFY_USER(userName)
                         ,STARTIFY_LIKES(user_id))`
                    )
                    .eq("user_id", user.id);

                if (likePostError) {
                    console.log("likePostError", likePostError);
                } else {
                    console.log("likePostData", likePostData);
                    setLikePosts(likePostData);
                }
            }
        };
        fetchLikePostsData();
    }, [user]);

    return <PostContext.Provider value={{ posts, likePosts }}>{children}</PostContext.Provider>;
};

export default PostProvider;
