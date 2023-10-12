import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import SubMenuBar from '../components/common/SubMenuBar';
import dummy from '../db/obsessionData.json';
import ObsessionList from '../selfCheck/ObsessionList';
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
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-top: 3rem;
  overflow: 'initial';
  border: 1px solid ${palette.gray[5]};
  border-radius: 10px;
  padding: 3rem;
`;

const StyledLayout = styled(Layout)`
  background: white;
`;

const TopBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4rem;
`;

const Obsession = () => {
  const onClick = (e) => {
    setkey(e.key);
  };

  const [showCanvos, setShowCanvos] = useState(false);
  const [key, setkey] = useState(1);
  const addToCanvos = () => {
    setShowCanvos(true);
  };
  // console.log(addToCanvos);

  return (
    <div>
      <HeaderContainer />
      <DivBox>
        <ContentLayout>
          <StyledLayout>
            <SubMenuBar />
            <StyledLayout style={{ padding: '0 100px 24px' }}>
              <Menu onClick={onClick} mode="horizontal" defaultSelectedKeys="1">
                {dummy.menu.map((title) => (
                  <Menu.Item
                    onClick={addToCanvos}
                    key={title.id}
                    icon={<MailOutlined />}
                  >
                    {title.title}
                  </Menu.Item>
                ))}
              </Menu>

              <StyledContent>
                <ObsessionList keys={key} />
              </StyledContent>
            </StyledLayout>
          </StyledLayout>
        </ContentLayout>
      </DivBox>
    </div>
  );
};

export default Obsession;
