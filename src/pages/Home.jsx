import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import styled from "styled-components";
import PostItemList from "../components/home/PostItemList";

const Home = () => {
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
    useEffect(() => {
        getAllData();
    }, []);
    return (
        <ListWrapper>
            <PostItemList title="언제나 듣기 좋은 노래" musics={songs["전체"]} />
            <PostItemList title="봄에 듣기 좋은 노래" musics={songs["봄"]} />
            <PostItemList title="여름에 듣기 좋은 노래" musics={songs["여름"]} />
            <PostItemList title="가을에 듣기 좋은 노래" musics={songs["가을"]} />
            <PostItemList title="겨울에 듣기 좋은 노래" musics={songs["겨울"]} />
        </ListWrapper>
    );
};

export default Home;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 30px;
`;
