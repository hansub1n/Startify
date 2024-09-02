import { styled } from "styled-components";

export const Container = styled.div`
    align-items: center;
    justify-content: center;
    width: 1000px;
    height: 800px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;
export const Text = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    gap: 30px;
    line-height: 2.5;
    font-size: 17px;
`;

export const VideoWrapper = styled.div`
    flex: 1;
    justify-content: center;
`;

export const FormWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const PostTitle = styled.input`
    font-size: 36px;
    margin: 0 auto;
    color: #000000;
    width: 97%;
    height: 80px;
    font-size: 24px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding-left: 20px;
    border-radius: 20px;
`;
export const SongTitle = styled.div`
    input {
        width: 77%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 20px;
        background-color: #d4eaf7;
        height: 10px;
    }
`;
export const YoutubeLink = styled.div`
    input {
        width: 74%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 20px;
        background-color: #71c4ef;
        height: 10px;
    }
`;
export const Desc = styled.div`
    textarea {
        width: 95%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 20px;
        background-color: #d4eaf7;
        height: 250px;
        margin-top: 10px;
    }
`;
export const Name = styled.div`
    input {
        width: 77%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 20px;
        background-color: #71c4ef;
        height: 10px;
    }
`;
export const Genre = styled.div`
    select {
        width: 90%;
        padding: 10px 20px;
        appearance: none;
        background-color: #d4eaf7;
        border: 1px solid #ccc;
        border-radius: 20px;
        font-size: 16px;
        color: #333;
        outline: none;
        cursor: pointer;
        transition: border-color 0.3s ease;

        &:hover {
            border-color: #999;
        }

        &:focus {
            border-color: #007bff;
        }
    }
`;

export const Hashtags = styled.div`
    input {
        width: 78%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 20px;
        background-color: #71c4ef;
        height: 10px;
    }
`;
export const Button = styled.button`
    display: block;
    margin-top: 10px;
    margin-left: auto;
    padding: 12px 24px;
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
//유튜브화면
export const Preview = styled.div`
    margin-top: 20px;
    iframe {
        width: 480px;
        height: 270px;
        border-radius: 20px;
    }
`;
//유튜브화면 멘트
export const PlaceholderMessage = styled.div`
    margin-top: 20px;
    width: 480px;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed gray;
    color: gray;
    font-size: 20px;
    border-radius: 20px;
`;
export const Tag = styled.div`
    display: inline-block;
    background-color: #00668c;
    color: #ffffff;
    padding: 8px 12px;
    border-radius: 20px;
    margin: 4px;
    font-size: 14px;
    line-height: 1.5;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        background-color: #71c4ef;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }

    &:active {
        background-color: #a8d8ff;
    }
`;
