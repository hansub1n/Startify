import { createContext, useEffect, useState } from "react";
import supabase from "../supabaseClient";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
    const [songs, setSongs] = useState({ "전체": [], "봄": [], "여름": [], "가을": [], "겨울": [] });
    const getAllData = async () => {
        const { data, error } = await supabase.from("STARTIFY_DATA").select("*");
        if (error) {
            console.log("getAllData error :>> ", error);
            return;
        } else {
            setSongs((prev) => {
                const updated = JSON.parse(JSON.stringify(prev));
                data.forEach((music) => {
                    const { genre } = music;
                    if (updated[genre]) {
                        updated[genre] = [...updated[genre], music];
                    }
                });
                return updated;
            });
        }
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
        <MusicContext.Provider value={{ songs, getAllData, searchText, handleSearchText, handleSearch }}>
            {children}
        </MusicContext.Provider>
    );
};
