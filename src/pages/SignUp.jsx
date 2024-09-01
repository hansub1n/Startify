import React, { useEffect, useState } from "react";
import App from "./../App";
import supabase from "../supabaseClient";
import styled from "styled-components";
import { SupabaseClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userIntro, setUserIntro] = useState("");
    const [profileImgFile, setProfileImgFile] = useState(null);
    //유효성
    const [validUserEmailMessage, setValidUserEmailMessage] = useState(false);
    const [validUserPasswordMessage, setValidUserPasswordMessage] = useState("");

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
        if (inputPassword.length < 6) {
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
    const handleFileSelect = (event) => {
        setProfileImgFile(event.target.files[0]);
    };

    // 이미지 업로드
    const handleImgUpload = async () => {
        if (!profileImgFile) {
            alert("파일을 선택해주세요.");
            return;
        }
        const { data, error } = await supabase.storage
            .from("startify_storage")
            .upload(`profileImgFolder/${profileImgFile.name}`, profileImgFile);

        if (error) {
            alert("이미지 파일을 확인해주세요. 확장자는 png, jpeg, jpg, gif만 가능합니다.");
            return;
        } else {
            alert("이미지 업로드 성공");
            return data;
        }
    };
    const handleSignUp = async (e) => {
        e.preventDefault();

        if (!userEmail || !userPassword) {
            alert("이메일과 비밀번호는 필수입니다.");
            return;
        }

        if (userPassword.length < 6) {
            setValidUserPasswordMessage("비밀번호는 6자 이상이어야 합니다.");
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email: userEmail,
            password: userPassword
        });

        if (error) {
            console.log("회원가입오류!", error.message);
        } else {
            alert("회원가입이 완료되었습니다. 메인 페이지로 이동합니다.");
            navigate("/");

            const userUid = data.user.id;
            const { userData, userError } = await supabase.from("STARTIFY_USER").insert({
                user_id: userUid,
                userEmail: userEmail,
                userPassword: userPassword,
                userName: userName,
                userIntro: userIntro
            });
            if (userError) {
                console.log("유저테이블 에러", userError.message);
            }
        }
    };
    return (
        <div>
            <h2>회원가입</h2>
            <form onSubmit={handleSignUp}>
                <div className="userImgUpload">
                    <input
                        type="file"
                        id="userProfileImg"
                        name="userProfileImg"
                        accept="image/png, image/jpeg, image/jpg, image/gif"
                        onChange={handleFileSelect}
                    />
                    <button type="button" onClick={handleImgUpload}>
                        이미지 업로드
                    </button>
                </div>

                <div>
                    <label>이메일</label>
                    <input type="email" placeholder="Email" value={userEmail} onChange={handleSetUserEmail} />
                    <p>{validUserEmailMessage}</p>
                    <label>비밀번호</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={userPassword}
                        onChange={handleSetUserPassword}
                    />
                    <p>{validUserPasswordMessage}</p>
                    <label>닉네임</label>
                    <input type="text" value={userName} placeholder="닉네임" onChange={handleSetUserName} />
                    <label>소개글</label>
                    <input type="text" placeholder="소개글" value={userIntro} onChange={handleSetUserIntro} />
                </div>
                <button type="submit">회원 가입</button>
            </form>
            {/* <button type="submit" onClick={() => navigate("/")}>
                메인으로
            </button> */}
        </div>
    );
};

export default SignUp;
