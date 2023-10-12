import React from 'react';
import { Menu, Layout } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import CenterList from '../selfCheck/CenterList';
import SelfCheckPage from './SelfCheckPage';

const { Content } = Layout;

const StyledContent = styled(Content)`
  width: 80rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 100;
  margin-top: 2rem;
  overflow: 'initial';
`;

const textMap = {
  healthInfo: '정신건강 정보',
  centerInfo: '상담센터 정보',
};

const InfoButton = (type) => {
  const onClick = (e) => {
    console.log('click', e);
  };
  const text = textMap[type];

  return (
    <div>
      <Menu
        onClick={onClick}
        mode="horizontal"
        defaultSelectedKeys={'selfcheck'}
      >
        <Menu.Item
          onClick={onClick}
          key="selfcheck"
          icon={<MailOutlined />}
          type="healthInfo"
        >
          정신건강 정보
        </Menu.Item>
        <Menu.Item />

        <Menu.Item
          onClick={onClick}
          key="centerinfo"
          icon={<MailOutlined />}
          type="centerInfo"
        >
          상담센터 정보
        </Menu.Item>
      </Menu>
      <StyledContent>
        {type === 'healthInfo' ? <SelfCheckPage /> : <CenterList />}
      </StyledContent>
    </div>
  );
};

export default InfoButton;
