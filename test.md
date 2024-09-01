이 프로젝트에서, 우리는 다음과 같은 요구사항을 충족시켜야 합니다:

1. **게시물 페이지**:
   - 게시물 데이터를 가져와야 함.
   - 해당 게시물의 댓글 목록을 가져와야 함.
   - 사용자가 해당 게시물에 좋아요를 눌렀는지 여부와 좋아요 수를 가져와야 함.

2. **메인 페이지**:
   - 모든 게시물의 리스트를 가져와야 함.
   - 각 게시물의 좋아요 수를 가져와야 함.
   - 사용자가 각 게시물에 대해 좋아요를 추가 또는 취소할 수 있어야 함.

### 1. **데이터베이스 테이블 설정**

우선, 필요한 테이블들을 설정하겠습니다.

#### 1.1 **`users` 테이블** (유저 정보)

기존에 설정된 `users` 테이블은 아래와 같이 정의됩니다:

- **id**: UUID (Primary Key)
- **userName**: Text
- **profileImgUrl**: Text
- **userIntro**: Text
- **createdAt**: Timestamp (Default: now())
- **updatedAt**: Timestamp (Default: now())

#### 1.2 **`data` 테이블** (게시물 데이터)

게시물 정보를 저장하는 테이블로 다음과 같이 정의됩니다:

- **id**: UUID (Primary Key, Default: gen_random_uuid())
- **user_id**: UUID (Foreign Key to `users.id`)
- **postTitle**: Text
- **name**: Text
- **title**: Text
- **desc**: Text
- **url**: Text
- **genre**: Text
- **createdAt**: Timestamp (Default: now())
- **updatedAt**: Timestamp (Default: now())

#### 1.3 **`comments` 테이블** (댓글 데이터)

댓글을 저장하는 테이블로 다음과 같이 정의됩니다:

- **id**: UUID (Primary Key, Default: gen_random_uuid())
- **post_id**: UUID (Foreign Key to `data.id`)
- **user_id**: UUID (Foreign Key to `users.id`)
- **content**: Text
- **createdAt**: Timestamp (Default: now())
- **updatedAt**: Timestamp (Default: now())

#### 1.4 **`likes` 테이블** (좋아요 데이터)

좋아요 정보를 저장하는 테이블로 다음과 같이 정의됩니다:

- **id**: UUID (Primary Key, Default: gen_random_uuid())
- **post_id**: UUID (Foreign Key to `data.id`)
- **user_id**: UUID (Foreign Key to `users.id`)
- **createdAt**: Timestamp (Default: now())

### 2. **관계 설정**

위에서 설정한 테이블들 간의 관계는 다음과 같습니다:

- `data.user_id`는 `users.id`와 연결되어, 게시물 작성자를 나타냅니다.
- `comments.post_id`는 `data.id`와 연결되어, 댓글이 달린 게시물을 나타냅니다.
- `comments.user_id`는 `users.id`와 연결되어, 댓글 작성자를 나타냅니다.
- `likes.post_id`는 `data.id`와 연결되어, 좋아요가 눌린 게시물을 나타냅니다.
- `likes.user_id`는 `users.id`와 연결되어, 좋아요를 누른 사용자를 나타냅니다.

### 3. **데이터 조회 및 기능 구현**

#### 3.1 **게시물 페이지: 게시물, 댓글, 좋아요 상태 가져오기**

한 번의 요청으로 게시물 데이터, 댓글 목록, 좋아요 상태와 수를 가져오기 위해, `data` 테이블과 `comments`, `likes` 테이블을 조인하여 데이터를 가져올 수 있습니다.

```javascript
const { data, error } = await supabase
  .from('data')
  .select(`
    id, 
    postTitle, 
    name, 
    title, 
    desc, 
    url, 
    genre, 
    createdAt,
    comments (
      id,
      content,
      createdAt,
      users (userName, profileImgUrl)
    ),
    likes:likes(count),
    liked_by_user:likes (user_id)
  `)
  .eq('id', '특정 게시물 ID')
  .eq('likes.user_id', '현재 유저 ID')
  .single();

if (error) {
  console.error('Error:', error);
} else {
  const isLikedByUser = data.liked_by_user.length > 0; // 사용자가 이 게시물을 좋아요 눌렀는지 여부
  const likeCount = data.likes.count; // 게시물의 총 좋아요 수
  console.log('게시물 데이터:', data);
  console.log('좋아요 상태:', isLikedByUser);
  console.log('좋아요 수:', likeCount);
}
```

#### 3.2 **메인 페이지: 게시물 리스트와 좋아요 수 가져오기**

메인 페이지에서는 댓글 정보는 필요 없으므로, 게시물 리스트와 각 게시물의 좋아요 수만 가져오면 됩니다.

```javascript
const { data, error } = await supabase
  .from('data')
  .select(`
    id, 
    postTitle, 
    name, 
    title, 
    desc, 
    url, 
    genre, 
    createdAt,
    likes:likes(count),
    liked_by_user:likes (user_id)
  `)
  .eq('likes.user_id', '현재 유저 ID');

if (error) {
  console.error('Error:', error);
} else {
  const posts = data.map(post => ({
    ...post,
    isLikedByUser: post.liked_by_user.length > 0,
    likeCount: post.likes.count
  }));
  console.log('게시물 목록:', posts);
}
```

#### 3.3 **좋아요 추가 및 취소 기능 구현**

사용자가 좋아요 버튼을 클릭할 때, 해당 게시물에 대해 좋아요를 추가하거나 취소하는 기능을 구현합니다.

```javascript
async function toggleLike(postId, userId) {
  // 사용자가 이미 좋아요를 눌렀는지 확인
  const { data, error } = await supabase
    .from('likes')
    .select('id')
    .eq('post_id', postId)
    .eq('user_id', userId)
    .single();

  if (error && error.code !== 'PGRST116') { // 좋아요가 없는 경우의 에러는 무시
    console.error('Error:', error);
    return;
  }

  if (data) {
    // 좋아요가 이미 존재하는 경우 -> 좋아요 취소
    const { error: deleteError } = await supabase
      .from('likes')
      .delete()
      .eq('id', data.id);

    if (deleteError) {
      console.error('Error:', deleteError);
    } else {
      console.log('좋아요 취소됨');
    }
  } else {
    // 좋아요가 없는 경우 -> 좋아요 추가
    const { error: insertError } = await supabase
      .from('likes')
      .insert({ post_id: postId, user_id: userId });

    if (insertError) {
      console.error('Error:', insertError);
    } else {
      console.log('좋아요 추가됨');
    }
  }
}
```

### 4. **요약**

- **데이터베이스 설정**: `users`, `data`, `comments`, `likes` 테이블을 설정하고, 테이블 간의 관계를 정의합니다.
- **게시물 페이지**: 게시물 데이터를 가져올 때, 댓글 목록과 좋아요 상태 및 수를 함께 가져옵니다.
- **메인 페이지**: 게시물 리스트와 각 게시물의 좋아요 수 및 사용자가 좋아요를 눌렀는지 여부를 가져옵니다.
- **좋아요 기능**: 사용자가 좋아요를 추가하거나 취소할 수 있는 기능을 구현합니다.

이러한 접근 방식을 통해, 하나의 요청으로 필요한 모든 데이터를 가져오고, 사용자가 좋아요를 추가하거나 취소할 수 있는 기능을 쉽게 관리할 수 있습니다.