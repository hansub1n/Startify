import { createContext, useEffect, useState } from "react";
import supabase from "../supabaseClient";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
    const [springs, setSprings] = useState([]);
    const [summers, setSummers] = useState([]);
    const [autumns, setAutumns] = useState([]);
    const [winters, setWinters] = useState([]);
    const [seasonal, setSeasonal] = useState([]);

    const initailizeStates = () => {
        setSprings([]);
        setSummers([]);
        setAutumns([]);
        setWinters([]);
        setSeasonal([]);
    };

    //TODO - select범위 조절해야함
    const getAllData = async () => {
        initailizeStates();
        const { data, error } = await supabase.from("STARTIFY_DATA").select("*, likes:STARTIFY_LIKES(user_id)");
        if (error) {
            console.log("getAllData error :>> ", error);
            return;
        }
        data.forEach((music) => {
            const { genre } = music;
            switch (genre) {
                case "봄":
                    setSprings((prev) => [...prev, music]);
                    break;
                case "여름":
                    setSummers((prev) => [...prev, music]);
                    break;
                case "가을":
                    setAutumns((prev) => [...prev, music]);
                    break;
                case "겨울":
                    setWinters((prev) => [...prev, music]);
                    break;
                case "전체":
                    setSeasonal((prev) => [...prev, music]);
                    break;
                default:
                    break;
            }
        });
    };

    const [searchText, handleSearchText] = useInput("");
    const navigate = useNavigate();
    const handleSearch = (searchText) => {
        if (!searchText) {
            alert("검색어를 입력해주세요");
            return;
        }
        navigate(`/search?value=${searchText}`);
    };
    useEffect(() => {
        getAllData();
    }, []);
    return (
        <MusicContext.Provider
            value={{
                getAllData,
                searchText,
                handleSearchText,
                handleSearch,
                springs,
                summers,
                autumns,
                winters,
                seasonal
            }}
        >
            {children}
        </MusicContext.Provider>
    );
};
