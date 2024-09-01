import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { user } = useContext(UserContext);
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const navigate = useNavigate();

    console.log("유저:", user);
    const handleLogin = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email: userEmail,
            password: userPassword
        });

        if (error) {
            alert("로그인실패! 로그인정보를 다시 확인해주세요.");
            console.log("로그인오류!", error.message);
        } else {
            alert("로그인완료! 메인페이지로 이동합니다.");
            navigate("/");
        }
    };

    return (
        <>
            <div>로고</div>
            <p>당신을 위한 노래</p>
            <form onSubmit={handleLogin}>
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
                <button type="submit">로그인</button>
            </form>
            <p>아이디/비밀번호를 잊었나요?</p>
            <p onClick={() => navigate("/signup")}>회원이 아니신가요?</p>
        </>
    );
};

export default Login;
