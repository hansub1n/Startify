import PostItem from "./PostItem";
import styled from "styled-components";
import { useEffect, useState } from "react";

const PostItemList = ({ songs, title, index }) => {
    const [isListOpen, setIsListOpen] = useState(false);

    const a = matchMedia("screen and (min-width: 1660px)");
    const b = matchMedia("screen and (min-width: 1200px) and (max-width: 1659px)");
    const c = matchMedia("screen and (min-width: 840px) and (max-width: 1199px)");
    const d = matchMedia("screen and (max-width: 839px)");

    // const [aa, setAA] = useState(matchMedia("screen and (min-width: 1660px)"))
    // useEffect(()=>{

    // }, [window.innerWidth])

    return (
        <PostItemWrapper $index={index}>
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
            {a.matches && songs.length > 4 ? (
                <ListOpenButton $index={index} $isListOpen={isListOpen} onClick={() => setIsListOpen(!isListOpen)}>
                    {isListOpen ? "▲" : "▼"}
                </ListOpenButton>
            ) : null}
            {b.matches && songs.length > 3 ? (
                <ListOpenButton $index={index} $isListOpen={isListOpen} onClick={() => setIsListOpen(!isListOpen)}>
                    {isListOpen ? "▲" : "▼"}
                </ListOpenButton>
            ) : null}
            {c.matches && songs.length > 2 ? (
                <ListOpenButton $index={index} $isListOpen={isListOpen} onClick={() => setIsListOpen(!isListOpen)}>
                    {isListOpen ? "▲" : "▼"}
                </ListOpenButton>
            ) : null}
            {d.matches && songs.length > 1 ? (
                <ListOpenButton $index={index} $isListOpen={isListOpen} onClick={() => setIsListOpen(!isListOpen)}>
                    {isListOpen ? "▲" : "▼"}
                </ListOpenButton>
            ) : null}
        </PostItemWrapper>
    );
};

export default PostItemList;

const PostItemWrapper = styled.ul`
    background-color: ${({ $index }) => ($index % 2 == 0 ? "#e5f3fc" : "#6fabda")};
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
    font-family: "SUITE-Regular";
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
    max-height: ${({ $isListOpen }) => ($isListOpen ? "5000px" : "500px")};
    transition: max-height ${({ $isListOpen }) => ($isListOpen ? "2s ease-in-out" : "1s ease-in-out")};
    height: auto;
    padding: 20px 10px;

    @media all and (min-width: 1200px) and (max-width: 1659px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media all and (min-width: 840px) and (max-width: 1199px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media all and (max-width: 839px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const ListOpenButton = styled.div`
    background-color: ${({ $index }) => ($index % 2 == 0 ? "#e5f3fc" : "#6fabda")};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
    padding: 3px 0px;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
        filter: brightness(0.95);
    }
`;
