import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import { getYoutubeKey } from "../utils";
import styled from "styled-components";
import PostItem from "../components/home/PostItem";
import PostItemList from "../components/home/PostItemList";

const Home = () => {
    // const [musics, setMusics] = useState([]);
    // const getAllData = async () => {
    //     const { data, error } = await supabase.from("STARTIFY_DATA").select("*");
    //     if (error) {
    //         console.log("getAllData error :>> ", error);
    //         return;
    //     } else {
    //         setMusics(data);
    //     }
    // };
    // useEffect(() => {
    //     getAllData();
    // }, []);
    return (
        <ListWrapper>
            <PostItemList title="언제나 듣기 좋은 노래" />
            <PostItemList title="봄에 듣기 좋은 노래" />
            <PostItemList title="여름에 듣기 좋은 노래" />
            <PostItemList title="가을에 듣기 좋은 노래" />
            <PostItemList title="겨울에 듣기 좋은 노래" />
        </ListWrapper>
    );
};

export default Home;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 30px;
`;
