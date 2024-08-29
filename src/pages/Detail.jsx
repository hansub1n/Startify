import React from "react";
import DetailOwner from "../components/detail/DetailOwner";
import DetailMusic from "../components/detail/DetailMusic";
import DetailComment from "../components/detail/DetailComment";
import styled from "styled-components";

const Detail = () => {
    return (
        <DetailDiv>
            <div>
                <DetailOwner id={1} comment={"아오 힘들다"} />
                <DetailMusic />
                <DetailComment />
            </div>
        </DetailDiv>
    );
};

export default Detail;

const DetailDiv = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 30px;
`;

{
    /* <iframe
						width="443"
						height="249"
						src="https://www.youtube.com/embed/x0T9FTGa4U4"
						title="[Playlist] 슬슬 여행이나 갈까?✈️⎮바닷가에서 듣고 싶은 플리🏖⎮여돌 케이팝 노래 모음⎮청량 플리🌴⎮이어폰 필수🎧"
						style={{ border: "none" }}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe> */
}
