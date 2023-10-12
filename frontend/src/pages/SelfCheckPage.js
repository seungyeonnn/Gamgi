import React, { useEffect, useState } from 'react';
import { Menu, Layout } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import SubMenuBar from '../components/common/SubMenuBar';
import SelfcheckButton from '../selfCheck/SelfcheckButton';

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

const StyledLayout = styled(Layout)`
  background: white;
`;

const TopBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4rem;
`;

const SelfCheckPage = () => {
  const onClick = (e) => {
    console.log('click', e);
  };
  // if (!) return <LoginModal />;
  return (
    <div>
      <HeaderContainer />
      <TopBox />
      <StyledLayout>
        <SubMenuBar />
        <StyledLayout style={{ padding: '0 100px 24px' }}>
          <Menu
            onClick={onClick}
            mode="horizontal"
            defaultSelectedKeys={'selfcheck'}
          >
            <Menu.Item
              onClick={onClick}
              key="selfcheck"
              icon={<MailOutlined />}
            >
              정신건강 정보
            </Menu.Item>
            <Menu.Item />

            <Menu.Item
              onClick={onClick}
              key="centerinfo"
              icon={<MailOutlined />}
              to="/centerInfo"
            >
              상담센터 정보
            </Menu.Item>
          </Menu>
          <StyledContent className="site-layout-background">
            <SelfcheckButton />
          </StyledContent>
        </StyledLayout>
      </StyledLayout>
    </div>
  );
};

export default SelfCheckPage;
