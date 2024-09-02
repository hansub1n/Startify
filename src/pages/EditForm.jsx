import React, { useCallback, useEffect, useState } from "react";
import { getYoutubeKey } from "../utils";
import supabase from "../supabaseClient";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
    Button,
    Container,
    Desc,
    FormWrapper,
    Genre,
    Hashtags,
    Name,
    PlaceholderMessage,
    PostTitle,
    Preview,
    SongTitle,
    Tag,
    Text,
    VideoWrapper,
    YoutubeLink
} from "../components/form/style";

const EditForm = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const postId = searchParams.get("id");
    const [post, setPost] = useState(null);

    const [postTitle, setPostTitle] = useState("");
    const [title, setTitle] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");
    const [desc, setDesc] = useState("");
    const [name, setName] = useState("");
    const [hashtag, setHashtag] = useState("");
    const [hashArr, setHashArr] = useState([]);
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

    useEffect(() => {
        const fetchPostData = async () => {
            const { data, error } = await supabase.from("STARTIFY_DATA").select("*").eq("id", postId);

            if (error) {
                console.log("error => ", error);
            } else {
                console.log("data => ", data[0]);
                const postData = data[0];
                setPost(postData);
                setPostTitle(postData.postTitle);
                setTitle(postData.title);
                setYoutubeLink(postData.url);
                setDesc(postData.desc);
                setName(postData.name);
                console.log("hashtags => ", postData.hashtags);
                setHashArr(postData.hashtags || []);
                setSelectedSeason(postData.genre);
            }
        };

        fetchPostData();
    }, [postId]);

    // 유튜브 영상으로 틀때 필요한 값
    const getEmbedLink = (link) => {
        const videoId = getYoutubeKey(link);
        return `https://www.youtube.com/embed/${videoId}?loop=1&autoplay=0&mute=1&playlist=${videoId}`;
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
                    if (!hashArr.includes(value)) {
                        setHashArr((prev) => [...prev, value]);
                    }
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
        // await supabase.from("STARTIFY_DATA").update({ hashtags: null }).eq("id", postId);

        const updatedHashArr = [...hashArr]; // 해시테그가 빈값일 때 자동으로 가수명과 곡명을 저장하도록 하기
        if (updatedHashArr.length === 0) {
            updatedHashArr.push(title, name);
        }
        // if (!name && !title && !updatedHashArr.includes(title, name)) {
        //     updatedHashArr.push(title, name);
        // }

        const { error } = await supabase
            .from("STARTIFY_DATA")
            .update({
                postTitle,
                title,
                url: youtubeLink,
                desc,
                name,
                genre: selectedSeason,
                hashtags: updatedHashArr
            })
            .eq("id", postId);

        alert("게시글이 수정되었습니다.");
        navigate(`/detail?id=${postId}`);

        if (error) {
            alert("입력이 되지 않았습니다");
            return;
        }
    };

    if (!post) {
        return <div>Loading...</div>;
    }

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
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="YouTube Video Preview"
                                ></iframe>
                            </Preview>
                        ) : (
                            <PlaceholderMessage>유튜브 링크를 넣어주세요.</PlaceholderMessage>
                        )}
                    </div>
                </VideoWrapper>
                <FormWrapper>
                    <SongTitle>
                        <label>노래 제목 : </label>
                        <input placeholder="노래 제목을 입력해주세요." value={title} onChange={handleTitleChange} />
                    </SongTitle>
                    <YoutubeLink>
                        <label>유튜브 링크 : </label>
                        <input
                            placeholder="유튜브 링크를 입력해주세요."
                            value={youtubeLink}
                            onChange={handleYoutubeLinkChange}
                        />
                    </YoutubeLink>
                    <Desc>
                        <textarea
                            placeholder="자유롭게 노래에 대한 의견을 입력해주세요."
                            value={desc}
                            onChange={handleDescChange}
                        />
                    </Desc>
                    <Name>
                        <label>가수 이름 : </label>
                        <input placeholder="가수 이름을 입력해주세요." value={name} onChange={handleNameChange} />
                    </Name>
                    <Genre>
                        <label>계절 : </label>
                        <select value={selectedSeason} onChange={handleSeasonChange}>
                            {options.map((option) => (
                                <option key={option.value} value={option.value} disabled={option.disabled}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </Genre>
                    <Hashtags>
                        <label>해시태그 : </label>
                        <input
                            type="text"
                            value={hashtag}
                            onChange={onChangeHashtag}
                            onKeyUp={onKeyUp}
                            placeholder="해시태그 입력"
                        />
                        <div className="HashWrapOuter">
                            {hashArr.map((tag, index) => (
                                <Tag key={`${index}: ${tag}`} onClick={() => handleTagClick(tag)}>
                                    #{tag}
                                </Tag>
                            ))}
                        </div>
                    </Hashtags>
                    <Button onClick={() => navigate(-1)}>취소</Button>
                    <Button onClick={handleSubmit}>수정</Button>
                </FormWrapper>
            </Text>
        </Container>
    );
};
export default EditForm;
