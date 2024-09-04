import * as Style from "./ProfileStyles";

const Intro = ({ account }) => {
    return (
        <Style.ProfileContentContainer>
            <Style.ProfileContent>
                {!account.userIntro ? `작성된 소개글이 없습니다.` : account.userIntro}
            </Style.ProfileContent>
        </Style.ProfileContentContainer>
    );
};

export default Intro;
