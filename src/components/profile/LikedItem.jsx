import { useNavigate } from "react-router-dom";
import { getYoutubeKey } from "../../utils";
import { Item, ItemImgBox, ItemTxtBox } from "./CreatedItem";
import * as Style from "../home/HomeStyles";

export const LikedItem = ({ likePost }) => {
    const thumbnailKey = getYoutubeKey(likePost.STARTIFY_DATA.url);
    const navigate = useNavigate();
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
