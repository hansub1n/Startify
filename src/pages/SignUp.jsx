import React, { useState } from "react";
import App from "./../App";
import supabase from "../supabaseClient";
import styled from "styled-components";
import { SupabaseClient } from "@supabase/supabase-js";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {
    const Navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userIntro, setUserIntro] = useState("");

    // const [profileImgFile, setProfileImgFile] = useState(null);
    // const [profileImgUrl, setProfileImgUrl] = useState(null);

    // const handleImgUpload = async () => {
    //     const imgFileName = profileImgFile.name;
    //     const { data, error } = await supabase.from("STARTIFY_USER").insert({ imgFileName, profileImgUrl });
    //     // from 뒤에 테이블 이름으로 바꾸기 :)

    //     if (error) {
    //         console.log("이미지업로드오류!");
    //         return;
    //     }

    //     const publicUrl = SupabaseClient.storage.from("STARTIFY_USER").getPublicUrl(imgFileName);
    //     setProfileImgUrl(publicUrl.data.publicUrl);
    // };

    const handleSignUp = async (e) => {
        e.preventDefault();
        console.log("Email:", userEmail);
        console.log("Password:", userPassword);
        const { data, error } = await supabase.auth.signUp({
            email: userEmail,
            password: userPassword
        });

        if (error) {
            console.log("회원가입오류!", error.message);
        } else {
            alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");

            const userUid = data.user.id;
            const { userData, userError } = await supabase
                .from("STARTIFY_USER")
                .insert({ user_id: userUid, userName: userName, userIntro: userIntro });
            if (userError) {
                console.log("유저테이블 에러", userError.message);
            } else {
                alert("유저테이블 저장", userData);
            }
        }
    };
    return (
        <div>
            <h2>회원가입</h2>
            {/* <div>
                {profileImgUrl && <img src={profileImgUrl} alt="Uploaded" />}
                <button type="button" onClick={handleImgUpload}>
                    이미지 업로드
                </button>
            </div> */}
            <form onSubmit={handleSignUp}>
                <div>
                    <label>이메일</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={userEmail}
                        onChange={(e) => {
                            setUserEmail(e.target.value);
                        }}
                    />
                    <label>비밀번호</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={userPassword}
                        onChange={(e) => {
                            setUserPassword(e.target.value);
                        }}
                    />
                    <label>닉네임</label>
                    <input
                        type="text"
                        value={userName}
                        placeholder="닉네임"
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                    <label>소개글</label>
                    <input
                        type="text"
                        placeholder="소개글"
                        value={userIntro}
                        onChange={(e) => {
                            setUserIntro(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <p>선호장르</p>
                </div>
                <button type="submit">회원 가입</button>
            </form>
        </div>
    );
};

export default SignUp;
