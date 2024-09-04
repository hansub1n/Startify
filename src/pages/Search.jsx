import PostItem from "../components/home/PostItem";
import useSearchedMusicContext from "../hooks/useSearchedMusicContext";
import SearchInput from "../components/home/SearchInput";
import * as Style from "../components/search/SearchStyle";

const Search = () => {
    const { searchText, handleSearchText, SearchHandle, searchedSongs } = useSearchedMusicContext();
    return (
        <Style.ListWrapper>
            <SearchInput searchText={searchText} handleSearchText={handleSearchText} handleSearch={SearchHandle} />
            <Style.ListUl>
                {searchedSongs && searchedSongs.length ? (
                    searchedSongs.map((music) => {
                        return <PostItem key={music.id} music={music} />;
                    })
                ) : (
                    <div>해당하는 노래가 없습니다.</div>
                )}
            </Style.ListUl>
        </Style.ListWrapper>
    );
};

export default Search;
