import { useEffect } from "react";
import supabase from "../../supabaseClient";

export const DetailDeleteModal = ({ openDeleteModal, closeDeleteModal, commentId, fetchPostData }) => {
    const removeComment = async () => {
        await supabase.from("STARTIFY_COMMENTS").delete().eq("id", commentId);
        fetchPostData();
    };

    return (
        <>
            <div style={{ display: openDeleteModal ? "block" : "none" }}>
                <span onClick={closeDeleteModal}>&times;</span>
                <span>해당 댓글을 삭제하시겠습니까?</span>
                <button onClick={() => removeComment(commentId)}>확인</button>
            </div>
        </>
    );
};
