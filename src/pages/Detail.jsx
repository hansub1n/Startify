import React, { useEffect, useState } from "react";
import DetailOwner from "../components/detail/DetailOwner";
import DetailMusic from "../components/detail/DetailMusic";
import DetailComment from "../components/detail/DetailComment";
import styled from "styled-components";
import supabase from "../supabaseClient";
import { useSearchParams } from "react-router-dom";

const Detail = () => {
    const [post, setPost] = useState(null);
    const [searchParams] = useSearchParams();
    const postId = searchParams.get("id");

    useEffect(() => {
        const fetchPostData = async () => {
            console.log(parseInt(postId));
            const { data, error } = await supabase
                .from("STARTIFY_DATA")
                .select(
                    `*, STARTIFY_COMMENTS(id, text, STARTIFY_USER(id, user_id, userName, profileImgUrl)), STARTIFY_USER(id, user_id, userName, profileImgUrl)`
                )
                .eq("id", postId);

            if (error) {
                console.log("error => ", error);
            } else {
                console.log("data => ", data);
                const targetData = data[0];
                setPost(targetData);
            }
        };

        fetchPostData();
    }, [postId]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <DetailDiv>
            <div>
                <DetailOwner
                    userId={post.STARTIFY_USER.id}
                    userName={post.STARTIFY_USER.userName}
                    postTitle={post.postTitle}
                    desc={post.desc}
                    profileImgUrl={post.STARTIFY_USER.profileImgUrl}
                />
                <DetailMusic
                    id={post.id}
                    postTitle={post.postTitle}
                    name={post.name}
                    title={post.title}
                    url={post.url}
                    likes={post.likes}
                    hashtags={post.hashtags}
                />
                <DetailComment id={post.id} comments={post.STARTIFY_COMMENTS} />
            </div>
        </DetailDiv>
    );
};

export default Detail;

const DetailDiv = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 30px;
`;
