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
