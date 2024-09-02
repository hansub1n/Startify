import styled from "styled-components";
import { getYoutubeKey } from "../../utils";
import { useNavigate } from "react-router-dom";

const SearchedItem = ({ music }) => {
    const { postTitle, name, title, url, id } = music;
    const navigate = useNavigate();
    const thumbnailKey = getYoutubeKey(url);
    const likeCount = music.likes.length;
    return (
        <ItemLi onClick={() => navigate(`/detail?id=${id}`)}>
            <h3>{postTitle}</h3>
            <ThumbnailWrap>
                <ThumbnailImg src={`https://img.youtube.com/vi/${thumbnailKey}/0.jpg`} />
                <ThumbnailTextWrap>
                    <LikesText>{likeCount}</LikesText>
                    <LikesButton>❤️</LikesButton>
                </ThumbnailTextWrap>
            </ThumbnailWrap>
            <p>
                {name} - {title}
            </p>
        </ItemLi>
    );
};

export default SearchedItem;

const ItemLi = styled.li`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 360px;
    height: 360px;
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

const ThumbnailImg = styled.img`
    width: 300px;
    height: 224px;
    object-fit: fill;
`;

const ThumbnailTextWrap = styled.div`
    display: flex;
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
