import PostItem from "./PostItem";
import styled from "styled-components";
import { useState } from "react";

const PostItemList = ({ songs, title }) => {
    const [isListOpen, setIsListOpen] = useState(false);

    return (
        <PostItemWrapper>
            <PostWrapTitle>{title}</PostWrapTitle>
            <PostItemsDiv $isListOpen={isListOpen}>
                {songs.length ? (
                    songs.map((music) => {
                        return <PostItem key={music.id} music={music} />;
                    })
                ) : (
                    <p>어울리는 음악이 없습니다! 해당 계절에 어울리는 음악을 추가해주세요!</p>
                )}
            </PostItemsDiv>
            {songs.length > 4 ? (
                <ListOpenButton onClick={() => setIsListOpen(!isListOpen)}>{isListOpen ? "▲" : "▼"}</ListOpenButton>
            ) : null}
        </PostItemWrapper>
    );
};

export default PostItemList;

const PostItemWrapper = styled.ul`
    background-color: #e5f3fc;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0px;
    box-sizing: border-box;
    padding: 20px 30px;
`;

const PostWrapTitle = styled.h3`
    border-bottom: 1px solid black;
    width: 100%;
    padding: 10px 5px 20px 5px;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: bold;
`;

const PostItemsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 20px;
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    padding-bottom: 10px;
    max-height: ${({ $isListOpen }) => ($isListOpen ? "3000px" : "500px")};
    transition: max-height 0.5s ease-in-out;
    height: auto;
    padding-top: 20px;
`;

const ListOpenButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
    padding: 3px 0px;
    cursor: pointer;
    &:hover {
        background-color: #cbe2ee;
    }
`;
