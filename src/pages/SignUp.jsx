import React, { useState } from "react";
import App from "./../App";
import supabase from "../supabaseClient";
import styled from "styled-components";

const SignUp = () => {
    const SignInStyle = styled.div`
        background-color: rgb(255, 190, 59);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    `;
    const [userName, setUserName] = useState("");
    const [userId, setUerId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userIntro, setUserIntro] = useState("");
    const handleSignUp = async () => {
        const { data, error } = await supabase
            .from("STARTIFY_USER")
            .insert({ userName, userId, userPassword, userIntro });
        if (error) {
            console.log("회원가입오류!");
        } else {
            alert("정상입력");
            console.log(data);
        }
    };
    return (
        <SignInStyle>
            <h2>회원가입</h2>
            <div>
                <p>이미지</p>
                <button type="button">이미지 업로드</button>
            </div>
            <div>
                <label>닉네임</label>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                />
                <label>아이디</label>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => {
                        setUerId(e.target.value);
                    }}
                />
                <label>비밀번호</label>
                <input
                    type="password"
                    value={userPassword}
                    onChange={(e) => {
                        setUserPassword(e.target.value);
                    }}
                />
                <label>소개글</label>
                <input
                    type="text"
                    value={userIntro}
                    onChange={(e) => {
                        setUserIntro(e.target.value);
                    }}
                />
            </div>
            <div>
                <p>선호장르</p>
            </div>
            <button type="submit" onClick={handleSignUp}>
                회원 가입
            </button>
        </SignInStyle>
    );
};

export default SignUp;
