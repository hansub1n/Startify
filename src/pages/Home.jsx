import SearchInput from "../components/home/SearchInput";
import useMusicContext from "../hooks/useMusicContext";
import PostItemList from "../components/home/PostItemList";
import * as Style from "../components/home/HomeStyles";

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
        <Style.ListWrapper>
            <SearchInput searchText={searchText} handleSearchText={handleSearchText} handleSearch={handleSearch} />
            {lists.map((el, index) => {
                return <PostItemList key={el.title} index={index} songs={el.songs} title={el.title} />;
            })}
        </Style.ListWrapper>
    );
};

export default Home;
