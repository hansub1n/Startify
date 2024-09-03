import styled from "styled-components";

//-----Home Page Css -----
export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
`;
//------------------------

//-----PostItem Css-----
export const ItemLi = styled.li`
    font-family: "SUITE-Regular";
    cursor: pointer;
    background-color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 360px;
    height: 400px;
    border-radius: 30px;
    padding: 20px;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 5px;
    h3 {
        font-family: "GmarketSansMedium";
    }
    &:hover {
        transform: translateY(-10px);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;

export const ThumbnailWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const ImgIframeWrap = styled.div`
    width: 300px;
    height: 224px;
`;

export const ThumbnailImg = styled.img`
    display: ${({ $isVideoPlayed }) => ($isVideoPlayed ? "none" : "block")};
    width: 300px;
    height: 224px;
    object-fit: fill;
    border-radius: 20px;
`;

export const VideoIframe = styled.iframe`
    display: ${({ $isVideoPlayed }) => ($isVideoPlayed ? "block" : "none")};
    width: 300px;
    height: 224px;
    border-radius: 20px;
`;

export const ThumbnailTextWrap = styled.div`
    display: ${({ $isVideoPlayed }) => ($isVideoPlayed ? "none" : "flex")};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    padding: 5px;
    background-color: rgb(255, 255, 255, 0.4);
    border-radius: 10px;
`;

export const LikesText = styled.p`
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 0px rgb(0, 0, 0), -1px -1px 0px rgb(0, 0, 0), 1px -1px 0px rgb(0, 0, 0),
        -1px 1px 0px rgb(0, 0, 0);
    font-weight: 700;
`;

export const LikeBtmImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const TextName = styled.p`
    font-family: "SUITE-Regular";
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
    width: 300px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-bottom: 0.14em;
`;

export const Text = styled.p`
    font-family: "SUITE-Regular";
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: center;
    width: 300px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-bottom: 0.14em;
`;
//-------------------------

//-----PostItemList Css-----
export const PostItemWrapper = styled.ul`
    background-color: ${({ $index }) => ($index % 2 == 0 ? "#e5f3fc" : "#6fabda")};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0px;
    box-sizing: border-box;
    padding: 20px 30px;
`;

export const PostWrapTitle = styled.h3`
    font-family: "SUITE-Regular";
    border-bottom: 1px solid black;
    width: 100%;
    padding: 10px 5px 20px 5px;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: bold;
`;

export const PostItemsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 20px;
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    max-height: ${({ $isListOpen }) => ($isListOpen ? "5000px" : "500px")};
    transition: max-height ${({ $isListOpen }) => ($isListOpen ? "2s ease-in-out" : "1s ease-in-out")};
    height: auto;
    padding: 20px 10px;

    @media all and (min-width: 1200px) and (max-width: 1659px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media all and (min-width: 840px) and (max-width: 1199px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media all and (max-width: 839px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ListOpenButton = styled.div`
    background-color: ${({ $index }) => ($index % 2 == 0 ? "#e5f3fc" : "#6fabda")};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
    padding: 3px 0px;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
        filter: brightness(0.95);
    }
`;
//-------------------------

//-----SearchInput Css-----
export const SearchInputDiv = styled.div`
    border: 1px solid #707070;
    border-radius: 25px;
    width: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media all and (min-width: 840px) and (max-width: 1199px) {
        width: 700px;
    }

    @media all and (max-width: 839px) {
        width: 380px;
    }
`;

export const SearchInputBox = styled.input`
    border: none;
    width: 90%;
    height: 50px;
    border-radius: 25px 0px 0px 25px;
    text-indent: 20px;
    font-size: 18px;
    &:focus {
        outline: none;
    }
`;
//-------------------------
