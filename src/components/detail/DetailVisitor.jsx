import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import supabase from "../../supabaseClient";
import { UserContext } from "../../context/UserContext";
import { DetailEditModal } from "./DetailEditModal";

const DetailVisitor = ({ commentId, text, STARTIFY_USER }) => {
    const { user } = useContext(UserContext);
    const userId = user.id;

    const { user_id, userName, profileImgUrl, id } = STARTIFY_USER;
    // const user = {
    //     id: 28,
    //     user_id: "eeb6009e-5417-4da3-998e-9e611a82e4f4",
    //     userName: "신장구",
    //     profileImgUrl:
    //         "https://i.namu.wiki/i/Hb-VM7F-Ki4dWs3GcAz2KkMCg22qSbp_i2gguEhEmmpmlBoxCpXpd9eWW2AdTXB3z12CvgVj_Ra_2e0o7yL5FQ.web"
    // };

    const navigate = useNavigate();

    const removeComment = async () => {
        await supabase.from("STARTIFY_COMMENTS").delete().eq("id", commentId);
    };
    const [isEdit, setIsEdiit] = useState(false);
    const openEditModal = () => setIsEdiit(true);
    const closeEditModal = () => setIsEdiit(false);

    return (
        <div>
            <StVisitorCommentBox>
                <Link to={`/profile?id=${id}`}>
                    <StVisitorProfileImg src={profileImgUrl} />
                </Link>
                <StVisitorProfileTextDiv>
                    <StVisitorProfileNameSpan onClick={() => navigate(`/profile?id=${id}`)}>
                        {userName}
                    </StVisitorProfileNameSpan>
                    <StVisitorCommentSpan>{text}</StVisitorCommentSpan>
                </StVisitorProfileTextDiv>
                <StVisitorCommentBtns>
                    {/* 로그인된 아이디와 댓글 아이디가 같을 경우 보이기 */}
                    {userId !== user_id ? null : (
                        <div>
                            <div>
                                <div>
                                    <button onClick={openEditModal}>수정</button>
                                    <DetailEditModal
                                        openEditModal={isEdit}
                                        closeEditModal={closeEditModal}
                                        text={text}
                                        commentId={commentId}
                                    />
                                </div>

                                <button onClick={() => removeComment(commentId)}>삭제</button>
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
