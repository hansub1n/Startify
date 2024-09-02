import styled from "styled-components";
import SearchInput from "../components/home/SearchInput";
import useMusicContext from "../hooks/useMusicContext";
import PostItemList from "../components/home/PostItemList";

const Home = () => {
    const { searchText, handleSearchText, handleSearch, springs, summers, autumns, winters, seasonal } =
        useMusicContext();
    const lists = [
        {
            songs: seasonal,
            title: "언제나 듣기 좋은 노래"
        },
        {
            songs: springs,
            title: "봄에 듣기 좋은 노래"
        },
        {
            songs: summers,
            title: "여름에 듣기 좋은 노래"
        },
        {
            songs: autumns,
            title: "가을에 듣기 좋은 노래"
        },
        {
            songs: winters,
            title: "겨울에 듣기 좋은 노래"
        }
    ];
    return (
        <ListWrapper>
            <SearchInput searchText={searchText} handleSearchText={handleSearchText} handleSearch={handleSearch} />
            {lists.map((el, index) => {
                return <PostItemList key={el.title} index={index} songs={el.songs} title={el.title} />;
            })}
        </ListWrapper>
    );
};

export default Home;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
`;
