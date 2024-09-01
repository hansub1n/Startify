import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useInput from "../hooks/useInput";
import supabase from "../supabaseClient";
import { UserContext } from "./UserContext";

export const SearchedMusicContext = createContext();

const SearchedMusicProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("value");

    const { user } = useContext(UserContext);
    const userId = user?.id;

    //TODO: 일단 노래제목, 가수명, 게시물명 검사로 한정
    const [searchedSongs, setSearchedSongs] = useState();
    const getFilteredData = async (value) => {
        const { data, error } = await supabase
            .from("STARTIFY_DATA")
            .select("postTitle, name, title, url, genre, id, likes:STARTIFY_LIKES(user_id)")
            .or(`title.ilike.%${value}%,postTitle.ilike.%${value}%,name.ilike.%${value}%`);
        if (error) {
            console.log("getAllData error :>> ", error);
            return;
        }
        if (data) {
            setSearchedSongs(data);
            console.log("data :>> ", data);
        }
    };
    const toggleLikedSearched = async (isLiked, postId, e) => {
        e.stopPropagation();
        if (!userId) {
            let goToSignIn = confirm("로그인 후 사용가능합니다. 로그인페이지로 이동하시겠습니까?");
            goToSignIn ? navigate("/login") : null;
            return;
        }

        const { data, error } = isLiked
            ? await supabase.from("STARTIFY_LIKES").delete().match({ "user_id": userId, "post_id": postId })
            : await supabase.from("STARTIFY_LIKES").insert({ "user_id": userId, "post_id": postId });
        if (error) {
            console.log("error :>> ", error);
            return;
        }
        let updatedSearchedSongs = [...searchedSongs];
        updatedSearchedSongs = updatedSearchedSongs.map((music) => {
            if (music.id == postId) {
                const newLikesArray = isLiked
                    ? music.likes.filter((like) => like.user_id != userId)
                    : [...music.likes, { user_id: userId }];
                return { ...music, likes: newLikesArray };
            }
            return music;
        });
        setSearchedSongs(updatedSearchedSongs);
        // getFilteredData();
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
        <SearchedMusicContext.Provider
            value={{ searchText, handleSearchText, SearchHandle, searchedSongs, toggleLikedSearched }}
        >
            {children}
        </SearchedMusicContext.Provider>
    );
};

export default SearchedMusicProvider;
