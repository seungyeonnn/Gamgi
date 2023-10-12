import React from 'react';
import { Body, Close, Container, Contents, Overlay, Title } from './Modal';
import love from '../../lib/images/emotions/3_love.png';
import styled from 'styled-components';

const Img = styled.img`
  width: 20%;
  height: 20%;
`;

const StyledModal = (props) => {
  const { data, state, closeModal } = props;

  return state ? (
    <Container>
      <Overlay onClick={(event) => closeModal(event)} />
      <Contents>
        <Title>
          {data.title}
          <Close onClick={(event) => closeModal(event)}>X</Close>
        </Title>
        <Body>
          <Img src={love}></Img>
          <br />
          {data.description}
        </Body>
      </Contents>
    </Container>
  ) : (
    <div></div>
  );
};

export default StyledModal;
