import { useState } from "react";
import supabase from "../../supabaseClient";

export const DetailEditModal = ({
    editInputText,
    setEditInputText,
    openEditModal,
    closeEditModal,
    text,
    commentId,
    fetchPostData
}) => {
    const editComment = async () => {
        if (editInputText !== "") {
            await supabase.from("STARTIFY_COMMENTS").update({ text: editInputText }).eq("id", commentId);

            closeEditModal();
            fetchPostData();
        } else {
            alert("수정할 댓글을 입력하세요.");
        }
    };
    return (
        <>
            <div style={{ display: openEditModal ? "block" : "none" }}>
                <span onClick={closeEditModal}>&times;</span>
                <textarea
                    value={editInputText}
                    onChange={(e) => {
                        setEditInputText(e.target.value.trim());
                    }}
                />
                <button onClick={() => editComment(commentId)}>확인</button>
            </div>
        </>
    );
};
