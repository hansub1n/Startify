import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import * as Style from "./HomeStyles";

const PostItemList = ({ songs, title, index, imageUrl }) => {
    const [isListOpen, setIsListOpen] = useState(false);

    const largeScreen = matchMedia("screen and (min-width: 1660px)");
    const mediumScreen = matchMedia("screen and (min-width: 1200px) and (max-width: 1659px)");
    const smallScreen = matchMedia("screen and (min-width: 840px) and (max-width: 1199px)");
    const extraSmallScreen = matchMedia("screen and (max-width: 839px)");

    const initializeVisibleCount = () => {
        if (largeScreen.matches) {
            return 4;
        } else if (mediumScreen.matches) {
            return 3;
        } else if (smallScreen.matches) {
            return 2;
        } else if (extraSmallScreen.matches) {
            return 1;
        }
    };
    const [visibleCount, setVisibleCount] = useState(initializeVisibleCount());

    useEffect(() => {
        const handleByResize = () => {
            setVisibleCount(initializeVisibleCount());
        };
        window.addEventListener("resize", handleByResize);

        return () => {
            window.removeEventListener("resize", handleByResize);
        };
    });

    return (
        <Style.PostItemWrapper $index={index}>
            <Style.PostWrapTitle>
                {title}
                <Style.TitleImg src={imageUrl} />
            </Style.PostWrapTitle>
            <Style.PostItemsDiv $isListOpen={isListOpen}>
                {songs.length ? (
                    songs.map((music) => {
                        return <PostItem key={music.id} music={music} />;
                    })
                ) : (
                    <p>어울리는 음악이 없습니다! 해당 계절에 어울리는 음악을 추가해주세요!</p>
                )}
            </Style.PostItemsDiv>
            {songs.length > visibleCount ? (
                <Style.ListOpenButton
                    $index={index}
                    $isListOpen={isListOpen}
                    onClick={() => setIsListOpen(!isListOpen)}
                >
                    {isListOpen ? "▲" : "▼"}
                </Style.ListOpenButton>
            ) : null}
        </Style.PostItemWrapper>
    );
};

export default PostItemList;
