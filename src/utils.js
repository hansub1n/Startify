export const getYoutubeKey = (url) => {
    return url ? url.split("v=")[1]?.split("&")[0] : null;
};
