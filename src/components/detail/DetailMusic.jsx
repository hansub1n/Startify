import React from "react";
import styled from "styled-components";

const DetailMusic = () => {
    return (
        <div>
            <StMusicDiv>
                <StMusicLinkDiv>
                    <a href="https://youtu.be/x0T9FTGa4U4" target="_blank" rel="noopener noreferrer">
                        <StMusicImg src="https://img.youtube.com/vi/x0T9FTGa4U4/0.jpg" alt="노래 썸네일" />
                    </a>
                    <StMusicBtn>동영상 이동</StMusicBtn>
                </StMusicLinkDiv>
                <StMusicInfoDiv>
                    <StMusicInfoTitleSpan>아이즈원 - 하늘위로</StMusicInfoTitleSpan>
                    <StMusicInfoHashSpan>#아이즈원 #하늘위로 #여자아이돌 #kpop</StMusicInfoHashSpan>
                    <StMusicLikeBtnDiv>
                        <button>좋아요 372</button>
                    </StMusicLikeBtnDiv>
                </StMusicInfoDiv>
            </StMusicDiv>
        </div>
    );
};

export default DetailMusic;

const StMusicDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    margin: 15px 0 80px 0;
`;
const StMusicLinkDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StMusicImg = styled.img`
    display: flex;
    width: 1100px;
    height: 600px;
    object-fit: cover;
    border-radius: 30px;
`;

const StMusicBtn = styled.button`
    display: flex;
    position: absolute;
`;

const StMusicInfoDiv = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
`;

const StMusicLikeBtnDiv = styled.div`
    display: flex;
    position: absolute;
    top: 20px;
    right: 10px;
`;

const StMusicInfoTitleSpan = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin: 20px 0;
`;

const StMusicInfoHashSpan = styled.span`
    color: #a9a9a9;
`;
