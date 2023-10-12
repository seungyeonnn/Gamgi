import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import PostViewerContainer from '../containers/PostViewerContainer';

const DivBlock = styled.div`
  background-image: url('https://i.pinimg.com/564x/3c/1c/ab/3c1cabb4b75256b7a4ec508e6c02d2d3.jpg');
  height: 800px;
`;

const BackgroundBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostPage = () => {
  return (
    <div>
      <HeaderContainer />
      <DivBlock>
        <BackgroundBlock>
          <PostViewerContainer />
        </BackgroundBlock>
      </DivBlock>
    </div>
  );
};

export default PostPage;
