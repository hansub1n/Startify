import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import temporalLogo from "../../assets/temporalLogo.png";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
<<<<<<< HEAD
import { useContext, useEffect, useState } from "react";
=======
>>>>>>> 822d9a396e2d4142567d2dab7ee0fb0c4a033bcf
import supabase from "../../supabaseClient";

const LayoutHeader = () => {
    const { user } = useContext(UserContext);
<<<<<<< HEAD
    const [account, setAccount] = useState();
    const navigate = useNavigate();
    const goToHome = () => navigate("/");

    useEffect(() => {
        const fetchAccountData = async () => {
            if (user) {
                const { data, error } = await supabase
                    .from("STARTIFY_USER")
                    .select("id, userName,user_id")
                    .eq("user_id", user.id)
                    .single();
=======
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

>>>>>>> 822d9a396e2d4142567d2dab7ee0fb0c4a033bcf
                if (error) {
                    console.log("accountError", error);
                } else {
                    setAccount(data);
                }
<<<<<<< HEAD
            } else {
                setAccount(null);
            }
        };
=======
            }
        };

>>>>>>> 822d9a396e2d4142567d2dab7ee0fb0c4a033bcf
        fetchAccountData();
    }, [user]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        alert("로그아웃 완료. 메인페이지로 갑니다🚀");
        navigate("/");
    };

<<<<<<< HEAD
    if (user === undefined || account === undefined) {
        return <div>로딩중..</div>;
    }
=======
    const goToHome = () => navigate("/");
>>>>>>> 822d9a396e2d4142567d2dab7ee0fb0c4a033bcf

    return (
        <Header>
            <HeaderNav>
                <LogoImg src={temporalLogo} alt="로고이미지" onClick={goToHome} />

                <LoginUl>
<<<<<<< HEAD
                    <>
                        <p>{account ? <>{account.userName}님 안녕하세요!</> : <>로그인이 필요합니다.</>}</p>

                        {account ? (
                            <>
                                <Button onClick={() => navigate("/form")}>노래 공유하기</Button>
                                <Button onClick={() => navigate(`/profile?id=${account.id}`)}>마이페이지</Button>
                                <Button onClick={handleSignOut}>로그아웃</Button>
                            </>
                        ) : (
                            <>
                                <Button onClick={() => navigate("/login")}>로그인</Button>
                                <Button onClick={() => navigate("/signup")}>회원가입</Button>
                            </>
                        )}
                    </>
=======
                    {user ? (
                        <UserGreeting>
                            {account?.profileImgUrl && <UserImage src={account.profileImgUrl} alt="유저 프로필" />}
                            {/* <p>{account?.userName ? `${account.userName}님 안녕하세요!` : "님 안녕하세요!"}</p> */}
                            <LayoutButton onClick={() => navigate("/form")}>노래 공유하기</LayoutButton>
                            <LayoutButton onClick={() => navigate(`/profile/${user.id}`)}>마이페이지</LayoutButton>
                            <LayoutButton onClick={handleSignOut}>로그아웃</LayoutButton>
                        </UserGreeting>
                    ) : (
                        <>
                            <LayoutButton onClick={() => navigate("/login")}>로그인</LayoutButton>
                            <LayoutButton onClick={() => navigate("/signup")}>회원가입</LayoutButton>
                        </>
                    )}
>>>>>>> 822d9a396e2d4142567d2dab7ee0fb0c4a033bcf
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
    align-items: flex-end;
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
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`;
const LayoutButton = styled.button`
    font-family: "SUITE-Regular";
    display: block;
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #71c4ef;
    color: #fff;
    border: none;
    border-radius: 20px;
    font-size: 15px;
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
