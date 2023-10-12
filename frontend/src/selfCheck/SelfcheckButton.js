import React from 'react';
import styled from 'styled-components';
import { Layout, Space } from 'antd';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 100;
  margin: 0;
  overflow: 'initial';
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 2rem;
  width: 150px;
  height: 58px;
  border: 2px solid;
  border-radius: 15px;
  font-size: 15px;
`;

const SelfcheckButton = () => {
  return (
    <div>
      <StyledContent>
        <Space size="large">
          <Link to="/depression">
            <ButtonWithMarginTop cyan fullwidth>
              우울증
            </ButtonWithMarginTop>
          </Link>
          <Link to="/stress">
            <ButtonWithMarginTop cyan fullwidth>
              스트레스
            </ButtonWithMarginTop>
          </Link>
          <Link to="/panicdisorder">
            <ButtonWithMarginTop cyan fullwidth>
              공황장애
            </ButtonWithMarginTop>
          </Link>
        </Space>
        <Space size="large">
          <Link to="/obsession">
            <ButtonWithMarginTop cyan fullwidth>
              정신장애
            </ButtonWithMarginTop>
          </Link>
          <Link to="/suicide">
            <ButtonWithMarginTop cyan fullwidth>
              자살위험성
            </ButtonWithMarginTop>
          </Link>

          <Link to="/anxiety">
            <ButtonWithMarginTop cyan fullwidth>
              불안
            </ButtonWithMarginTop>
          </Link>
        </Space>
      </StyledContent>
    </div>
  );
};

export default SelfcheckButton;
