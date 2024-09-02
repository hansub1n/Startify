import React, { useCallback, useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { getYoutubeKey } from "../utils";
import supabase from "../supabaseClient";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

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
                setHashArr(postData.hashtags || []);
                setSelectedSeason(postData.genre);
            }
        };

        fetchPostData();
    }, [postId]);

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

        const { error } = await supabase.from("STARTIFY_DATA").update({
            user_id: userId,
            postTitle: postTitle,
            title: title,
            url: youtubeLink,
            desc: desc,
            name: name,
            genre: selectedSeason,
            hashtags: hashArr
        });

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
            alert("게시글이 수정되었습니다.");
            navigate(`/detail?id=${postId}`);
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
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                                <Tag key={index} onClick={() => handleTagClick(tag)}>
                                    #{tag}
                                </Tag>
                            ))}
                        </div>
                    </Hashtags>
                    <Button onClick={handleSubmit}>수정</Button>
                </FormWrapper>
            </Text>
        </Container>
    );
};

export default EditForm;

const Container = styled.div`
    align-items: center;
    justify-content: center;
    width: 1000px;
    height: 800px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;
const Text = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    gap: 30px;
    line-height: 2.5;
    font-size: 17px;
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
        width: 77%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 20px;
        background-color: #d4eaf7;
        height: 10px;
    }
`;
const YoutubeLink = styled.div`
    input {
        width: 74%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 20px;
        background-color: #71c4ef;
        height: 10px;
    }
`;
const Desc = styled.div`
    textarea {
        width: 95%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 20px;
        background-color: #d4eaf7;
        height: 250px;
        margin-top: 10px;
    }
`;
const Name = styled.div`
    input {
        width: 77%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 20px;
        background-color: #71c4ef;
        height: 10px;
    }
`;
const Genre = styled.div`
    select {
        width: 90%;
        padding: 10px 20px;
        appearance: none;
        background-color: #d4eaf7;
        border: 1px solid #ccc;
        border-radius: 20px;
        font-size: 16px;
        color: #333;
        outline: none;
        cursor: pointer;
        transition: border-color 0.3s ease;

        &:hover {
            border-color: #999;
        }

        &:focus {
            border-color: #007bff;
        }
    }
`;

const Hashtags = styled.div`
    input {
        width: 78%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 20px;
        background-color: #71c4ef;
        height: 10px;
    }
`;
const Button = styled.button`
    display: block;
    margin-top: 10px;
    margin-left: auto;
    padding: 12px 24px;
    background-color: #71c4ef;
    color: #fff;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
    }

    &:active {
        background-color: #004494;
        transform: translateY(0);
    }
`;
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
    background-color: #00668c;
    color: #ffffff;
    padding: 8px 12px;
    border-radius: 20px;
    margin: 4px;
    font-size: 14px;
    line-height: 1.5;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        background-color: #71c4ef;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }

    &:active {
        background-color: #a8d8ff;
    }
`;
