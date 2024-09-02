import React, { useEffect, useRef, useState } from "react";
import App from "./../App";
import supabase from "../supabaseClient";
import styled from "styled-components";
import { SupabaseClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const SignUpContainer = styled.div`
    max-width: 600px;
    margin: 30px auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;

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
    }

    button:hover {
        background-color: #00668c;
    }
`;

const ImgUploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        padding: 10px;
        margin-bottom: 15px;
    }

    p {
        color: #3b3c3d;
        font-size: 14px;
    }
`;

const PhotoContainer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 20%;
    overflow: hidden;
    background-color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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

    p {
        color: #e74c3c;
        font-size: 20px;
        margin-top: 5px;

        text-align: center;
    }
`;

const SignUp = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userIntro, setUserIntro] = useState("");
    const [profileImgFile, setProfileImgFile] = useState(null);
    const [profileImgView, setProfileImgView] = useState(null);
    //유효성
    const [validUserEmailMessage, setValidUserEmailMessage] = useState(false);
    const [validUserPasswordMessage, setValidUserPasswordMessage] = useState("");
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    //유저테이블에 존재하는 이메일을 가져오기 및 이메일 중복체크
    useEffect(() => {
        CheckUserEmailData(userEmail);
    }, [userEmail]);

    const CheckUserEmailData = async (userEmail) => {
        const { data, error } = await supabase
            .from("STARTIFY_USER")
            .select("userEmail")
            .eq("userEmail", userEmail)
            .single();

        if (error || !data) {
            setValidUserEmailMessage("");
        } else if (data) {
            setValidUserEmailMessage("사용중인 이메일입니다.");
        }
    };

    const handleSetUserEmail = (event) => {
        const inputEmail = event.target.value;
        setUserEmail(inputEmail);
        CheckUserEmailData(inputEmail);
    };
    const handleSetUserPassword = (event) => {
        const inputPassword = event.target.value;
        setUserPassword(inputPassword);
        if (inputPassword.length < 6 && inputPassword.length > 0) {
            setValidUserPasswordMessage("비밀번호는 6자 이상이어야 합니다.🙂");
        } else {
            setValidUserPasswordMessage("");
        }
    };
    const handleSetUserName = (event) => {
        setUserName(event.target.value);
    };
    const handleSetUserIntro = (event) => {
        setUserIntro(event.target.value);
    };

    // 이미지 업로드
    const handleFileSelect = (event) => {
        const selectedImg = event.target.files[0];
        setProfileImgFile(selectedImg);

        if (selectedImg) {
            const imgReader = new FileReader();
            imgReader.readAsDataURL(selectedImg);
            imgReader.onloadend = () => {
                setProfileImgView(imgReader.result);
            };
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

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

        if (userPassword.length < 6) {
            setValidUserPasswordMessage("비밀번호는 6자 이상이어야 합니다.");
            return;
        }

        //이미지 업로드

        let profileImgUrl = null;
        if (profileImgFile) {
            const uniqueImgName = new Date().getTime();
            const imgFileName = `${uniqueImgName}_${profileImgFile.name}`;
            const { imgData, imgError } = await supabase.storage
                .from("startify_storage")
                .upload(`profileImgFolder/${imgFileName}`, profileImgFile);

            if (imgError) {
                alert("업로드 실패");
                return;
            } else {
                profileImgUrl = `https://lluyiezkzctkdodxpefi.supabase.co/storage/v1/object/public/startify_storage/profileImgFolder/${imgFileName}`;
            }
        }

        const { data, error } = await supabase.auth.signUp({
            email: userEmail,
            password: userPassword
        });

        if (error) {
            console.log("회원가입오류", error.message);
        } else {
            alert("회원가입이 완료되었습니다. 메인 페이지로 이동합니다.");
            navigate("/");

            const userUid = data.user.id;
            const { userData, userError } = await supabase.from("STARTIFY_USER").insert({
                user_id: userUid,
                userEmail: userEmail,
                userPassword: userPassword,
                userName: userName,
                userIntro: userIntro,
                profileImgUrl: profileImgUrl
            });
            if (userError) {
                console.log("유저테이블 에러", userError.message);
            }
        }
    };
    return (
        <SignUpContainer>
            <h2>회원가입</h2>
            <form onSubmit={handleSignUp}>
                <ImgUploadContainer className="userImgUpload">
                    <PhotoContainer>
                        {profileImgView ? <img src={profileImgView} alt="이미지" /> : <p>선택된 이미지가 없습니다.</p>}
                    </PhotoContainer>
                    <input type="file" id="userProfileImg" name="userProfileImg" onChange={handleFileSelect} />
                </ImgUploadContainer>

                <InputContainer>
                    <label>이메일*</label>
                    <input
                        type="email"
                        placeholder="이메일"
                        value={userEmail}
                        onChange={handleSetUserEmail}
                        ref={emailRef}
                    />
                    <p>{validUserEmailMessage}</p>
                    <label>비밀번호*</label>
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={userPassword}
                        onChange={handleSetUserPassword}
                        ref={passwordRef}
                    />
                    <p>{validUserPasswordMessage}</p>
                    <label>닉네임</label>
                    <input type="text" value={userName} placeholder="닉네임" onChange={handleSetUserName} />
                    <label>소개글</label>
                    <input type="text" placeholder="소개글" value={userIntro} onChange={handleSetUserIntro} />
                </InputContainer>
                <button type="submit">회원 가입</button>
            </form>
            {/* <button type="submit" onClick={() => navigate("/")}>
                메인으로
            </button> */}
        </SignUpContainer>
    );
};

export default SignUp;
