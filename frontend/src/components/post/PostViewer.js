import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Layout } from 'antd';
import Responsive from '../common/Responsive';

const { Content } = Layout;

const BackgroundBlock = styled.div`
  margin: 0 auto; /* 중앙 정렬 */
  /* 브라우저 크기에 따라 세로 사이즈 변경 */
  @media (max-height: 1024px) {
    height: 768px;
  }
  @media (max-height: 768px) {
    height: 100%;
  }
`;

const PostViewerBlock = styled(Responsive)`
  margin: 4rem;
`;

const BottomLine = styled.div`
  border-bottom: 1px solid ${palette.gray[3]};
  margin: 1rem 2rem 2rem 2rem;
`;

const PostHead = styled.div`
  width: 450px;
  height: 100px;
  padding-top: 2rem;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 2rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const ContentBlock = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: 'initial';
  padding: 1rem 3rem 0rem 3rem;
  float: left;
`;
const Img = styled.img`
  width: 30%;
`;

const ImgBlock = styled(Content)`
  width: 400px;
  height: 150px;
  display: flex;
  margin: 2rem 2rem 0rem 2rem;
  justify-content: flex-end;
  align-items: center;
  overflow: 'initial';
  float: 'right';
`;

const StyledContent = styled(Content)`
  background-color: #ffffff;
  border: 2px solid ${palette.gray[4]};
  border-radius: 10px;
`;

const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;
//하위
const PostContent = styled.div`
  font-size: 1rem;
  color: ${palette.gray[8]};
  word-wrap: break-word; /* IE 5.5-7 */
`;
//상위
const PostBlock = styled.div`
  padding: 2rem 2rem 2rem 2rem;
  margin-bottom: 2rem;
`;

const importAll = (imgs) => {
  let images = [];
  imgs.keys().forEach((item, index) => {
    images[index] = imgs(item);
  });
  return images;
};

const PostViewer = ({ post, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }
  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !post) {
    return null;
  }
  const [images, setImages] = useState([]);
  const [idx, setIdx] = useState(-1);
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

  const { title, body, user, publishedDate, emotion } = post;
  return (
    <>
      <BackgroundBlock>
        <PostViewerBlock>
          {actionButtons}
          <StyledContent>
            <ContentBlock>
              <PostHead>
                <h1>{title}</h1>
                <SubInfo hasMarginTop>
                  <span>
                    <b>{user.username}</b>
                  </span>
                  <span>{new Date(publishedDate).toLocaleDateString()}</span>
                </SubInfo>
              </PostHead>
            </ContentBlock>
            <ImgBlock>
              {idx !== -1 ? <Img src={images[idx].default} /> : ''}
            </ImgBlock>
            <BottomLine />
            <PostBlock>
              {body.split('\n').map((line, idx) => (
                <PostContent key={idx}>{line} </PostContent>
              ))}
            </PostBlock>
          </StyledContent>
        </PostViewerBlock>
      </BackgroundBlock>
    </>
  );
};

export default PostViewer;
