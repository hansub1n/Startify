import React, { useCallback, useState } from "react";
import { styled } from "styled-components";
import { getYoutubeKey } from "../utils";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    align-items: center;
    justify-content: center;
    width: 1000px;
    height: 800px;
    margin: auto;
    padding: 20px;
    background-color: #f9f9f9;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;
const Text = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    gap: 30px;
    line-height: 2;
    font-size: 18px;
`;

const VideoWrapper = styled.div`
    flex: 1;
    justify-content: center;
`;

const FormWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const PostTitle = styled.input`
    font-size: 36px;
    margin: 0 auto;
    color: #000000;
    width: 97%;
    height: 80px;
    font-size: 24px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding-left: 20px;
    border-radius: 20px;
`;
const SongTitle = styled.div`
    input {
        width: 80%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 20px;
        background-color: #d4eaf7;
    }
`;
const YoutubeLink = styled.div``;
const Desc = styled.div``;
const Name = styled.div``;
const Genre = styled.div``;
const Hashtags = styled.div``;
const Button = styled.button``;
//유튜브화면
const Preview = styled.div`
    margin-top: 20px;
    iframe {
        width: 480px;
        height: 270px;
        border-radius: 20px;
    }
`;
//유튜브화면 멘트
const PlaceholderMessage = styled.div`
    margin-top: 20px;
    width: 480px;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed gray;
    color: gray;
    font-size: 20px;
    border-radius: 20px;
`;
const Tag = styled.div`
    display: inline-block;
    background-color: #e0e0e0;
    padding: 5px 10px;
    border-radius: 4px;
    margin: 2px;
    cursor: pointer;
`;

const Form = () => {
    const [postTitle, setPostTitle] = useState("");
    const [title, setTitle] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");
    const [desc, setDesc] = useState("");
    const [name, setName] = useState("");
    const [hashtag, setHashtag] = useState("");
    // 해시태그를 담을 배열
    const [hashArr, setHashArr] = useState([]);

    const [selectedSeason, setSelectedSeason] = useState("");

    const navigate = useNavigate();

    const options = [
        { value: "", label: "노래에 어울리는 계절을 선택해주세요.", disabled: true },
        //disabled를 통해 선택이 안되도록 한다.
        { value: "모든 계절", label: "모든 계절" },
        { value: "봄", label: "봄" },
        { value: "여름", label: "여름" },
        { value: "가을", label: "가을" },
        { value: "겨울", label: "겨울" }
    ];

    // 유튜브 영상으로 틀때 필요한 값
    const getEmbedLink = (link) => {
        const videoId = getYoutubeKey(link);
        return `https://www.youtube.com/embed/${videoId}?loop=1&autoplay=1&mute=1&playlist=${videoId}`;
    };

    // //유튜브 썸네일만 뜨게할 때 필요한 값
    // const getThumbnailLink = (link) => {
    //     const videoId = getYoutubeKey(link);
    //     return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    // };

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

    const handleSeasonChange = (event) => {
        setSelectedSeason(event.target.value);
    };

    const onChangeHashtag = (e) => {
        setHashtag(e.target.value);
    };

    const onKeyUp = useCallback(
        (e) => {
            if (e && e.currentTarget) {
                const value = e.currentTarget.value.trim();
                if (e.keyCode === 13 && value !== "") {
                    setHashArr((prev) => [...prev, value]);
                    setHashtag("");
                }
            }
        },
        [hashtag, hashArr]
    );

    const handleTagClick = (tagToRemove) => {
        setHashArr((prev) => prev.filter((tag) => tag !== tagToRemove));
    };

    const handleSubmit = async () => {
        // 사용자 정보를 가져옴
        const {
            data: { session }
        } = await supabase.auth.getSession();

        if (!session?.user) {
            alert("로그인을 먼저 해주세요.");
            navigate("/login");
            return;
        }

        const userId = session.user.id; // 사용자 ID 가져오기

        const { data, error } = await supabase.from("STARTIFY_DATA").insert([
            {
                user_id: userId,
                postTitle: postTitle,
                title: title,
                url: youtubeLink,
                desc: desc,
                name: name,
                genre: selectedSeason,
                hashtags: hashArr
            }
        ]);

        if (error) {
            alert("입력이 되지 않았습니다");
        } else {
            setPostTitle("");
            setTitle("");
            setYoutubeLink("");
            setDesc("");
            setName("");
            setHashtag("");
            setHashArr([]);
            setSelectedSeason("");
            alert("게시글이 입력되었습니다.");
            navigate("/");
        }
    };

    return (
        <Container>
            <PostTitle placeholder="제목을 입력해주세요." value={postTitle} onChange={handlePostTitleChange} />
            <Text>
                <VideoWrapper>
                    {/* //유튜브영상 */}
                    <div>
                        {youtubeLink ? (
                            <Preview>
                                <iframe
                                    src={getEmbedLink(youtubeLink)}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="YouTube Video Preview"
                                ></iframe>
                            </Preview>
                        ) : (
                            <PlaceholderMessage>유튜브 링크를 넣어주세요.</PlaceholderMessage>
                        )}
                    </div>
                    {/* //유튜브썸네일 사진만
            <div>
                {youtubeLink ? (
                    <Preview>
                        <img src={getThumbnailLink(youtubeLink)} alt="YouTube Thumbnail Preview" />
                    </Preview>
                ) : (
                    <PlaceholderMessage>유튜브 링크를 넣어주세요.</PlaceholderMessage>
                )}
            </div> */}
                </VideoWrapper>
                <FormWrapper>
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
                        <input
                            type="text"
                            value={hashtag}
                            onChange={onChangeHashtag}
                            onKeyUp={onKeyUp}
                            placeholder="해시태그 입력"
                        />
                        <div className="HashWrapOuter">
                            {hashArr.map((tag, index) => (
                                <Tag key={index} onClick={() => handleTagClick(tag)}>
                                    #{tag}
                                </Tag>
                            ))}
                        </div>
                    </Hashtags>
                    <Button onClick={handleSubmit}>게시글 작성</Button>
                </FormWrapper>
            </Text>
        </Container>
    );
};

export default Form;
