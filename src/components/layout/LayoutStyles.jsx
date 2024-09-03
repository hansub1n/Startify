import styled from "styled-components";

export const Header = styled.header`
    font-family: "SUITE-Regular";
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const HeaderNav = styled.nav`
    align-items: flex-end;
    font-family: "SUITE-Regular";
    display: flex;
    flex-direction: row;
    width: 90vw;
    justify-content: space-between;
    border-bottom: 5px solid #d4eaf7;
    padding: 10px 50px;
`;

export const LogoImg = styled.img`
    width: 200px;
    height: 100px;
`;

export const LoginUl = styled.ul`
    font-family: "SUITE-Regular";
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const UserGreeting = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const UserImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`;
export const LayoutButton = styled.button`
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
