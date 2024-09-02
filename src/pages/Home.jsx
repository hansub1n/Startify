import styled from "styled-components";
import PostItemList from "../components/home/PostItemList";
import SearchInput from "../components/home/SearchInput";
import useMusicContext from "../hooks/useMusicContext";

const Home = () => {
    const { searchText, handleSearchText, handleSearch, songs } = useMusicContext();
    return (
        <ListWrapper>
            <button onClick={() => console.log("songs :>> ", songs)}>dd</button>
            <SearchInput searchText={searchText} handleSearchText={handleSearchText} handleSearch={handleSearch} />
            <PostItemList title="언제나 듣기 좋은 노래" type="전체" />
            <PostItemList title="봄에 듣기 좋은 노래" type="봄" />
            <PostItemList title="여름에 듣기 좋은 노래" type="여름" />
            <PostItemList title="가을에 듣기 좋은 노래" type="가을" />
            <PostItemList title="겨울에 듣기 좋은 노래" type="겨울" />
        </ListWrapper>
    );
};

export default Home;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 30px;
`;
