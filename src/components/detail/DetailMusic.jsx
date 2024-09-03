import React, { useContext } from "react";
import styled from "styled-components";
import { getYoutubeKey } from "../../utils";
import { UserContext } from "../../context/UserContext";
import likeImg from "../../assets/like.png";
import dislikeImg from "../../assets/dislike.png";

const DetailMusic = ({ url, name, title, desc, likes, hashtags, toggleLikeData }) => {
    // const [searchParams, setSearchParams] = useSearchParams(url);
    // const musicId = () => searchParams.get("v");
    const getEmbedLink = (url) => {
        const videoId = getYoutubeKey(url);
        return `https://www.youtube.com/embed/${videoId}?loop=1&autoplay=0&mute=1&playlist=${videoId}`;
    };

    //유저 좋아요 상태를 만들기위해 userId사용
    const { user } = useContext(UserContext);
    const userId = user?.id;
    let likesCount;
    let isUserLiked;
    if (likes) {
        likesCount = likes.length;
        isUserLiked = likes.some((el) => el.user_id == userId);
    }

    return (
        <div>
            <StMusicDiv>
                <div>
                    {
                        <div>
                            <Youtube
                                width="1000"
                                height="562"
                                object-fit="cover"
                                src={getEmbedLink(url)}
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="YouTube Video Preview"
                            ></Youtube>
                        </div>
                    }
                </div>
                <StMusicInfoDiv>
                    <StMusicInfoTitleSpan>
                        {name} - {title}
                    </StMusicInfoTitleSpan>
                    <StMusicLikeBtnDiv>
                        <LikeCountP>{likesCount}</LikeCountP>
                        <div onClick={() => toggleLikeData(isUserLiked, userId)}>
                            {isUserLiked ? <LikeBtmImg src={likeImg} /> : <LikeBtmImg src={dislikeImg} />}
                        </div>
                    </StMusicLikeBtnDiv>
                    <StPostDescSpan>{desc}</StPostDescSpan>
                    <StMusicInfoHashDiv>
                        {hashtags.map((hashtag) => {
                            return <div key={hashtag}>#{hashtag}</div>;
                        })}
                    </StMusicInfoHashDiv>
                </StMusicInfoDiv>
            </StMusicDiv>
        </div>
    );
};

export default DetailMusic;

const StMusicDiv = styled.div`
    width: 1000px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    margin-top: 15px;
`;

const Youtube = styled.iframe`
    width: 1000px;
    height: 562px;
    align-items: center;
    justify-content: center;
`;

const StMusicInfoTitleSpan = styled.span`
    font-size: 20px;
    font-weight: 700;
    margin: 20px 0;
`;

const StPostDescSpan = styled.span`
    display: flex;
    font-size: 18px;
`;

const StMusicInfoDiv = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
`;

const StMusicLikeBtnDiv = styled.div`
    display: flex;
    position: absolute;
    top: 10px;
    right: 50px;
`;

const LikeCountP = styled.p`
    display: flex;
    position: absolute;
    top: 10px;
    right: 5px;
    font-size: 20px;
`;

const LikeBtmImg = styled.img`
    display: flex;
    position: absolute;
    top: -3px;
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
    transition: transform 0.3s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;

const StMusicInfoHashDiv = styled.div`
    display: flex;
    color: #056ee8;
    margin: 50px 0 30px 0;
`;
