import { useState } from "react";
import supabase from "../../supabaseClient";
import styled from "styled-components";

export const DetailEditModal = ({
    editInputText,
    setEditInputText,
    openEditModal,
    closeEditModal,
    commentId,
    fetchPostData
}) => {
    const editComment = async () => {
        if (editInputText.trim() !== "") {
            await supabase.from("STARTIFY_COMMENTS").update({ text: editInputText.trim() }).eq("id", commentId);

            closeEditModal();
            fetchPostData();
        } else {
            alert("수정할 댓글을 입력하세요.");
        }
    };
    return (
        <ModalBackdrop open={openEditModal} onClick={closeEditModal}>
            <DetailEditModalDiv onClick={(e) => e.stopPropagation()}>
                <CloseModalSpan onClick={closeEditModal}>&times;</CloseModalSpan>
                <Div>
                    <Span>수정 댓글</Span>
                    <TextArea
                        value={editInputText}
                        onChange={(e) => {
                            setEditInputText(e.target.value);
                        }}
                    />
                    <Button onClick={() => editComment(commentId)}>확인</Button>
                </Div>
            </DetailEditModalDiv>
        </ModalBackdrop>
    );
};

const ModalBackdrop = styled.div`
    display: ${({ open }) => (open ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 999;
`;

const DetailEditModalDiv = styled.div`
    position: fixed;
    background-color: #f0f0f0;
    width: 40%;
    height: 33%;
    top: 30%;
    left: 50%;
    z-index: 1000;
    transform: translate(-50%, 0);
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
`;

const CloseModalSpan = styled.div`
    position: absolute;
    right: 30px;
    font-size: 32px;
    cursor: pointer;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: translate(-50%, 0);
    top: 25%;
    left: 50%;
`;

const Span = styled.span`
    font-size: 20px;
`;

const TextArea = styled.textarea`
    resize: none;
    width: 800px;
    height: 150px;
    margin-top: 50px;
    border: none;
    border-radius: 13px;
    font-size: 20px;
    padding: 15px 100px 15px 15px;
`;

const Button = styled.button`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    bottom: 10px;
    right: 10px;
    width: 90px;
    height: 45px;
    font-size: 18px;
    border: none;
    border-radius: 13px;
    background-color: #71c4ef;
    transition: background-color 0.3s ease;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #a1d0d6;
    }
`;
