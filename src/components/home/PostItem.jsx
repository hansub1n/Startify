import React, { useContext, useState } from "react";
import styled from "styled-components";
import { getYoutubeKey } from "../../utils";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const PostItem = ({ music }) => {
    const [isVideoPlayed, setIsVideoPlayed] = useState(false);
    const { postTitle, name, title, url, id } = music;
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const userId = user?.id;
    const thumbnailKey = getYoutubeKey(url);
    const likeCount = music.likes.length;
    const moveToDetail = () => {
        if (userId) {
            navigate(`/detail?id=${id}`);
        } else {
            alert("로그인페이지로 이동합니다.");
            navigate("/login");
        }
    };

    return (
        <ItemLi onClick={moveToDetail}>
            <h3>{postTitle}</h3>
            <ThumbnailWrap>
                <ImgIframeWrap>
                    <ThumbnailImg
                        $isVideoPlayed={isVideoPlayed}
                        src={`https://img.youtube.com/vi/${thumbnailKey}/0.jpg`}
                    />
                    <VideoIframe
                        $isVideoPlayed={isVideoPlayed}
                        width="300"
                        height="224"
                        src={`https://www.youtube.com/embed/${thumbnailKey}?mute=1&autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></VideoIframe>
                </ImgIframeWrap>
                <ThumbnailTextWrap $isVideoPlayed={isVideoPlayed}>
                    <LikesText>{likeCount}</LikesText>
                    <LikesButton>❤️</LikesButton>
                </ThumbnailTextWrap>
            </ThumbnailWrap>
            <p>
                {name} - {title}
            </p>
            <Button
                onClick={(e) => {
                    e.stopPropagation();
                    setIsVideoPlayed(!isVideoPlayed);
                }}
            >
                재생
            </Button>
        </ItemLi>
    );
};

export default PostItem;

const ItemLi = styled.li`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 360px;
    height: 400px;
    border-radius: 30px;
    border: 10px solid black;
    padding: 20px;
`;

const ThumbnailWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const ImgIframeWrap = styled.div`
    width: 300px;
    height: 224px;
`;

const ThumbnailImg = styled.img`
    display: ${({ $isVideoPlayed }) => ($isVideoPlayed ? "none" : "block")};
    width: 300px;
    height: 224px;
    object-fit: fill;
`;

const VideoIframe = styled.iframe`
    display: ${({ $isVideoPlayed }) => ($isVideoPlayed ? "block" : "none")};
    width: 300px;
    height: 224px;
`;

const ThumbnailTextWrap = styled.div`
    display: ${({ $isVideoPlayed }) => ($isVideoPlayed ? "none" : "flex")};
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

const LikesText = styled.p`
    /* color: white; */
    font-weight: 700;
`;

const LikesButton = styled.button`
    color: red;
    background-color: transparent;
    border: none;
`;
