import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { InputContainer, LoginContainer } from "../components/userInfo/UserStyle";

const Login = () => {
    const { user } = useContext(UserContext);
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLost = () => {
        alert("슬픈일이네요ㅠ");
    };

    const handleNoMember = () => {
        alert("가입하세요");
        navigate("/signup");
    };
    const handleLogin = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email: userEmail,
            password: userPassword
        });

        if (!userEmail) {
            alert("이메일을 입력해주세요.");
            emailRef.current.focus();
            return;
        }

        if (!userPassword) {
            passwordRef.current.focus();
            alert("비밀번호를 입력해주세요.");
            return;
        }

        if (error) {
            alert("로그인실패! 로그인정보를 다시 확인해주세요.");
            console.log("로그인오류!", error.message);
        } else {
            alert("로그인완료! 메인페이지로 이동합니다.");
            navigate("/");
        }
    };

    return (
        <LoginContainer>
            <div>
                <img src="https://lluyiezkzctkdodxpefi.supabase.co/storage/v1/object/public/startify_storage/profileImgFolder/temporalLogo.png" />
            </div>
            <h2>당신을 위한 노래</h2>
            <h2>스타티파이</h2>
            <form onSubmit={handleLogin}>
                <InputContainer>
                    <label>이메일</label>
                    <input
                        type="email"
                        placeholder="이메일"
                        value={userEmail}
                        onChange={(e) => {
                            setUserEmail(e.target.value);
                        }}
                        ref={emailRef}
                    />
                    <label>비밀번호</label>
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={userPassword}
                        onChange={(e) => {
                            setUserPassword(e.target.value);
                        }}
                        ref={passwordRef}
                    />
                </InputContainer>
                <button type="submit">로그인</button>
            </form>
            <p onClick={handleLost}>아이디/비밀번호를 잊었나요?</p>
            <p onClick={handleNoMember}>회원이 아니신가요?</p>
        </LoginContainer>
    );
};

export default Login;
