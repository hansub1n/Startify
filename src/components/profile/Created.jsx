import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { CreatedItem } from "./CreatedItem";
import * as Style from "./ProfileStyles";

const Created = () => {
    const { posts } = useContext(PostContext);
    if (!posts) {
        return <div>로딩중</div>;
    }

    return (
        <Style.ProfileContentContainer>
            <Style.ProfileContent>
                <Style.ItemCounter>
                    <span>{posts.length}개의 게시물이 있습니다.</span>
                </Style.ItemCounter>
                <Style.ItemsContainer>
                    <Style.Items>
                        {posts.map((post) => (
                            <CreatedItem key={post.id} post={post} />
                        ))}
                    </Style.Items>
                </Style.ItemsContainer>
            </Style.ProfileContent>
        </Style.ProfileContentContainer>
    );
};

export default Created;
