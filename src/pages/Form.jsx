import React, { useState } from "react";
import { styled } from "styled-components";
import { getYoutubeKey } from "../utils";

const PostTitle = styled.div``;
const SongTitle = styled.div``;
const YoutubeLink = styled.div``;
const Desc = styled.div``;
const Name = styled.div``;
const Genre = styled.div``;
const Hashtags = styled.div``;
const Button = styled.button``;
const Preview = styled.div``;

const Form = () => {
    const [postTitle, setPostTitle] = useState("");
    const [title, setTitle] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");
    const [desc, setDesc] = useState("");
    const [name, setName] = useState("");
    const [hashtags, setHashtags] = useState("");
    const [selectedSeason, setSelectedSeason] = useState("");

    const options = [
        { value: "", label: "노래에 어울리는 계절을 선택해주세요.", disabled: true },
        //disabled를 통해 선택이 안되도록 한다.
        { value: "모든 계절", label: "모든 계절" },
        { value: "봄", label: "봄" },
        { value: "여름", label: "여름" },
        { value: "가을", label: "가을" },
        { value: "겨울", label: "겨울" }
    ];

    const getEmbedLink = (link) => {
        const videoId = getYoutubeKey(link);
        return `https://www.youtube.com/embed/${videoId}?loop=1&autoplay=1&mute=1&playlist=${videoId}`;
    };
    const handlePostTitleChange = (event) => {
        setPostTitle(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleYoutubeLinkChange = (event) => {
        setYoutubeLink(event.target.value);
    };

    const handleDescChange = (event) => {
        setDesc(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleHashtagsChange = (event) => {
        setHashtags(event.target.value);
    };

    const handleSeasonChange = (event) => {
        setSelectedSeason(event.target.value);
    };

    return (
        <>
            <PostTitle>
                <label>제목:</label>
                <input placeholder="제목을 입력해주세요." value={postTitle} onChange={handlePostTitleChange} />
            </PostTitle>
            <div>
                {youtubeLink && (
                    <Preview>
                        <iframe
                            width="560"
                            height="315"
                            src={getEmbedLink(youtubeLink)}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube Video Preview"
                        ></iframe>
                    </Preview>
                )}
            </div>
            <SongTitle>
                <label>노래제목:</label>
                <input placeholder="노래 제목을 입력해주세요." value={title} onChange={handleTitleChange} />
            </SongTitle>
            <YoutubeLink>
                <label>유튜브 링크:</label>
                <input
                    placeholder="유튜브 링크를 입력해주세요."
                    value={youtubeLink}
                    onChange={handleYoutubeLinkChange}
                />
            </YoutubeLink>
            <Desc>
                <label>내용:</label>
                <textarea placeholder="내용을 입력해주세요." value={desc} onChange={handleDescChange} />
            </Desc>
            <Name>
                <label>가수이름:</label>
                <input placeholder="가수이름을 입력해주세요." value={name} onChange={handleNameChange} />
            </Name>
            <Genre>
                <label>계절:</label>
                <select value={selectedSeason} onChange={handleSeasonChange}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value} disabled={option.disabled}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </Genre>
            <Hashtags>
                <label>해시태그:</label>
                <input placeholder="해시태그를 입력해주세요." value={hashtags} onChange={handleHashtagsChange} />
            </Hashtags>
            <Button>게시글 작성</Button>
        </>
    );
};

export default Form;
