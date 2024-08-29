export const getYoutubeKey = (url) => {
    const youtubeKey = url.split("v=")[1];
    return youtubeKey;
};
