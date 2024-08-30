import React from "react";
import PostItem from "./PostItem";
import styled from "styled-components";
import useMusicContext from "../../hooks/useMusicContext";

const PostItemList = ({ title, type }) => {
    const { songs } = useMusicContext();
    let musics = songs[type];
    return (
        <PostItemWrapper>
            <PostWrapTitle>{title}</PostWrapTitle>
            <PostItemsDiv>
                {musics.length ? (
                    musics.map((music) => {
                        return <PostItem key={music.id} music={music} />;
                    })
                ) : (
                    <p>어울리는 음악이 없습니다! 해당 계절에 어울리는 음악을 추가해주세요!</p>
                )}
            </PostItemsDiv>
        </PostItemWrapper>
    );
};

export default PostItemList;

const PostItemWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0px;
    box-sizing: border-box;
    padding: 20px 30px;
    background-color: #d4eaf7;
    border: 3px solid red;
    overflow: hidden;
`;

const PostWrapTitle = styled.h3`
    border-bottom: 1px solid black;
    width: 100%;
    padding: 10px 5px;
    margin-bottom: 40px;
    font-size: 28px;
    font-weight: bold;
`;

const PostItemsDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    width: 1800px;
    overflow-x: auto;
    padding-bottom: 10px;
`;
