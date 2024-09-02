import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
    max-width: 600px;
    margin: 30px auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;

    img {
        max-height: 200px;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 30px;
        color: #3b3c3d;
    }

    button {
        padding: 10px 20px;
        background-color: #3b3c3d;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-bottom: 20px;
    }

    button:hover {
        background-color: #00668c;
    }

    p {
        color: #3b3c3d;
        font-size: 14px;
        margin: 10px;
        text-align: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    p:hover {
        color: #00668c;
    }
`;

const InputContainer = styled.div`
    width: 100%;

    label {
        font-weight: bold;
        color: #3b3c3d;
        margin-bottom: 20px;
    }

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        margin-top: 10px;
        margin-bottom: 20px;
        border-radius: 4px;
        font-size: 14px;
        color: #3b3c3d;
        box-sizing: border-box;
    }
`;

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
            <h2>로그인</h2>
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
