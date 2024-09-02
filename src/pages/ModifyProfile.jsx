import React, { useContext, useEffect, useRef, useState } from "react";
import App from "./../App";
import supabase from "../supabaseClient";
import styled from "styled-components";
import { SupabaseClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

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
            const uniqueImgName = new Date().getTime();
            const imgFileName = `${uniqueImgName}_${profileImgFile.name}`;
            const { imgData, imgError } = await supabase.storage
                .from("startify_storage")
                .upload(`profileImgFolder/${imgFileName}`, profileImgFile);

            if (imgError) {
                alert("업로드 실패", imgError);
                return;
            } else {
                profileImgUrl = `https://lluyiezkzctkdodxpefi.supabase.co/storage/v1/object/public/startify_storage/profileImgFolder/${imgFileName}`;
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
        <SignUpContainer>
            <h2>프로필 수정</h2>
            <form onSubmit={handleModifyProfile}>
                <ImgUploadContainer className="userImgUpload">
                    <PhotoContainer>
                        {profileImgView ? <img src={profileImgView} alt="이미지" /> : <p>선택된 이미지가 없습니다.</p>}
                    </PhotoContainer>
                    <input type="file" id="userProfileImg" name="userProfileImg" onChange={handleFileSelect} />
                </ImgUploadContainer>

                <InputContainer>
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
                </InputContainer>
                <button type="submit">프로필 수정</button>
            </form>
        </SignUpContainer>
    );
};

export default ModifyProfile;
