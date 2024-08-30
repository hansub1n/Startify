import styled from "styled-components";
import temporalLogo from "../../assets/temporalLogo.png";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import supabase from "../../supabaseClient";

const LayoutHeader = () => {
    const { user } = useContext(UserContext);
    const handleSignOut = async () => {
        await supabase.auth.signOut();
        alert("로그아웃 완료. 메인페이지로 갑니다🚀");
        navigate("/");
    };

    const isLogin = true;
    // const isLogin = localStorage.getItem(userToken) ? true : false
    const userName = "ㅇㅇㅇ";
    // const userName = localStorage.getItem(userName)

    const navigate = useNavigate();
    const goToHome = () => navigate("/");
    return (
        <Header>
            <HeaderNav>
                <LogoImg src={temporalLogo} alt="로고이미지" onClick={goToHome} />
                <HeaderTitle onClick={goToHome}>Startify</HeaderTitle>
                <LoginUl>
                    {isLogin ? (
                        <>
                            <p>{user ? <>{user.email}님 안녕하세요!</> : <>로그인이 필요합니다.</>}</p>

                            {user ? (
                                <>
                                    <Button onClick={() => navigate("/profile")}>마이페이지</Button>
                                    <Button onClick={handleSignOut}>로그아웃</Button>
                                </>
                            ) : (
                                <>
                                    <Button onClick={() => navigate("/login")}>로그인</Button>
                                    <Button onClick={() => navigate("/signup")}>회원가입</Button>
                                </>
                            )}
                        </>
                    ) : (
                        <></>
                    )}
                </LoginUl>
            </HeaderNav>
        </Header>
    );
};

export default LayoutHeader;

const Header = styled.header`
    /* position: fixed; */
    margin-bottom: 10px;
`;

const HeaderNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 5px solid #d4eaf7;
    padding: 10px 50px;
`;

const LogoImg = styled.img`
    width: 200px;
    height: 120px;
`;

const HeaderTitle = styled.h1`
    font-size: 30px;
`;

const LoginUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
