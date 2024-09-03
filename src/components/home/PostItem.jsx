import React, { useState } from "react";
import { getYoutubeKey } from "../../utils";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import playButton from "../../assets/playButton.png";
import likeImg from "../../assets/like.png";
import * as Style from "./HomeStyles";

const PostItem = ({ music }) => {
    const [isVideoPlayed, setIsVideoPlayed] = useState(false);
    const { postTitle, name, title, url, id } = music;
    const navigate = useNavigate();
    const thumbnailKey = getYoutubeKey(url);
    const likeCount = music.likes.length;

    return (
        <Style.ItemLi onClick={() => navigate(`/detail?id=${id}`)}>
            <Style.TextName>{postTitle}</Style.TextName>
            <Style.ThumbnailWrap>
                <Style.ImgIframeWrap>
                    <Style.ThumbnailImg
                        $isVideoPlayed={isVideoPlayed}
                        src={`https://img.youtube.com/vi/${thumbnailKey}/0.jpg`}
                    />
                    <Style.VideoIframe
                        $isVideoPlayed={isVideoPlayed}
                        width="300"
                        height="224"
                        src={`https://www.youtube.com/embed/${thumbnailKey}?mute=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></Style.VideoIframe>
                </Style.ImgIframeWrap>
                <Style.ThumbnailTextWrap $isVideoPlayed={isVideoPlayed}>
                    <Style.LikesText>{likeCount}</Style.LikesText>
                    <Style.LikeBtmImg src={likeImg} />
                </Style.ThumbnailTextWrap>
            </Style.ThumbnailWrap>
            <Style.Text>
                {name} - {title}
            </Style.Text>
            <Button
                onClick={(e) => {
                    e.stopPropagation();
                    setIsVideoPlayed(!isVideoPlayed);
                }}
                $fontSize="40px"
                $width="40px"
                $height="60px"
                $borderRadius="30px"
            >
                <img src={playButton} />
            </Button>
        </Style.ItemLi>
    );
};

export default PostItem;

const ItemLi = styled.li`
    font-family: "SUITE-Regular";
    cursor: pointer;
    background-color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 360px;
    height: 400px;
    border-radius: 30px;
    padding: 20px;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 5px;
    h3 {
        font-family: "GmarketSansMedium";
    }
    &:hover {
        transform: translateY(-10px);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
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
    border-radius: 20px;
`;

const VideoIframe = styled.iframe`
    display: ${({ $isVideoPlayed }) => ($isVideoPlayed ? "block" : "none")};
    width: 300px;
    height: 224px;
    border-radius: 20px;
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
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 0px rgb(0, 0, 0), -1px -1px 0px rgb(0, 0, 0), 1px -1px 0px rgb(0, 0, 0),
        -1px 1px 0px rgb(0, 0, 0);
    font-weight: 700;
`;

const LikeBtmImg = styled.img`
    width: 40px;
    height: 40px;
`;

const TextName = styled.p`
    font-family: "SUITE-Regular";
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const Text = styled.p`
    font-family: "SUITE-Regular";
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 5px;
`;
