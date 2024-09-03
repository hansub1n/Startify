import React, { useContext, useEffect, useState } from "react";
import DetailOwner from "../components/detail/DetailOwner";
import DetailMusic from "../components/detail/DetailMusic";
import DetailComment from "../components/detail/DetailComment";
import styled from "styled-components";
import supabase from "../supabaseClient";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { DetailDeleteModal } from "../components/detail/DetailDeleteModal";
import { UserContext } from "../context/UserContext";

const Detail = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        alert("로그인이 필요한 페이지입니다. 로그인 해주세요. 🥺");
        return <Navigate to="/login" />;
    }

    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [searchParams] = useSearchParams();
    const postId = searchParams.get("id");

    useEffect(() => {
        fetchPostData();
    }, [postId]);

    const fetchPostData = async () => {
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

            data[0].STARTIFY_COMMENTS.sort((a, b) => a.id - b.id);
            setPost(data[0]);
        }
    };

    //좋아요 관련 작업
    const [likes, setLikes] = useState();
    const fetchLikeData = async () => {
        const { data, error } = await supabase.from("STARTIFY_LIKES").select("user_id").eq("post_id", postId);
        if (error) {
            console.log("error :>> ", error);
        }
        setLikes(data);
        console.log("data :>> ", data);
    };
    const toggleLikeData = async (isUserLiked, userId) => {
        const { error } = isUserLiked
            ? await supabase.from("STARTIFY_LIKES").delete().match({ "user_id": userId, "post_id": postId })
            : await supabase.from("STARTIFY_LIKES").insert({ "user_id": userId, "post_id": postId });
        if (error) {
            console.log("error :>> ", error);
            return;
        }
        fetchLikeData();
    };
    useEffect(() => {
        fetchLikeData();
    }, []);

    const [confirmDelete, setConfirmDelete] = useState(false);
    const openDeleteModal = () => setConfirmDelete(true);
    const closeDeleteModal = () => setConfirmDelete(false);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <DetailDiv>
            <Div>
                {user.id !== post.STARTIFY_USER.user_id ? null : (
                    <DetailPostBtnDiv>
                        <StPostBtn onClick={() => navigate(`/editform?id=${post.id}`)}>수정</StPostBtn>

                        <div>
                            <StPostBtn onClick={openDeleteModal}>삭제</StPostBtn>
                            <DetailDeleteModal
                                openDeleteModal={confirmDelete}
                                closeDeleteModal={closeDeleteModal}
                                postId={post.id}
                                fetchPostData={fetchPostData}
                            />
                        </div>
                    </DetailPostBtnDiv>
                )}
                <StPostTitleSpan>{post.title}</StPostTitleSpan>

                <DetailOwner
                    userId={post.STARTIFY_USER.id}
                    userName={post.STARTIFY_USER.userName}
                    postTitle={post.postTitle}
                    profileImgUrl={post.STARTIFY_USER.profileImgUrl}
                />
                <DetailMusic
                    url={post.url}
                    name={post.name}
                    title={post.title}
                    desc={post.desc}
                    hashtags={post.hashtags}
                    likes={likes}
                    toggleLikeData={toggleLikeData}
                />
                <DetailComment id={post.id} comments={post.STARTIFY_COMMENTS} fetchPostData={fetchPostData} />
            </Div>
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
const Div = styled.div`
    width: 1120px;
    height: 100%;
`;

const DetailPostBtnDiv = styled.div`
    display: flex;
    position: absolute;
    flex-direction: row;
    top: 170px;
    right: 80px;
    gap: 10px;
`;

const StPostBtn = styled.button`
    width: 80px;
    height: 35px;
    padding: 5px;
    box-sizing: border-box;
    font-size: 18px;
    border: none;
    border-radius: 13px;
    background-color: #b0e0e6;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #a1d0d6;
    }
`;
const StPostTitleSpan = styled.span`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 70px;
    font-size: 30px;
    font-weight: 900;
`;
