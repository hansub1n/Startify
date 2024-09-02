import { getYoutubeKey } from "../../utils";
import { Item, ItemImgBox, ItemTxtBox } from "./CreatedItem";

export const LikedItem = ({ likePost }) => {
    const thumbnailKey = getYoutubeKey(likePost.STARTIFY_DATA.url);
    return (
        <Item>
            <ItemImgBox>
                <img src={`https://img.youtube.com/vi/${thumbnailKey}/0.jpg`} alt="" />
            </ItemImgBox>
            <ItemTxtBox>
                <span>{likePost.STARTIFY_DATA.STARTIFY_USER.userName}</span>
                <h1>{likePost.STARTIFY_DATA.postTitle}</h1>
            </ItemTxtBox>
        </Item>
    );
};
