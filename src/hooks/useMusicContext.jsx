import React, { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

const useMusicContext = () => {
    const context = useContext(MusicContext);
    return context;
};

export default useMusicContext;
