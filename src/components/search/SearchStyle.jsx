import styled from "styled-components";

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
`;

export const ListUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 20px;
    background-color: #d4eaf7;
    border-radius: 20px;
    padding: 30px 20px;
    margin: 20px 0px;

    @media all and (min-width: 1200px) and (max-width: 1559px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media all and (min-width: 840px) and (max-width: 1199px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media all and (max-width: 839px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
