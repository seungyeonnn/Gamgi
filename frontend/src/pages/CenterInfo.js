import React, { useState } from 'react';
import { Menu, Layout, Dropdown } from 'antd';
import { MailOutlined, DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import SubMenuBar from '../components/common/SubMenuBar';
import CenterList from '../selfCheck/CenterList';
import palette from '../lib/styles/palette';

const { Content } = Layout;

const DivBox = styled.div`
  background-color: #daeee0;
  height: 100%;
  padding: 3rem;
`;

const ContentLayout = styled(Layout)`
  background: white;
  border: 1px solid ${palette.gray[5]};
  border-radius: 10px;
  padding: 1rem;
  margin: 3rem;
`;

const StyledContent = styled(Content)`
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 100;
  margin-top: 2rem;
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

const CenterInfo = (type) => {
  const onClick = (e) => {
    console.log('click', e);
  };

  return (
    <div>
      <HeaderContainer />
      <DivBox>
        <ContentLayout>
          <StyledLayout>
            <SubMenuBar />
            <StyledLayout style={{ padding: '0 100px 24px' }}>
              <br />
              <h2>상담센터 정보</h2>
              <StyledContent>
                <CenterList />
              </StyledContent>
            </StyledLayout>
          </StyledLayout>
        </ContentLayout>
      </DivBox>
    </div>
  );
};

export default CenterInfo;
