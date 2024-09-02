import React, { createContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useInput from "../hooks/useInput";
import supabase from "../supabaseClient";

export const SearchedMusicContext = createContext();

const SearchedMusicProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("value");

    //TODO: 일단 노래제목, 가수명, 게시물명 검사로 한정
    const [searchedSongs, setSearchedSongs] = useState();
    const getFilteredData = async (value) => {
        const { data, error } = await supabase
            .from("STARTIFY_DATA")
            .select("postTitle, name, title, url, genre, id, likes:STARTIFY_LIKES(user_id)")
            .or(`title.ilike.%${value}%,postTitle.ilike.%${value}%,name.ilike.%${value}%`);
        if (error) {
            console.log("getFilteredData error :>> ", error);
            return;
        }
        if (data) {
            setSearchedSongs(data);
        }
    };

    const navigate = useNavigate();
    const [searchText, handleSearchText] = useInput(keyword);
    const [searchFlag, setSearchFlag] = useState(false);
    const SearchHandle = () => {
        if (!searchText) {
            alert("검색어를 입력해주세요");
            return;
        }
        navigate(`/search?value=${searchText}`);
        setSearchFlag((prev) => !prev);
    };
    useEffect(() => {
        getFilteredData(keyword);
    }, [searchFlag]);
    return (
        <SearchedMusicContext.Provider value={{ searchText, handleSearchText, SearchHandle, searchedSongs }}>
            {children}
        </SearchedMusicContext.Provider>
    );
};

export default SearchedMusicProvider;
