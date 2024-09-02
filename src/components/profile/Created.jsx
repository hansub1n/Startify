import React, { useContext } from "react";
import { ProfileContent, ProfileContentContainer } from "./Intro";
import styled from "styled-components";
import testImg from "../../assets/temporalLogo.png";
import { UserContext } from "../../context/UserContext";
import { PostContext } from "../../context/PostContext";
import { CreatedItem } from "./CreatedItem";

const Created = () => {
    const { posts } = useContext(PostContext);
    if (!posts) {
        return <div>로딩중</div>;
    }
    console.log("posts", posts);
    return (
        <ProfileContentContainer>
            <ProfileContent>
                <ItemCounter>
                    <span>{posts.length}개의 게시물이 있습니다.</span>
                </ItemCounter>
                <ItemsContainer>
                    <Items>
                        {posts.map((post) => (
                            <CreatedItem key={post.id} post={post} />
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
export const Items = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;
