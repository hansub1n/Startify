import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import supabase from "../supabaseClient";

export const PostContext = createContext();
const PostProvider = ({ children }) => {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPostsData = async () => {
            if (user) {
                const { data: postData, error: postError } = await supabase
                    .from("STARTIFY_DATA")
                    .select("*")
                    .eq("user_id", user.id);

                if (postError) {
                    console.log(postError);
                } else {
                    console.log("postData", postData);
                    setPosts(postData);
                }
            }
        };
        fetchPostsData();
    }, []);

    return <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>;
};

export default PostProvider;
