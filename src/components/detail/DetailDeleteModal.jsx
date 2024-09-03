import styled from "styled-components";
import supabase from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

export const DetailDeleteModal = ({ openDeleteModal, closeDeleteModal, fetchPostData, postId, commentId }) => {
    const navigate = useNavigate();

    const deleteComment = async () => {
        await supabase.from("STARTIFY_COMMENTS").delete().eq("id", commentId);
        fetchPostData();
    };

    const deletePost = async () => {
        await supabase.from("STARTIFY_DATA").delete().eq("id", postId);
        fetchPostData();
        navigate("/");
    };

    return (
        <ModalBackdrop open={openDeleteModal} onClick={closeDeleteModal}>
            <DetailDeleteModalDiv onClick={(e) => e.stopPropagation()}>
                <CloseModalSpan onClick={closeDeleteModal}>&times;</CloseModalSpan>
                {commentId === undefined ? (
                    <Div>
                        <Span>해당 게시물을 삭제하시겠습니까?</Span>
                        <Button onClick={() => deletePost(postId)}>확인</Button>
                    </Div>
                ) : (
                    <Div>
                        <Span>해당 댓글을 삭제하시겠습니까?</Span>
                        <Button onClick={() => deleteComment(commentId)}>확인</Button>
                    </Div>
                )}
            </DetailDeleteModalDiv>
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

const DetailDeleteModalDiv = styled.div`
    position: fixed;
    background-color: #f0f0f0;
    width: 30%;
    height: 20%;
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
    top: 40%;
    left: 50%;
`;

const Span = styled.span`
    font-size: 20px;
    margin-bottom: 40px;
`;

const Button = styled.button`
    font-family: "SUITE-Regular";
    width: 90px;
    height: 45px;
    font-size: 18px;
    padding: 5px;
    box-sizing: border-box;
    border: none;
    border-radius: 13px;
    background-color: #71c4ef;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #a1d0d6;
        transform: scale(1.05);
    }
`;
