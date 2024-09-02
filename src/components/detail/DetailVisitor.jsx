import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";
import { DetailEditModal } from "./DetailEditModal";
import { DetailDeleteModal } from "./DetailDeleteModal";

const defaultProfileImgUrl = "/defaultProfile.jpg";

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
                    <StVisitorProfileImg src={profileImgUrl ?? defaultProfileImgUrl} />
                </Link>
                <StVisitorProfileTextDiv>
                    <StVisitorProfileNameSpan onClick={() => navigate(`/profile?id=${id}`)}>
                        {userName}
                    </StVisitorProfileNameSpan>
                    <StVisitorCommentSpan>{text}</StVisitorCommentSpan>
                </StVisitorProfileTextDiv>
                <StVisitorCommentBtns>
                    {userId !== user_id ? null : (
                        <div>
                            <div>
                                <div>
                                    <button onClick={openEditModal}>수정</button>
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
                                    <button onClick={openDeleteModal}>삭제</button>
                                    <DetailDeleteModal
                                        openDeleteModal={confirmDelete}
                                        closeDeleteModal={closeDeleteModal}
                                        commentId={commentId}
                                        fetchPostData={fetchPostData}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </StVisitorCommentBtns>
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
    width: 50px;
    height: 50px;
    object-fit: cover;

    border-radius: 50%;
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
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
`;
const StVisitorCommentSpan = styled.span`
    display: flex;
    font-size: 14px;
`;

const StVisitorCommentBtns = styled.div`
    display: flex;
    margin-left: 30px;
    margin-bottom: 18px;
    gap: 3px;
`;
