import React from 'react';
import Header from '../components/common/Header';
import { Calendar, Badge } from 'antd';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Responsive from '../components/common/Responsive';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
  padding-right: 22rem;
  padding-left: 22rem;
`;

const ButtonBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const CalendarPage = () => {
  return (
    <div>
      <Header />
      <ButtonBlock>
        <WritePostButtonWrapper></WritePostButtonWrapper>
      </ButtonBlock>
      <Box>
        <Calendar />
      </Box>
    </div>
  );
};

export default CalendarPage;
