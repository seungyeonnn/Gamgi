import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import PostListContainer from '../containers/PostListContainer';
import PaginationContainer from '../containers/PaginationContainer';

const BackgroundBlock = styled.div`
  background-image: url('https://i.pinimg.com/564x/3c/1c/ab/3c1cabb4b75256b7a4ec508e6c02d2d3.jpg');
  height: 3500px;
`;

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <BackgroundBlock>
        <PostListContainer />
        <PaginationContainer />
        <br />
        <br />
      </BackgroundBlock>
    </div>
  );
};

export default PostListPage;
