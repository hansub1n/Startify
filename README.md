# Startify
![image](https://github.com/user-attachments/assets/628d4ca4-4544-4452-9a23-10519c8205e4)
여러분들은 계절마다 즐겨 듣는 노래가 있으신가요?
'Startify'는  계절마다 어울리는 노래를 공유하고, 그 음악을 통해 사람들과 추억을 나눌 수 있는 공간입니다.

<br/>


## 🔥배포 링크
[Startify - 내일배움캠프 6기 14조](https://startify-ashen.vercel.app/)

<br/>

## 📦폴더 구조
<details>
<summary>폴더구조</summary>
```
📦react-startify<br/>
 ┣ 📂public<br/>
 ┃ ┗ 📜favicon.png<br/>
 ┣ 📂src<br/>
 ┃ ┣ 📂assets<br/>
 ┃ ┃ ┣ 📜2024-09-03_12.32.21.png<br/>
 ┃ ┃ ┣ 📜blankProfile.png<br/>
 ┃ ┃ ┣ 📜delete.png<br/>
 ┃ ┃ ┣ 📜dislike.png<br/>
 ┃ ┃ ┣ 📜dislike01.png<br/>
 ┃ ┃ ┣ 📜edit.png<br/>
 ┃ ┃ ┣ 📜fall.png<br/>
 ┃ ┃ ┣ 📜like.png<br/>
 ┃ ┃ ┣ 📜like01.png<br/>
 ┃ ┃ ┣ 📜like03.png<br/>
 ┃ ┃ ┣ 📜playButton.png<br/>
 ┃ ┃ ┣ 📜playButton02.png<br/>
 ┃ ┃ ┣ 📜song.png<br/>
 ┃ ┃ ┣ 📜spring.png<br/>
 ┃ ┃ ┣ 📜summer.png<br/>
 ┃ ┃ ┣ 📜temporalLogo.png<br/>
 ┃ ┃ ┗ 📜winter.png<br/>
 ┃ ┣ 📂components<br/>
 ┃ ┃ ┣ 📂common<br/>
 ┃ ┃ ┃ ┗ 📜Button.jsx<br/>
 ┃ ┃ ┣ 📂detail<br/>
 ┃ ┃ ┃ ┣ 📜DetailComment.jsx<br/>
 ┃ ┃ ┃ ┣ 📜DetailDeleteModal.jsx<br/>
 ┃ ┃ ┃ ┣ 📜DetailEditModal.jsx<br/>
 ┃ ┃ ┃ ┣ 📜DetailMusic.jsx<br/>
 ┃ ┃ ┃ ┣ 📜DetailOwner.jsx<br/>
 ┃ ┃ ┃ ┗ 📜DetailVisitor.jsx<br/>
 ┃ ┃ ┣ 📂form<br/>
 ┃ ┃ ┃ ┗ 📜style.jsx<br/>
 ┃ ┃ ┣ 📂home<br/>
 ┃ ┃ ┃ ┣ 📜HomeStyles.jsx<br/>
 ┃ ┃ ┃ ┣ 📜PostItem.jsx<br/>
 ┃ ┃ ┃ ┣ 📜PostItemList.jsx<br/>
 ┃ ┃ ┃ ┗ 📜SearchInput.jsx<br/>
 ┃ ┃ ┣ 📂layout<br/>
 ┃ ┃ ┃ ┣ 📜LayoutHeader.jsx<br/>
 ┃ ┃ ┃ ┗ 📜LayoutStyles.jsx<br/>
 ┃ ┃ ┣ 📂profile<br/>
 ┃ ┃ ┃ ┣ 📂css<br/>
 ┃ ┃ ┃ ┃ ┗ 📜active.css<br/>
 ┃ ┃ ┃ ┣ 📜Created.jsx<br/>
 ┃ ┃ ┃ ┣ 📜CreatedItem.jsx<br/>
 ┃ ┃ ┃ ┣ 📜Intro.jsx<br/>
 ┃ ┃ ┃ ┣ 📜Liked.jsx<br/>
 ┃ ┃ ┃ ┣ 📜LikedItem.jsx<br/>
 ┃ ┃ ┃ ┣ 📜ProfileContents.jsx<br/>
 ┃ ┃ ┃ ┣ 📜ProfileHeader.jsx<br/>
 ┃ ┃ ┃ ┗ 📜ProfileStyles.jsx<br/>
 ┃ ┃ ┣ 📂search<br/>
 ┃ ┃ ┃ ┗ 📜SearchStyle.jsx<br/>
 ┃ ┃ ┗ 📂userInfo<br/>
 ┃ ┃ ┃ ┗ 📜UserStyle.jsx<br/>
 ┃ ┣ 📂context<br/>
 ┃ ┃ ┣ 📜MusicContext.jsx<br/>
 ┃ ┃ ┣ 📜PostContext.jsx<br/>
 ┃ ┃ ┣ 📜SearchedMusicContext.jsx<br/>
 ┃ ┃ ┗ 📜UserContext.jsx<br/>
 ┃ ┣ 📂fonts<br/>
 ┃ ┃ ┗ 📂GmarketSansTTF<br/>
 ┃ ┃ ┃ ┣ 📜GmarketSansTTFBold.ttf<br/>
 ┃ ┃ ┃ ┣ 📜GmarketSansTTFLight.ttf<br/>
 ┃ ┃ ┃ ┣ 📜GmarketSansTTFMedium.ttf<br/>
 ┃ ┃ ┃ ┣ 📜LICENSE<br/>
 ┃ ┃ ┃ ┣ 📜SUITE-Bold.ttf<br/>
 ┃ ┃ ┃ ┣ 📜SUITE-ExtraBold.ttf<br/>
 ┃ ┃ ┃ ┣ 📜SUITE-Heavy.ttf<br/>
 ┃ ┃ ┃ ┣ 📜SUITE-Light.ttf<br/>
 ┃ ┃ ┃ ┣ 📜SUITE-Medium.ttf<br/>
 ┃ ┃ ┃ ┣ 📜SUITE-Regular.ttf<br/>
 ┃ ┃ ┃ ┗ 📜SUITE-SemiBold.ttf<br/>
 ┃ ┣ 📂hooks<br/>
 ┃ ┃ ┣ 📜useInput.jsx<br/>
 ┃ ┃ ┣ 📜useMusicContext.jsx<br/>
 ┃ ┃ ┗ 📜useSearchedMusicContext.jsx<br/>
 ┃ ┣ 📂pages<br/>
 ┃ ┃ ┣ 📜Detail.jsx<br/>
 ┃ ┃ ┣ 📜EditForm.jsx<br/>
 ┃ ┃ ┣ 📜Form.jsx<br/>
 ┃ ┃ ┣ 📜Home.jsx<br/>
 ┃ ┃ ┣ 📜Login.jsx<br/>
 ┃ ┃ ┣ 📜ModifyProfile.jsx<br/>
 ┃ ┃ ┣ 📜NotFound.jsx<br/>
 ┃ ┃ ┣ 📜Profile.jsx<br/>
 ┃ ┃ ┣ 📜Search.jsx<br/>
 ┃ ┃ ┗ 📜SignUp.jsx<br/>
 ┃ ┣ 📂shared<br/>
 ┃ ┃ ┣ 📜Layout.jsx<br/>
 ┃ ┃ ┗ 📜Router.jsx<br/>
 ┃ ┣ 📜App.jsx<br/>
 ┃ ┣ 📜index.css<br/>
 ┃ ┣ 📜main.jsx<br/>
 ┃ ┣ 📜supabaseClient.js<br/>
 ┃ ┗ 📜utils.js<br/>
 ┣ 📜.gitignore<br/>
 ┣ 📜.prettierignore<br/>
 ┣ 📜.prettierrc<br/>
 ┣ 📜eslint.config.js<br/>
 ┣ 📜index.html<br/>
 ┣ 📜package.json<br/>
 ┣ 📜README.md<br/>
 ┣ 📜vercel.json<br/>
 ┣ 📜vite.config.js<br/>
 ┗ 📜yarn.lock<br/>
 ```
 </details>

<br/>

## 💻 개발 환경
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)
![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

<br/>

## 🔧 주요기능
### 로그인 페이지 / 회원가입 페이지

### 메인 페이지 / 검색 페이지

### 게시물 작성 페이지

### 디테일 페이지 / 게시물 수정 페이지

### 프로필 페이지 / 프로필 편집 페이지

<br/>

## 🏹 트러블 슈팅
### 1. 반응형에 따라 grid 행 아이템 개수가 변해 height값이 늘어나는데 드롭다운 버튼이 생기지 않는 문제
=> resize이벤트를 사용하여 미리 설정해둔 width범위에 따라 한 줄에 보여줄 최소값을 설정하고, 리렌더링을 유발하여 드롭다운 버튼이 생기도록 구현함
![image](https://github.com/user-attachments/assets/df0aa904-34f6-49de-a0a3-827f9b10844f)
<br />

### 2.

<br />

### 3.

<br />

### 4.

<br />

### 5.

<br />

## 🗣️ 프로젝트 소감
### 한수빈(팀장)
```
 기능 구현 첫 날 어떤식으로 로직을 짜야할지 갈피를 못 잡았는데 차근차근 프로젝트 마무리하니 속이 아주 후련하다.. 데이터베이스와 context api 사용이 아직 서툰게 보여 보완해야겠다
```
<br/>

### 전상국
```
 처음으로 프로젝트에서 supabase를 사용하다보니 테이블 설정부터 데이터 사용까지 많은 어려움
을 겪었습니다. 관계형데이터베이스의 foreign key를 통한 데이터 연결 및 요청에 대해 이해를 하게
되면서 아직은 부족하지만 조금은 익숙해졌습니다. context를 사용하며 리렌더링을 신경써보고 싶
었는데 supabase사용법에 급급하여 시간이 부족했던 점이 아쉽습니다.
```
<br/>

### 신한별
```
 supabase의 권한 설정 문제로 시간을 많이 잡아먹었는데, 이제 해결방법을 알았으니 다음부턴 더 수월하게 이용할 수 있을 것 같습니다. 회원가입, 로그인, 세션관리, 파일관리 등 번거로운 작업들을 supabase가 다 해줘서 편하게 프로젝트를 진행한 것 같습니다.
 깃허브가 특히 어려워서, 작업을 하나 진행할 때 마다 코드가 날아가고 꼬이고 하는 불상사가 발생하고 그 때마다 너무 스트레스 받았지만, 팀원들의 도움도 받으면서 계속 루틴을 반복하다 보니 이젠 무리 없이 진행할 수 있는 것 같습니다. 다양한 git 관련 명령어도 알게 되었고 다음에는 이번 경험을 기반으로 실수 없이 팀작업을 하고 싶습니다!
 팀원들이 다들 잘하시고 의욕도 넘쳐서 좋은 영향을 받고 프로젝트에 집중할 수 있었던 것 같습니다. 처음으로 깃허브 룰에 맞춰서 커밋 메시지도 작성해보고 좋았습니다.
```
<br/>

### 송혜인
```
 수파베이스를 처음 사용해보아서 어떻게 세팅을 해야하는지 어떻게 값을 전달하고 불러와야하는지 막막했었는데 팀원들과 같이 팀프로젝트로 진행을 하다보니 방법을 쉽게 익힐 수 있었던 것 같습니다. Git 관련부분도 개인과제를 할 때에는 딱히 브런치를 여러 개 만들거나 충돌일어날 부분도 없었었는데 팀과제를 하면서 충돌관련부분을 해결해 볼 수 있는 경험이 된 것 같아 좋았습니다.
```
<br/>

### 정지형
```
 supabase와 연결해서 사용하는 방법에 대해서 조금은 알게 되어 만족스럽고 auth데이터
와 USER데이터를 전역으로 관리 되도록 하지 못한 부분과 queryString을 이용해서 다른
사용자의 프로필 페이지를 구현 못한게 아쉬웠다.
```
<br/>

## 📗 프로젝트 피드백
```
피드백입니다.
```