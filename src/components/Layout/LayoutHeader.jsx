import styled from "styled-components";
import temporalLogo from "../../assets/temporalLogo.png";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const LayoutHeader = () => {
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
                            <p>{userName}님</p>
                            <Button onClick={() => navigate("/profile")}>마이페이지</Button>
                            <Button>로그아웃</Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={() => navigate("/login")}>로그인</Button>
                            <Button onClick={() => navigate("signup")}>회원가입</Button>
                        </>
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
