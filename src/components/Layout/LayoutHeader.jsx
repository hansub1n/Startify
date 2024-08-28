import styled from "styled-components";
import temporalLogo from "../../assets/temporalLogo.png";
import Button from "../common/Button";

const LayoutHeader = () => {
    const isLogin = true;
    // const isLogin = localStorage.getItem(userToken) ? true : false
    const userName = "ㅇㅇㅇ";
    // const userName = localStorage.getItem(userName)
    return (
        <Header>
            <HeaderNav>
                <LogoImg src={temporalLogo} alt="로고이미지" />
                <HeaderTitle>Startify</HeaderTitle>
                <LoginUl>
                    {isLogin ? (
                        <>
                            <p>{userName}님</p>
                            <Button>마이페이지</Button>
                            <Button>로그아웃</Button>{" "}
                        </>
                    ) : (
                        <>
                            <Button>로그인</Button>
                            <Button>회원가입</Button>
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
    padding: 10px;
`;

const LogoImg = styled.img`
    width: 30px;
    height: 30px;
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
