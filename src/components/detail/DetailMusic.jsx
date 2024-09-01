import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getYoutubeKey } from "../../utils";

const DetailMusic = ({ name, title, url, likes, hashtags }) => {
    // const [searchParams, setSearchParams] = useSearchParams(url);
    // const musicId = () => searchParams.get("v");
    const getEmbedLink = (url) => {
        const videoId = getYoutubeKey(url);
        return `https://www.youtube.com/embed/${videoId}?loop=1&autoplay=0&mute=1&playlist=${videoId}`;
    };
    return (
        <div>
            <StMusicDiv>
                <div>
                    {
                        <Preview>
                            <iframe
                                width="560"
                                height="315"
                                src={getEmbedLink(url)}
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="YouTube Video Preview"
                            ></iframe>
                        </Preview>
                    }
                </div>
                <StMusicInfoDiv>
                    <StMusicInfoTitleSpan>
                        {name} - {title}
                    </StMusicInfoTitleSpan>
                    <StMusicInfoHashDiv>
                        {hashtags.map((hashtag) => {
                            return <div key={hashtag}>#{hashtag}</div>;
                        })}
                    </StMusicInfoHashDiv>
                    <StMusicLikeBtnDiv>
                        <button>{likes}</button>
                    </StMusicLikeBtnDiv>
                </StMusicInfoDiv>
            </StMusicDiv>
        </div>
    );
};

export default DetailMusic;

const StMusicDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    margin: 15px 0 80px 0;
`;

const Preview = styled.div``;

const StMusicLinkDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StMusicImg = styled.img`
    display: flex;
    width: 1100px;
    height: 600px;
    object-fit: cover;
    border-radius: 30px;
`;

const StMusicBtn = styled.button`
    display: flex;
    position: absolute;
`;

const StMusicInfoDiv = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
`;

const StMusicLikeBtnDiv = styled.div`
    display: flex;
    position: absolute;
    top: 20px;
    right: 10px;
`;

const StMusicInfoTitleSpan = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin: 20px 0;
`;

const StMusicInfoHashDiv = styled.div`
    display: flex;
    color: #a9a9a9;
`;
