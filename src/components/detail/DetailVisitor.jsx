import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";
import { DetailEditModal } from "./DetailEditModal";
import { DetailDeleteModal } from "./DetailDeleteModal";
import editImg from "../../assets/edit.png";
import deleteImg from "../../assets/delete.png";
import blankProfileImg from "../../assets/blankProfile.png";

const DetailVisitor = ({ commentId, text, STARTIFY_USER, fetchPostData }) => {
    const { user } = useContext(UserContext);
    const userId = user.id;

    const { user_id, userName, profileImgUrl, id } = STARTIFY_USER;

    const navigate = useNavigate();

    const [editInputText, setEditInputText] = useState(text);

    const [confirmEdit, setConfirmEdit] = useState(false);
    const openEditModal = () => {
        setConfirmEdit(true);
        setConfirmDelete(false);
        setEditInputText(text);
    };
    const closeEditModal = () => {
        setConfirmEdit(false);
    };

    const [confirmDelete, setConfirmDelete] = useState(false);
    const openDeleteModal = () => {
        setConfirmDelete(true);
        setConfirmEdit(false);
    };
    const closeDeleteModal = () => setConfirmDelete(false);

    return (
        <div>
            <StVisitorCommentBox>
                <Link to={`/profile?id=${id}`}>
                    <StVisitorProfileImg src={profileImgUrl ?? blankProfileImg} />
                </Link>
                <StVisitorProfileTextDiv>
                    <StVisitorProfileNameSpan onClick={() => navigate(`/profile?id=${id}`)}>
                        {userName}
                    </StVisitorProfileNameSpan>
                    <StVisitorCommentSpan>{text}</StVisitorCommentSpan>
                </StVisitorProfileTextDiv>
                <div>
                    {userId !== user_id ? null : (
                        <StCommentBtnDiv>
                            <div>
                                <CommentBtnImg src={editImg} onClick={openEditModal} />
                                <DetailEditModal
                                    editInputText={editInputText}
                                    setEditInputText={setEditInputText}
                                    openEditModal={confirmEdit}
                                    closeEditModal={closeEditModal}
                                    commentId={commentId}
                                    fetchPostData={fetchPostData}
                                />
                            </div>
                            <div>
                                <CommentBtnImg src={deleteImg} onClick={openDeleteModal} />
                                <DetailDeleteModal
                                    openDeleteModal={confirmDelete}
                                    closeDeleteModal={closeDeleteModal}
                                    commentId={commentId}
                                    fetchPostData={fetchPostData}
                                />
                            </div>
                        </StCommentBtnDiv>
                    )}
                </div>
            </StVisitorCommentBox>
        </div>
    );
};

export default DetailVisitor;

const StVisitorCommentBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 25px;
`;
const StVisitorProfileImg = styled.img`
    display: flex;
    width: 65px;
    height: 65px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
`;

const StVisitorProfileTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin-left: 10px;
`;

const StVisitorProfileNameSpan = styled.span`
    display: flex;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
`;

const StVisitorCommentSpan = styled.span`
    display: flex;
    font-size: 18px;
`;

const StCommentBtnDiv = styled.div`
    display: flex;
    margin-left: 30px;
    margin-bottom: 18px;
    gap: 3px;
`;
const CommentBtnImg = styled.img`
    display: flex;
    top: -3px;
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: #a1d0d6;
    }
`;
