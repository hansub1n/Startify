import React, { createContext, useCallback, useContext, useState } from "react";
import { getYoutubeKey } from "../utils";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Text,
    VideoWrapper,
    FormWrapper,
    PostTitle,
    SongTitle,
    YoutubeLink,
    Desc,
    Name,
    Genre,
    Hashtags,
    Button,
    Preview,
    Tag,
    PlaceholderMessage
} from "../components/form/style";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

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
        { value: "전체", label: "모든 계절" },
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
        [hashtag]
    );

    const handleTagClick = (tagToRemove) => {
        setHashArr((prev) => prev.filter((tag) => tag !== tagToRemove));
    };

    const handleSubmit = async () => {
        if (!postTitle) {
            alert("제목을 입력해 주세요.");
            return;
        }
        if (!title) {
            alert("노래 제목을 입력해 주세요.");
            return;
        }
        if (!youtubeLink) {
            alert("유튜브 링크를 입력해 주세요.");
            return;
        }
        if (!desc) {
            alert("내용을 입력해 주세요.");
            return;
        }
        if (!name) {
            alert("가수 이름을 입력해 주세요.");
            return;
        }
        if (!selectedSeason) {
            alert("계절을 선택해 주세요.");
            return;
        }
        const {
            data: { session }
        } = await supabase.auth.getSession();

        if (!session?.user) {
            alert("로그인을 먼저 해주세요.");
            navigate("/login");
            return;
        }

        const userId = session.user.id; // 사용자 ID 가져오기

        const updatedHashArr = [...hashArr]; // 해시테그가 빈값일 때 자동으로 가수명과 곡명을 저장하도록 하기
        if (name && title && !updatedHashArr.includes(title, name)) {
            updatedHashArr.push(title, name);
        }

        const { data, error } = await supabase.from("STARTIFY_DATA").insert([
            {
                user_id: userId,
                postTitle: postTitle,
                title: title,
                url: youtubeLink,
                desc: desc,
                name: name,
                genre: selectedSeason,
                hashtags: updatedHashArr
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
                            placeholder="해시태그 입력 후 ENTER해주세요."
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
