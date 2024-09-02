import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import temporalLogo from "../../assets/temporalLogo.png";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import supabase from "../../supabaseClient";

const LayoutHeader = () => {
    const { user } = useContext(UserContext);
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAccountData = async () => {
            if (user && user.id) {
                const { data, error } = await supabase
                    .from("STARTIFY_USER")
                    .select("profileImgUrl, userName")
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
        <Header>
            <HeaderNav>
                <LogoImg src={temporalLogo} alt="로고이미지" onClick={goToHome} />
                <HeaderTitle onClick={goToHome}>Startify</HeaderTitle>
                <LoginUl>
                    {user ? (
                        <UserGreeting>
                            {account?.profileImgUrl && <UserImage src={account.profileImgUrl} alt="유저 프로필" />}
                            <p>{account?.userName ? `${account.userName}님 안녕하세요!` : "님 안녕하세요!"}</p>
                            <Button onClick={() => navigate("/form")}>노래 공유하기</Button>
                            <Button onClick={() => navigate(`/profile/${user.id}`)}>마이페이지</Button>
                            <Button onClick={handleSignOut}>로그아웃</Button>
                        </UserGreeting>
                    ) : (
                        <>
                            <Button onClick={() => navigate("/login")}>로그인</Button>
                            <Button onClick={() => navigate("/signup")}>회원가입</Button>
                        </>
                    )}
                </LoginUl>
            </HeaderNav>
        </Header>
    );
};

export default LayoutHeader;

const Header = styled.header`
    font-family: "SUITE-Regular";
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const HeaderNav = styled.nav`
    font-family: "SUITE-Regular";
    display: flex;
    flex-direction: row;
    width: 90vw;
    justify-content: space-between;
    border-bottom: 5px solid #d4eaf7;
    padding: 10px 50px;
`;

const LogoImg = styled.img`
    width: 200px;
    height: 100px;
`;

const HeaderTitle = styled.h1`
    font-family: "SUITE-Regular";
    font-size: 30px;
`;

const LoginUl = styled.ul`
    font-family: "SUITE-Regular";
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const UserGreeting = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const UserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;
const Button = styled.button`
    font-family: "SUITE-Regular";
    display: block;
    padding: 10px 24px;
    background-color: #71c4ef;
    color: #fff;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
    }

    &:active {
        background-color: #004494;
        transform: translateY(0);
    }
`;
