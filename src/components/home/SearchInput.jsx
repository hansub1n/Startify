import styled from "styled-components";
import Button from "../common/Button";

const SearchInput = ({ searchText, handleSearchText, handleSearch }) => {
    const handleSearchByKeyUp = (e) => {
        if (e.keyCode === 13) {
            handleSearch(searchText);
        }
    };
    return (
        <SearchInputDiv>
            <SearchInputBox value={searchText} onChange={handleSearchText} onKeyUp={(e) => handleSearchByKeyUp(e)} />
            <Button $borderRadius="0px 25px 25px 0px" onClick={() => handleSearch(searchText)}>
                검색
            </Button>
        </SearchInputDiv>
    );
};

export default SearchInput;

const SearchInputDiv = styled.div`
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

const SearchInputBox = styled.input`
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
