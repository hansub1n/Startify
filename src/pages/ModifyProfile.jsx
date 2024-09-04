import React, { useContext, useEffect, useRef, useState } from "react";
import App from "./../App";
import supabase from "../supabaseClient";
import styled from "styled-components";
import { SupabaseClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import * as Style from "../components/userInfo/UserStyle";

const ModifyProfile = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [userIntro, setUserIntro] = useState("");
    const [profileImgFile, setProfileImgFile] = useState(null);
    const [profileImgView, setProfileImgView] = useState(null);
    const [userPassword, setUserPassword] = useState("");
    const passwordRef = useRef(null);

    useEffect(() => {
        if (user) {
            const loginUserInfo = async () => {
                const { data, error } = await supabase
                    .from("STARTIFY_USER")
                    .select("userName, userIntro, userPassword, profileImgUrl")
                    .eq("user_id", user.id)
                    .single();

                if (data) {
                    setUserName(data.userName);
                    setUserIntro(data.userIntro);
                    setProfileImgView(data.profileImgUrl);
                } else {
                    console.log("에러", error);
                }
            };
            loginUserInfo();
        }
    }, [user]);

    const handleSetUserPassword = (event) => {
        const inputPassword = event.target.value;
        setUserPassword(inputPassword);
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

    const handleModifyProfile = async (e) => {
        e.preventDefault();
        if (!userPassword) {
            passwordRef.current.focus();
            alert("비밀번호를 입력해주세요.");
            return;
        }

        //비밀번호확인
        const { data, error } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: userPassword
        });

        if (error) {
            alert("비밀번호를 확인해주세요.");
            return;
        }

        //이미지 업로드
        let profileImgUrl = profileImgView;
        if (profileImgFile) {
            const lastDot = profileImgFile.name.lastIndexOf(".");
            const fileExtension = profileImgFile.name.substring(lastDot + 1);
            const newFileName = Math.random().toString(36).substr(2, 11);
            const uniqueImgName = new Date().getTime();
            const imgFileName = `${uniqueImgName}_${newFileName}`;
            const { imgData, imgError } = await supabase.storage
                .from("startify_storage")
                .upload(`profileImgFolder/${imgFileName}.${fileExtension}`, profileImgFile);

            if (imgError) {
                alert("업로드 실패", imgError);
                return;
            } else {
                profileImgUrl = `https://lluyiezkzctkdodxpefi.supabase.co/storage/v1/object/public/startify_storage/profileImgFolder/${imgFileName}.${fileExtension}`;
            }
            console.log("Uploaded Data:", imgData);
        }

        //프로필 수정
        const { modifyData, modifyError } = await supabase
            .from("STARTIFY_USER")
            .update({
                userName: userName,
                userIntro: userIntro,
                profileImgUrl: profileImgUrl
            })
            .eq("user_id", user.id);

        if (modifyError) {
            alert("프로필 수정 에러 💢");
        } else {
            alert("프로필 수정 완료 😃");
        }
    };

    return (
        <Style.SignUpContainer>
            <h2>프로필 수정</h2>
            <form onSubmit={handleModifyProfile}>
                <Style.ImgUploadContainer className="userImgUpload">
                    <Style.PhotoContainer>
                        {profileImgView ? <img src={profileImgView} alt="이미지" /> : <p>선택된 이미지가 없습니다.</p>}
                    </Style.PhotoContainer>
                    <input type="file" id="userProfileImg" name="userProfileImg" onChange={handleFileSelect} />
                </Style.ImgUploadContainer>

                <Style.InputContainer>
                    <label>닉네임</label>
                    <input type="text" value={userName} placeholder="닉네임" onChange={handleSetUserName} />
                    <label>소개글</label>
                    <input type="text" value={userIntro} placeholder="소개글" onChange={handleSetUserIntro} />
                    <label>비밀번호*</label>
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={userPassword}
                        onChange={handleSetUserPassword}
                        ref={passwordRef}
                    />
                </Style.InputContainer>
                <Style.ButtonContainer>
                    <button type="submit">프로필 수정</button>
                </Style.ButtonContainer>
            </form>
        </Style.SignUpContainer>
    );
};

export default ModifyProfile;
