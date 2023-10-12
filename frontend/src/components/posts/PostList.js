import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import { Link } from 'react-router-dom';
import LoginModal from '../common/LoginModal';
import { Layout } from 'antd';
import Respones from '../common/Respones';
import Responsive from '../common/Responsive';
import DiaryButton from '../common/DiaryButton';

const { Content } = Layout;

const Img = styled.img`
  width: 25%;
`;

const ImgBlock = styled(Content)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: 'initial';
  float: 'right';
  padding: 3rem;
`;
const PostListBlock = styled(Respones)`
  margin-top: 3rem;
  word-wrap: break-word; /* IE 5.5-7 */
  white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
  white-space: pre-wrap; /* current browsers */
`;

const ButtonBlock = styled(Responsive)``;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;

  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }

  h2 {
    font-size: 1.7rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  a {
    color: black;
  }
`;

const StyledContent = styled(Content)`
  background-color: #ffffff;
  border: 2px solid ${palette.gray[4]};
  border-radius: 10px;
`;

const ContentBlock = styled(Content)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: 'initial';
  padding: 3rem;
  float: left;
`;

const BodyContent = styled(Content)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: 'initial';
  padding: 0rem 3rem 2rem 3rem;
`;

const importAll = (imgs) => {
  let images = [];
  imgs.keys().forEach((item, index) => {
    images[index] = imgs(item);
  });
  return images;
};

const PostItem = ({ post }) => {
  const [images, setImages] = useState([]);
  const [idx, setIdx] = useState(-1);

  const { publishedDate, user, title, body, emotion, _id } = post;
  const emotion_names = [
    '행복',
    '기쁨',
    '사랑',
    '화남',
    '슬픔',
    '우울',
    '불안',
    '생각없음',
  ];

  useEffect(() => {
    setImages(
      importAll(require.context('../../lib/images/emotions', false, /.png/)),
    );
    setIdx(emotion_names.indexOf(emotion));
  }, []);

  return (
    <PostItemBlock>
      <StyledContent>
        <ContentBlock>
          <h2>
            <Link to={`/@${user.username}/${_id}`}>{title}</Link>
          </h2>
          <SubInfo
            username={user.username}
            publishedDate={new Date(publishedDate)}
          />
        </ContentBlock>
        <ImgBlock>
          {idx !== -1 ? (
            <Img src={images[emotion_names.indexOf(emotion)].default} />
          ) : (
            ''
          )}
        </ImgBlock>
        <BodyContent>
          <p>{body}</p>
        </BodyContent>
      </StyledContent>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  if (!showWriteButton) return <LoginModal />;
  return (
    <div>
      <ButtonBlock>
        <br />
        <br />
        <WritePostButtonWrapper>
          {showWriteButton && (
            <DiaryButton to="/write">다이어리 작성하기</DiaryButton>
          )}
        </WritePostButtonWrapper>
      </ButtonBlock>
      <PostListBlock>
        {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
        {posts && (
          <div>
            {posts.map((post) =>
              post.user.username === showWriteButton.username ? (
                <PostItem post={post} key={post._id} />
              ) : null,
            )}
          </div>
        )}
      </PostListBlock>
    </div>
  );
};

export default PostList;
