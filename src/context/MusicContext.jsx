import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../supabaseClient";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
    const [springs, setSprings] = useState([]);
    const [summers, setSummers] = useState([]);
    const [autumns, setAutumns] = useState([]);
    const [winters, setWinters] = useState([]);
    const [seasonal, setSeasonal] = useState([]);

    const { user } = useContext(UserContext);
    const userId = user?.id;

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

    const updatedByLikes = (state, postId, isLiked) => {
        let updatedMusic = JSON.parse(JSON.stringify(state));
        updatedMusic = updatedMusic.map((music) => {
            if (music.id == postId) {
                const newLikesArray = isLiked
                    ? music.likes.filter((like) => like.user_id != userId)
                    : [...music.likes, { user_id: userId }];
                return { ...music, likes: newLikesArray };
            }
            return music;
        });
        return updatedMusic;
    };
    //TODO - 좋아요선택 취소 기능 작업중, 선택취소는 되는데 아직 state반영안되어 getAllData한번더할지 state만 변경할지 고민중
    const toggleLiked = async (isLiked, postId, e, genre) => {
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

        switch (genre) {
            case "봄": {
                setSprings(updatedByLikes(springs, postId, isLiked));
                break;
            }
            case "여름":
                setSummers(updatedByLikes(summers, postId, isLiked));
                break;
            case "가을":
                setAutumns(updatedByLikes(autumns, postId, isLiked));
                break;
            case "겨울":
                setWinters(updatedByLikes(winters, postId, isLiked));
                break;
            case "전체":
                setSeasonal(updatedByLikes(seasonal, postId, isLiked));
                break;
            default:
                break;
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
        <MusicContext.Provider
            value={{
                getAllData,
                searchText,
                handleSearchText,
                handleSearch,
                toggleLiked,
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
