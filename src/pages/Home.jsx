import styled from "styled-components";
import SearchInput from "../components/home/SearchInput";
import useMusicContext from "../hooks/useMusicContext";
import SpringItemList from "../components/home/SpringItemList";
import SeasonalItemList from "../components/home/SeasonalItemList";
import SummerItemList from "../components/home/SummerItemList";
import AutumnItemList from "../components/home/AutumnItemList";
import WinterItemList from "../components/home/WinterItemList";

const Home = () => {
    const { searchText, handleSearchText, handleSearch } = useMusicContext();
    return (
        <ListWrapper>
            <SearchInput searchText={searchText} handleSearchText={handleSearchText} handleSearch={handleSearch} />
            <SeasonalItemList />
            <SpringItemList />
            <SummerItemList />
            <AutumnItemList />
            <WinterItemList />
        </ListWrapper>
    );
};

export default Home;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 30px;
`;
