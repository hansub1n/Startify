import { useState } from "react";
import supabase from "../../supabaseClient";

export const DetailEditModal = ({ openEditModal, closeEditModal, text, commentId }) => {
    const [editInputText, setEditInputText] = useState(text);

    const editComment = async () => {
        await supabase.from("STARTIFY_COMMENTS").update({ text: editInputText }).eq("id", commentId);
        closeEditModal;
    };
    return (
        <>
            <div style={{ display: openEditModal ? "block" : "none" }}>
                <span onClick={closeEditModal}>&times;</span>
                <textarea value={editInputText} onChange={(e) => setEditInputText(e.target.value)} />
                <button onClick={() => editComment(commentId)}>수정</button>
            </div>
        </>
    );
};
