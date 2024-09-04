import styled from "styled-components";

// ProfileHeader.jsx
export const ProfileHeaderWrap = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const ProfileHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    margin: 0 auto;
`;

export const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
    gap: 1rem;
`;

export const ProfileImgBox = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 70%;
    overflow: hidden;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const ProfileTxtBox = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ProfileUserName = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;
export const ProfileEmail = styled.span`
    padding: 4px 10px;
`;

export const Button = styled.button`
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #71c4ef;
    color: #fff;
    border: none;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
    }

    &:active {
        background-color: #004494;
    }
`;
export const ProfileNavigation = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    margin: 0 auto;
    padding-left: 20px;
    font-size: 1.2rem;
    & li {
        padding: 8px;
    }
`;

// Intro.jsx
export const ProfileContentContainer = styled.section`
    display: flex;
    width: 1280px;
    margin: 0 auto;
`;
export const ProfileContent = styled.div`
    padding: 24px 20px;
`;

// Created.jsx
export const ItemCounter = styled.div`
    padding-bottom: 20px;
    font-size: 14px;
`;

export const ItemsContainer = styled.div``;
export const Items = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

// CreatedItem.jsx
export const ItemImgBox = styled.div`
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const ItemTxtBox = styled.div`
    text-align: center;
`;
export const LikesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    padding: 5px;
    background-color: rgb(255, 255, 255, 0.4);
    border-radius: 10px;
`;
