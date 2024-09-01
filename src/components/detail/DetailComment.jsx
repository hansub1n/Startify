import styled from "styled-components";
import DetailVisitor from "./DetailVisitor";
import { useContext, useEffect, useState } from "react";
import supabase from "../../supabaseClient";
import { UserContext } from "../../context/UserContext";

const DetailComment = ({ id, comments, fetchPostData }) => {
    const { user } = useContext(UserContext);
    const userId = user.id;
    console.log(user.id);

    const [inputText, setInputText] = useState("");

    const addComment = async () => {
        if (inputText !== "") {
            await supabase.from("STARTIFY_COMMENTS").insert({ text: inputText, user_id: userId, post_id: id });
            setInputText("");
        } else {
            alert("댓글을 입력하세요.");
            return;
        }

        fetchPostData();
    };

    return (
        <div>
            <StCommentFieldDiv>
                <StCommentFieldTextarea
                    value={inputText}
                    onChange={(e) => {
                        setInputText(e.target.value.trim());
                    }}
                />
                <StCommentFieldBtn onClick={addComment}>등록</StCommentFieldBtn>
            </StCommentFieldDiv>
            <StDetailCommentsDiv>
                {comments.map((comment) => {
                    const { id, text, STARTIFY_USER } = comment;
                    return (
                        <DetailVisitor
                            key={id}
                            commentId={id}
                            STARTIFY_USER={STARTIFY_USER}
                            text={text}
                            fetchPostData={fetchPostData}
                        />
                    );
                })}
            </StDetailCommentsDiv>
        </div>
    );
};

export default DetailComment;
const StCommentFieldDiv = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;

    border-top: 1px solid #b6ccd8;
    padding-top: 20px;
    margin-bottom: 70px;
`;
const StCommentFieldTextarea = styled.textarea`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 130px;
    margin-bottom: 30px;
    box-sizing: border-box;
    font-size: 15px;
    padding: 15px;
    background-color: #d9d9d9;
    border: none;
    border-radius: 20px;
`;
const StCommentFieldBtn = styled.button`
    display: flex;
    position: absolute;
    justify-content: center;
    bottom: -20px;
    right: 0;
    width: 100px;
    height: 30px;
    padding: 5px;
    box-sizing: border-box;
`;
const StDetailCommentsDiv = styled.div`
    display: flex;
    flex-direction: column;
`;
