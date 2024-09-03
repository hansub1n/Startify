import React from "react";
import styled from "styled-components";

// 로그인

export const LoginContainer = styled.div`
    max-width: 600px;
    margin: 30px auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;

    img {
        max-height: 200px;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 30px;
        color: #3b3c3d;
    }

    button {
        padding: 10px 20px;
        background-color: #d9d9d9;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-bottom: 20px;
    }

    button:hover {
        background-color: #71c4ef;
    }

    p {
        color: #3b3c3d;
        font-size: 14px;
        margin: 10px;
        text-align: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    p:hover {
        color: #71c4ef;
    }
`;

// 프로필 수정

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    gap: 10px;
`;

// 가입

export const SignUpContainer = styled.div`
    max-width: 600px;
    margin: 30px auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;

    h2 {
        margin-bottom: 20px;
        font-size: 30px;
        color: #3b3c3d;
    }

    button {
        padding: 10px 20px;
        background-color: #d9d9d9;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #71c4ef;
    }
`;

export const ImgUploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        padding: 10px;
        margin-bottom: 15px;
    }

    p {
        color: #3b3c3d;
        font-size: 14px;
    }
`;

export const PhotoContainer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 20%;
    overflow: hidden;
    background-color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const InputContainer = styled.div`
    width: 100%;

    label {
        font-weight: bold;
        color: #3b3c3d;
        margin-bottom: 20px;
    }

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        margin-top: 10px;
        margin-bottom: 20px;
        border-radius: 4px;
        font-size: 14px;
        color: #3b3c3d;
        box-sizing: border-box;
    }

    p {
        color: #e74c3c;
        font-size: 20px;
        margin-top: 5px;

        text-align: center;
    }
`;

const UserStyle = () => <div>UserStyle</div>;

export default UserStyle;
