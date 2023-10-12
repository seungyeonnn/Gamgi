import React, { useState } from 'react';
import styled from 'styled-components';
import StyledModal from '../components/common/SelectEmotionModal';
import EditorContainer from '../containers/EditorContainer';
import HeaderContainer from '../containers/HeaderContainer';
import WriteButtonsContainer from '../containers/WriteButtonsContainer';

const Box = styled.div`
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 19rem;
`;

const BackgroundBlock = styled.div`
  background-image: url('https://i.pinimg.com/564x/3c/1c/ab/3c1cabb4b75256b7a4ec508e6c02d2d3.jpg');
`;

const WritePage = () => {
  const data = {
    title: '오늘의 감기',
    description: '오늘 선택된 감기는 우울 ',
  };
  const [modalState, setModalState] = useState(false);
  const openModal = () => {
    setModalState(true);
  };

  const closeModal = (event) => {
    event.preventDefault();
    setModalState(false);
  };

  return (
    <div>
      <HeaderContainer />
      <BackgroundBlock>
        <ButtonBox>
          <WriteButtonsContainer openModal={openModal} />
        </ButtonBox>
        <Box>
          <StyledModal data={data} state={modalState} closeModal={closeModal} />
          <EditorContainer />
        </Box>
      </BackgroundBlock>
    </div>
  );
};

export default WritePage;
