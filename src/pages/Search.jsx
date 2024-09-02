import styled from "styled-components";
import PostItem from "../components/home/PostItem";
import useSearchedMusicContext from "../hooks/useSearchedMusicContext";
import SearchInput from "../components/home/SearchInput";

const Search = () => {
    const { searchText, handleSearchText, SearchHandle, searchedSongs } = useSearchedMusicContext();
    return (
        <ListWrapper>
            <SearchInput searchText={searchText} handleSearchText={handleSearchText} handleSearch={SearchHandle} />
            <ListUl>
                {searchedSongs && searchedSongs.length ? (
                    searchedSongs.map((music) => {
                        return <PostItem key={music.id} music={music} />;
                    })
                ) : (
                    <div>해당하는 노래가 없습니다.</div>
                )}
            </ListUl>
        </ListWrapper>
    );
};

export default Search;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
`;

const ListUl = styled.ul`
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
