import React, { useState } from "react";
import supabase from "../supabaseClient";

const ModifyProfile = () => {
    const [targetId, setTargetId] = useState(0);
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userIntro, setUserIntro] = useState("");
    const [profileImgFile, setProfileImgFile] = useState();
    const [profileImgView, setProfileImgView] = useState();

    const handleModifyProfile = async (e) => {
        e.preventDefault();
        let profileImgUrl = null;
        if (profileImgFile) {
            const uniqueImgName = new Date().getTime();
            const imgFileName = `${uniqueImgName}_${profileImgFile.name}`;
            const { imgData, imgError } = await supabase.storage
                .from("startify_storage")
                .upload(`profileImgFolder/${imgFileName}`, profileImgFile);
            if (imgError) {
                console.log("imgError", imgError);
            } else {
                profileImgUrl = `https://lluyiezkzctkdodxpefi.supabase.co/storage/v1/object/public/startify_storage/profileImgFolder/${imgFileName}`;
            }
        }
    };

    const handleFileSelect = (e) => {
        const selectedImage = e.target.files[0];
        setProfileImgFile(selectedImage);

        if (selectedImage) {
            const imgReader = new FileReader();
            imgReader.readAsDataURL(selectedImage);
            imgReader.onloadend = () => {
                setProfileImgView(imgReader.result);
            };
        }
    };

    return (
        <>
            <h2>프로필 수정</h2>
            <form onSubmit={handleModifyProfile}>
                <div>
                    <p>이미지</p>
                    <input type="file" onChange={handleFileSelect} />
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
                <button type="submit">프로필 수정</button>
            </form>
        </>
    );
};

export default ModifyProfile;
