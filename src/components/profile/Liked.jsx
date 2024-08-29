import React from "react";
import { ProfileContent, ProfileContentContainer } from "./Intro";
import { Item, ItemCounter, ItemImgBox, Items, ItemsContainer, ItemTxtBox } from "./Created";

const Liked = () => {
    return (
        <ProfileContentContainer>
            <ProfileContent>
                <ItemCounter>
                    <span>0개의 좋아요 게시물이 있습니다.</span>
                </ItemCounter>
                <ItemsContainer>
                    <Items>
                        <Item>
                            <ItemImgBox>
                                <img src="" alt="" />
                            </ItemImgBox>
                            <ItemTxtBox>
                                <span>작성자</span>
                                <h1>노래 제목</h1>
                            </ItemTxtBox>
                        </Item>
                    </Items>
                </ItemsContainer>
            </ProfileContent>
        </ProfileContentContainer>
    );
};

export default Liked;
