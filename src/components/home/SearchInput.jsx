import Button from "../common/Button";
import * as Style from "./HomeStyles";

const SearchInput = ({ searchText, handleSearchText, handleSearch }) => {
    const handleSearchByKeyUp = (e) => {
        if (e.keyCode === 13) {
            handleSearch(searchText);
        }
    };
    return (
        <Style.SearchInputDiv>
            <Style.SearchInputBox
                value={searchText}
                onChange={handleSearchText}
                onKeyUp={(e) => handleSearchByKeyUp(e)}
            />
            <Button $borderRadius="0px 25px 25px 0px" onClick={() => handleSearch(searchText)}>
                검색
            </Button>
        </Style.SearchInputDiv>
    );
};

export default SearchInput;
