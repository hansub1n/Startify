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
            <Button $borderRadius="25px" onClick={() => handleSearch(searchText)}>
                검색
            </Button>
        </SearchInputDiv>
    );
};

export default SearchInput;

const SearchInputDiv = styled.div`
    border: 1px solid #707070;
    border-radius: 25px;
    width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* padding: 0px 5px; */
`;

const SearchInputBox = styled.input`
    border: none;
    width: 90%;
    height: 50px;
    border-radius: 25px;
    text-indent: 20px;
    font-size: 18px;
`;
