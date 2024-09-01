import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../supabaseClient";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
    const [songs, setSongs] = useState({ "전체": [], "봄": [], "여름": [], "가을": [], "겨울": [] });

    const { user } = useContext(UserContext);
    const userId = user?.id;

    //TODO - select범위 조절해야함
    const getAllData = async () => {
        setSongs({ "전체": [], "봄": [], "여름": [], "가을": [], "겨울": [] });
        const { data, error } = await supabase.from("STARTIFY_DATA").select("*, likes:STARTIFY_LIKES(user_id)");
        if (error) {
            console.log("getAllData error :>> ", error);
            return;
        }

        // console.log("data :>> ", data);
        setSongs((prev) => {
            const updated = JSON.parse(JSON.stringify(prev));
            data.forEach((music) => {
                // console.log("music :>> ", music);
                const { genre, likes } = music;
                if (updated[genre]) {
                    updated[genre] = [...updated[genre], music];
                }
            });
            console.log("Updated songs state: ", updated); // 업데이트된 상태를 출력
            return updated;
        });
    };

    //TODO - 좋아요선택 취소 기능 작업중, 선택취소는 되는데 아직 state반영안되어 getAllData한번더할지 state만 변경할지 고민중
    const toggleLiked = async (isLiked, postId, e) => {
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
        let updatedSongs = { ...songs };
        Object.keys(updatedSongs).forEach((genre) => {
            updatedSongs[genre] = updatedSongs[genre].map((music) => {
                if (music.id == postId) {
                    const newLikesArray = isLiked
                        ? music.likes.filter((like) => like.user_id != userId)
                        : [...music.likes, { user_id: userId }];
                    return { ...music, likes: newLikesArray };
                }
                return music;
            });
        });
        setSongs(updatedSongs);
        // getAllData();
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
        <MusicContext.Provider value={{ songs, getAllData, searchText, handleSearchText, handleSearch, toggleLiked }}>
            {children}
        </MusicContext.Provider>
    );
};
