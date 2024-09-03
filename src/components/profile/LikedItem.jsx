import { useNavigate } from "react-router-dom";
import { getYoutubeKey } from "../../utils";
import * as PostStyle from "../home/HomeStyles";
import * as Style from "./ProfileStyles";
import likeImg from "../../assets/like.png";

export const LikedItem = ({ likePost }) => {
    const thumbnailKey = getYoutubeKey(likePost.STARTIFY_DATA.url);
    const navigate = useNavigate();
    const likeCount = likePost.STARTIFY_DATA.STARTIFY_LIKES.length;

    return (
        <PostStyle.ItemLi onClick={() => navigate(`/detail?id=${likePost.STARTIFY_DATA.id}`)}>
            <PostStyle.TextName>{likePost.STARTIFY_DATA.postTitle}</PostStyle.TextName>
            <PostStyle.ThumbnailWrap>
                <Style.ItemImgBox>
                    <PostStyle.ThumbnailImg
                        src={`https://img.youtube.com/vi/${thumbnailKey}/0.jpg`}
                        alt={likePost.STARTIFY_DATA.postTitle}
                    />
                </Style.ItemImgBox>
                <Style.LikesContainer>
                    <PostStyle.LikesText>{likeCount}</PostStyle.LikesText>
                    <PostStyle.LikeBtmImg src={likeImg} />
                </Style.LikesContainer>
            </PostStyle.ThumbnailWrap>
            <Style.ItemTxtBox>
                <span>{likePost.STARTIFY_DATA.STARTIFY_USER.userName}</span>
            </Style.ItemTxtBox>
            <PostStyle.Text>
                {likePost.STARTIFY_DATA.name} - {likePost.STARTIFY_DATA.title}
            </PostStyle.Text>
        </PostStyle.ItemLi>
    );
};
