import React, { useEffect, useState, useContext } from "react";
import temporalLogo from "../../assets/temporalLogo.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import supabase from "../../supabaseClient";
import * as Style from "./LayoutStyles";

const LayoutHeader = () => {
    const { user } = useContext(UserContext);
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAccountData = async () => {
            if (user && user.id) {
                const { data, error } = await supabase
                    .from("STARTIFY_USER")
                    .select("id,profileImgUrl, userName")
                    .eq("user_id", user.id)
                    .single();

                if (error) {
                    console.log("accountError", error);
                } else {
                    setAccount(data);
                }
            }
        };

        fetchAccountData();
    }, [user]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        alert("로그아웃 완료. 메인페이지로 갑니다🚀");
        navigate("/");
    };

    const goToHome = () => navigate("/");

    return (
        <Style.Header>
            <Style.HeaderNav>
                <Style.LogoImg src={temporalLogo} alt="로고이미지" onClick={goToHome} />
                <Style.LoginUl>
                    {user ? (
                        <Style.UserGreeting>
                            {account?.profileImgUrl && (
                                <Style.UserImage src={account.profileImgUrl} alt="유저 프로필" />
                            )}
                            <Style.LayoutButton onClick={() => navigate("/form")}>노래 공유하기</Style.LayoutButton>
                            <Style.LayoutButton onClick={() => navigate(`/profile?id=${account.id}`)}>
                                마이페이지
                            </Style.LayoutButton>
                            <Style.LayoutButton onClick={handleSignOut}>로그아웃</Style.LayoutButton>
                        </Style.UserGreeting>
                    ) : (
                        <>
                            <Style.LayoutButton onClick={() => navigate("/login")}>로그인</Style.LayoutButton>
                            <Style.LayoutButton onClick={() => navigate("/signup")}>회원가입</Style.LayoutButton>
                        </>
                    )}
                </Style.LoginUl>
            </Style.HeaderNav>
        </Style.Header>
    );
};

export default LayoutHeader;
