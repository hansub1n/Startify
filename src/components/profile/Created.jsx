import React from "react";
import { ProfileContent, ProfileContentContainer } from "./Intro";
import styled from "styled-components";
import testImg from "../../assets/temporalLogo.png";

const Created = () => {
    return (
        <ProfileContentContainer>
            <ProfileContent>
                <ItemCounter>
                    <span>0개의 게시물이 있습니다.</span>
                </ItemCounter>
                <ItemsContainer>
                    <Items>
                        <Item>
                            <ItemImgBox>
                                <img src={testImg} alt="" />
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

export default Created;

export const ItemCounter = styled.div`
    padding-bottom: 20px;
    font-size: 14px;
`;

export const ItemsContainer = styled.div``;
export const Items = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;
export const Item = styled.li``;
export const ItemImgBox = styled.div`
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const ItemTxtBox = styled.div`
    text-align: center;
`;
