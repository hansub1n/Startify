import SearchInput from "../components/home/SearchInput";
import useMusicContext from "../hooks/useMusicContext";
import PostItemList from "../components/home/PostItemList";
import * as Style from "../components/home/HomeStyles";
import songImg from "../assets/song.png";
import springImg from "../assets/spring.png";
import summerImg from "../assets/summer.png";
import fallImg from "../assets/fall.png";
import winterImg from "../assets/winter.png";

const Home = () => {
    const { searchText, handleSearchText, handleSearch, springs, summers, autumns, winters, seasonal } =
        useMusicContext();
    const lists = [
        {
            songs: seasonal,
            title: "언제나 듣기 좋은 노래",
            imageUrl: songImg
        },
        {
            songs: springs,
            title: "봄에 듣기 좋은 노래",
            imageUrl: springImg
        },
        {
            songs: summers,
            title: "여름에 듣기 좋은 노래",
            imageUrl: summerImg
        },
        {
            songs: autumns,
            title: "가을에 듣기 좋은 노래",
            imageUrl: fallImg
        },
        {
            songs: winters,
            title: "겨울에 듣기 좋은 노래",
            imageUrl: winterImg
        }
    ];
    return (
        <Style.ListWrapper>
            <SearchInput searchText={searchText} handleSearchText={handleSearchText} handleSearch={handleSearch} />
            {lists.map((el, index) => {
                return (
                    <PostItemList
                        key={el.title}
                        index={index}
                        songs={el.songs}
                        title={el.title}
                        imageUrl={el.imageUrl}
                    />
                );
            })}
        </Style.ListWrapper>
    );
};

export default Home;
