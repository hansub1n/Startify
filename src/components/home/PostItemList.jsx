import React from "react";
import PostItem from "./PostItem";
import styled from "styled-components";

const PostItemList = ({ title }) => {
    return (
        <PostItemWrapper>
            <PostWrapTitle>{title}</PostWrapTitle>
            <PostItemsDiv>
                {/* {musics.map((music) => {
            const youtube_key = getYoutubeKey(music.url);
            const thumbnail = `https://img.youtube.com/vi/${youtube_key}/0.jpg`;
            return (
                <div key={music.id}>
                    <p>{music.postTitle}</p>
                    <img src={thumbnail} alt={music.title} />
                </div>
            );
        })} */}
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
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
