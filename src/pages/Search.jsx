import styled from "styled-components";
import Button from "../components/common/Button";
import PostItem from "../components/home/PostItem";
import useSearchedMusicContext from "../hooks/useSearchedMusicContext";

const Search = () => {
    const { searchText, handleSearchText, SearchHandle, searchedSongs } = useSearchedMusicContext();

    return (
        <ListWrapper>
            <div>
                <input value={searchText} onChange={handleSearchText} />
                <Button onClick={SearchHandle}>검색</Button>
            </div>
            <ListUl>
                {searchedSongs ? (
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
    padding: 0px 30px;
`;

const ListUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 20px;
    border: 1px solid red;
    background-color: #d4eaf7;
    padding: 20px;
`;
