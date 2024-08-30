import Button from "../common/Button";

const SearchInput = ({ searchText, handleSearchText, handleSearch }) => {
    return (
        <div>
            <input value={searchText} onChange={handleSearchText} />
            <Button onClick={() => handleSearch(searchText)}>검색</Button>
        </div>
    );
};

export default SearchInput;
