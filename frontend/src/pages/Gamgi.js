import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import GamgiPage from '../lib/images/gamgiFinal.png';

const Box = styled.div`
  background-color: #030020;
`;

const ImgBox = styled.img`
  width: 100%;
  height: 100%;
  padding-right: 8rem;
  padding-left: 8rem;
`;

const Gamgi = () => {
  return (
    <div>
      <HeaderContainer />
      <Box>
        <ImgBox src={GamgiPage}></ImgBox>
      </Box>
    </div>
  );
};

export default Gamgi;
