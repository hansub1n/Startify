export const getYoutubeKey = (url) => {
    const youtubeKey = url.split("v=")[1]?.split("&")[0];
    return youtubeKey;
};
