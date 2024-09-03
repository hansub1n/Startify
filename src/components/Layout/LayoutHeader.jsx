import styled from "styled-components";
import temporalLogo from "../../assets/temporalLogo.png";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import supabase from "../../supabaseClient";

const LayoutHeader = () => {
    const { user } = useContext(UserContext);
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
                if (error) {
                    console.log("accountError", error);
                } else {
                    setAccount(data);
                }
            } else {
                setAccount(null);
            }
        };
        fetchAccountData();
    }, [user]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        alert("로그아웃 완료. 메인페이지로 갑니다🚀");
        navigate("/");
    };

    if (user === undefined || account === undefined) {
        return <div>로딩중..</div>;
    }

    return (
        <Header>
            <HeaderNav>
                <LogoImg src={temporalLogo} alt="로고이미지" onClick={goToHome} />
                <HeaderTitle onClick={goToHome}>Startify</HeaderTitle>
                <LoginUl>
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
                </LoginUl>
            </HeaderNav>
        </Header>
    );
};

export default LayoutHeader;

const Header = styled.header`
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const HeaderNav = styled.nav`
    display: flex;
    flex-direction: row;
    width: 90vw;
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
