import supabase from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

export const DetailDeleteModal = ({ openDeleteModal, closeDeleteModal, fetchPostData, postId, commentId }) => {
    const navigate = useNavigate();

    const deleteComment = async () => {
        await supabase.from("STARTIFY_COMMENTS").delete().eq("id", commentId);
    };

    const deletePost = async () => {
        await supabase.from("STARTIFY_DATA").delete().eq("id", postId);
        fetchPostData();
        navigate("/");
    };

    return (
        <>
            <div style={{ display: openDeleteModal ? "block" : "none" }}>
                <span onClick={closeDeleteModal}>&times;</span>
                {commentId === undefined ? (
                    <div>
                        <span>해당 게시물을 삭제하시겠습니까?</span>
                        <button onClick={() => deletePost(postId)}>확인</button>
                    </div>
                ) : (
                    <div>
                        <span>해당 댓글을 삭제하시겠습니까?</span>
                        <button onClick={() => deleteComment(commentId)}>확인</button>
                    </div>
                )}
            </div>
        </>
    );
};
