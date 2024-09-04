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
![](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=3ccf8d)
![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

<br/>

## 🔧 주요기능
### 회원가입 페이지 / 로그인 페이지
![회원가입](https://github.com/user-attachments/assets/2cdb3e79-eb23-4e2a-b186-2269e912471b)
- 회원가입 페이지에서 필수 입력값인 이메일, 비밀번호를 입력해 가입할 수 있으며 선택사항인 프로필이미지, 닉네임, 소개글도 등록하여 가입할 수 있습니다.

![로그인](https://github.com/user-attachments/assets/17630a6e-1181-4872-9a0d-a328ec41afff)
- 로그인 페이지에서 가입한 이메일과 비밀번호를 사용하여 로그인 할 수 있습니다. 입력하지 않은 값이 있다면 경고창과 함께 해당 입력창이 선택됩니다.
<br/>

### 메인 페이지 / 검색 페이지
![홈페이지_아이템_드롭다운_반응형](https://github.com/user-attachments/assets/75816a54-e506-494c-bc7e-a374882a75a9)
- 랜딩 페이지인 홈페이지에서 데이터베이스에 있는 모든 게시물목록을 확인할 수 있으며, 재생버튼을 누르면 영상을 확인해 볼 수 있습니다.

![홈페이지_검색페이지_키워드검색](https://github.com/user-attachments/assets/18b6d529-52fb-4621-8924-6d82b436afb2)
- 홈페이지나 검색페이지에서 원하는 키워드 검색이 가능합니다. 게시글제목, 가수명, 노래제목으로 검색된 데이터를 검색페이지에서 확인할 수 있습니다.
<br/>

### 게시물 작성 페이지
- 게시글에 게시글 제목, 노래제목, 유튜브 링크, 가수이름, 해시태그의 input 창에 정보를 입력할 수 있으며, 계절은 클릭 하였을 때 봄, 여름, 가을, 겨울, 모든 계절 중 선택할 수 있습니다.
게시글 작성 취소버튼은 바로 전 페이지로 이동하여 게시글 작성을 취소할 수 있게 하였고, 게시글 작성 버튼은 입력한 정보값을 supabase로 전달하도록 합니다.

- 게시글에 제목, 노래 제목, 유튜브링크, 내용, 가수 이름, 계절을 필수적으로 선택, 작성하도록 하였습니다.
 만약 작성하지 않았을 경우 alret창을 띄어 해당 칸을 채우도록 하였습니다.

- 유튜브 링크를 입력하였을 때 옆에 화면에 그 유튜브의 영상이 뜨도록 하여 맞는 영상을 올리고 있는지 확인할 수 있습니다..

- 해시태그의 경우 input창에 글을 입력하고 Enter를 눌렀을 때 아래에 해시태그들이 입력되도록 하였으며, 출력된 해시태그를 클릭함으로써 삭제가 가능합니다.
  만약 해시태그를 입력하지 않고 저장을 한 경우 자동으로 supabase에 가수이름과 노래제목이 저장되도록 하였습니다.

- 

<br/>

### 디테일 페이지 / 게시물 수정 페이지
<br/>

### 프로필 페이지 / 프로필 편집 페이지

<br/>

## 🏹 트러블 슈팅
### 1. 반응형에 따라 grid 행 아이템 개수가 변해 height값이 늘어나는데 드롭다운 버튼이 생기지 않는 문제
=> resize이벤트를 사용하여 미리 설정해둔 width범위에 따라 한 줄에 보여줄 최소값을 설정하고, 리렌더링을 유발하여 드롭다운 버튼이 생기도록 구현함<br/>
![image](https://github.com/user-attachments/assets/df0aa904-34f6-49de-a0a3-827f9b10844f)
<br />

### 2. 동일한 파일명이 있거나, 한글 파일명을 인식하지 못하는 문제
=> getTime 메서드를 사용하여 유니크한 파일명으로 데이터 베이스에 올라가도록 수정함<br/>
=> 한글파일명을 임의의 랜덤파일명으로 바꾸고 업로드하도록 수정함<br/>
![image](https://github.com/user-attachments/assets/ba14ae21-474c-489f-bd34-d287b85443a0)
<br />

### 3. 해시태그에 가수명, 노래제목이 자동으로 들어가있는 문제 
=> 저장 버튼을 눌렀을 때 해시태그 값을 검사하여 빈 값일경우 가수명과 노래제목을 넣어 supabase에 전달함<br/>
![image](https://github.com/user-attachments/assets/49585989-2ff4-431a-bae2-ffab95de0201)
<br />

### 4. supabase 데이터 테이블 간 외래키 공유 후 삭제 기능에서의 문제
=> 해당 외래키의 참조행이 없어졌을 경우 연결된 데이터가 삭제되도록 정책설정<br/>
![image](https://github.com/user-attachments/assets/2bdd4433-da48-467c-90d3-260754de8558)
<br />

## 🗣️ 프로젝트 소감
### 한수빈(팀장)
```
 프로젝트 첫날에는 해야 할 일들을 나열하고, 각 작업에 대한 접근 방식을 고민했지만 로직을 짜는 데 어려움을 겪었습니다. 그래서 구글링을 하며 하나씩 문제를 해결해 나갔고, 결국 프로젝트를 성공적으로 마무리할 수 있었습니다. 하지만 데이터베이스와 Context API 사용이 아직은 서툴다 느꼈고, 이 부분을 더 보완해야겠다고 생각했습니다.
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
