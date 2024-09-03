import { useNavigate } from "react-router-dom";
import { getYoutubeKey } from "../../utils";
import { Item, ItemImgBox, ItemTxtBox, LikesContainer } from "./CreatedItem";
import * as Style from "../home/HomeStyles";
import likeImg from "../../assets/like.png";

export const LikedItem = ({ likePost }) => {
    const thumbnailKey = getYoutubeKey(likePost.STARTIFY_DATA.url);
    const navigate = useNavigate();
    const likeCount = likePost.STARTIFY_DATA.STARTIFY_LIKES.length;

    return (
        <Style.ItemLi onClick={() => navigate(`/detail?id=${likePost.STARTIFY_DATA.id}`)}>
            <Style.TextName>{likePost.STARTIFY_DATA.postTitle}</Style.TextName>
            <Style.ThumbnailWrap>
                <ItemImgBox>
                    <Style.ThumbnailImg
                        src={`https://img.youtube.com/vi/${thumbnailKey}/0.jpg`}
                        alt={likePost.STARTIFY_DATA.postTitle}
                    />
                </ItemImgBox>
                <LikesContainer>
                    <Style.LikesText>{likeCount}</Style.LikesText>
                    <Style.LikeBtmImg src={likeImg} />
                </LikesContainer>
            </Style.ThumbnailWrap>
            <ItemTxtBox>
                <span>{likePost.STARTIFY_DATA.STARTIFY_USER.userName}</span>
            </ItemTxtBox>
            <Style.Text>
                {likePost.STARTIFY_DATA.name} - {likePost.STARTIFY_DATA.title}
            </Style.Text>
        </Style.ItemLi>
    );
};
