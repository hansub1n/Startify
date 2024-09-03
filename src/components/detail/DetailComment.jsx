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
        if (inputText.trim() !== "") {
            await supabase.from("STARTIFY_COMMENTS").insert({ text: inputText.trim(), user_id: userId, post_id: id });
            setInputText("");
        } else {
            alert("댓글을 입력하세요.");
            return;
        }

        fetchPostData();
    };

    return (
        <DetailCommentDiv>
            <StCommentFieldDiv>
                <StCommentFieldTextarea
                    value={inputText}
                    onChange={(e) => {
                        setInputText(e.target.value);
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
        </DetailCommentDiv>
    );
};

export default DetailComment;

const DetailCommentDiv = styled.div`
    font-family: "SUITE-Regular";
    align-items: center;
    justify-content: center;
    width: 1000px;
    height: auto;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const StCommentFieldDiv = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    flex-direction: column;

    border-top: 1px solid #b6ccd8;
    padding-top: 20px;
    margin-bottom: 70px;
`;
const StCommentFieldTextarea = styled.textarea`
    resize: none;
    display: flex;
    font-family: "SUITE-Regular";
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    margin-bottom: 30px;
    box-sizing: border-box;
    font-size: 20px;
    padding: 15px 100px 15px 15px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 20px;
`;
const StCommentFieldBtn = styled.button`
    font-family: "SUITE-Regular";
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    bottom: 40px;
    right: 10px;
    width: 90px;
    height: 45px;
    padding: 5px;
    box-sizing: border-box;
    font-size: 18px;
    border: none;
    border-radius: 13px;
    background-color: #71c4ef;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &:hover {
        background-color: #a1d0d6;
    }
`;
const StDetailCommentsDiv = styled.div`
    display: flex;
    flex-direction: column;
`;
