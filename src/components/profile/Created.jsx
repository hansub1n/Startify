import React from "react";
import { ProfileContent, ProfileContentContainer } from "./Intro";
import styled from "styled-components";
import testImg from "../../assets/temporalLogo.png";

const Created = ({ user, posts }) => {
    return (
        <ProfileContentContainer>
            <ProfileContent>
                <ItemCounter>
                    <span>0개의 게시물이 있습니다.</span>
                </ItemCounter>
                <ItemsContainer>
                    <Items>
                        {posts.map((post) => (
                            <Item key={post.id}>
                                <ItemImgBox>
                                    <img src={testImg} alt="" />
                                </ItemImgBox>
                                <ItemTxtBox>
                                    <span>{post.userName}</span>
                                    <h1>{post.postTitle}</h1>
                                </ItemTxtBox>
                            </Item>
                        ))}
                    </Items>
                </ItemsContainer>
            </ProfileContent>
        </ProfileContentContainer>
    );
};

export default Created;

export const ItemCounter = styled.div`
    padding-bottom: 20px;
    font-size: 14px;
`;

export const ItemsContainer = styled.div``;
export const Items = styled.ul``;
export const Item = styled.li``;
export const ItemImgBox = styled.div`
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const ItemTxtBox = styled.div``;
