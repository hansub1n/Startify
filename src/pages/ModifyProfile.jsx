import React, { useState } from "react";

const ModifyProfile = () => {
    const [targetId, setTargetId] = useState(0);
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userIntro, setUserIntro] = useState("");
    return (
        <>
            <h2>프로필 수정</h2>
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
        </>
    );
};

export default ModifyProfile;
