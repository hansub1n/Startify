import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const SearchInput = () => {
    const [searchText, handleSearch] = useInput();
    const navigate = useNavigate();
    const SearchHandle = () => {
        if (!searchText) {
            alert("검색어를 입력해주세요");
            return;
        }
        navigate(`/search?value=${searchText}`);
    };
    return (
        <div>
            <input value={searchText} onChange={handleSearch} />
            <Button onClick={SearchHandle}>검색</Button>
        </div>
    );
};

export default SearchInput;
