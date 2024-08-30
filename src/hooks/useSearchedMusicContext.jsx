import React, { useContext } from "react";
import { SearchedMusicContext } from "../context/SearchedMusicContext";

const useSearchedMusicContext = () => {
    const context = useContext(SearchedMusicContext);
    return context;
};

export default useSearchedMusicContext;
