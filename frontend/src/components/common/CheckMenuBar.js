import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Menu, Layout } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const StyledSider = styled(Sider)`
  overflow: 'auto';
  height: '100vh';
  position: 'fixed';
  left: 0;
`;

const CheckMenuBar = () => {
  const roots = [
    'depressionCheck',
    'stressCheck',
    'physicalCheck',
    'obsessionCheck',
    'suicideCheck',
    'anxietyCheck',
  ];
  const userMenus = [
    {
      key: 'depressionCheck',
      name: '우울증',
      icon: <AppstoreOutlined />,
      root: 'depressionCheck',
    },
    {
      key: 'stressCheck',
      name: '스트레스',
      icon: <SettingOutlined />,
      root: 'stressCheck',
    },
    {
      key: 'physicalCheck',
      name: '신체증상 장애',
      icon: <AppstoreOutlined />,
      root: 'physicalCheck',
    },
    {
      key: 'obsessionCheck',
      name: '강박장애',
      icon: <SettingOutlined />,
      root: 'obsessionCheck',
    },
    {
      key: 'suicideCheck',
      name: '자살위험성',
      icon: <AppstoreOutlined />,
      root: 'suicideCheck',
    },
    {
      key: 'anxietyCheck',
      name: '불안장애',
      icon: <SettingOutlined />,
      root: 'anxietyCheck',
    },
  ];

  const [openKeys, setOpenKeys] = useState(); //펼쳐져 있을 메뉴
  const [selectedKeys, setSelectedKeys] = useState(); //키

  const history = useHistory();

  useEffect(() => {
    const pathname = history.location.pathname; //현재위치
    const splitPathName = pathname.split(/(?=\/)/g); //'/'기준으로 위치 나누기

    const openKey =
      splitPathName.length === 4
        ? [`${splitPathName[0]}`, `${splitPathName[0]}${splitPathName[1]}`]
        : //오픈된 메뉴가 2단의 메뉴인 경우
          [`${splitPathName[0]}`]; // 1단만 열려 있는 경우

    setOpenKeys(openKey);
    setSelectedKeys([pathname]);
  }, [history.location.pathname]);

  if (!userMenus || !selectedKeys) {
    return <div />;
  }

  return (
    <div>
      {roots.map((root, idx) => {
        return (
          <StyledSider key={idx}>
            <Menu
              className="main-nav"
              style={{ width: 256 }}
              mode="inline"
              openKeys={openKeys}
              selectedKeys={selectedKeys}
              onOpenChange={(openKeys) => setOpenKeys(openKeys)}
            >
              {userMenus &&
                userMenus
                  .filter((item) => item.root === root)
                  .map((item, idx) => {
                    const pathname = `/${item.root}`;
                    return (
                      <Menu.Item icon={item.icon} key={`/${root}`}>
                        <Link to={pathname}>{item.name}</Link>
                      </Menu.Item>
                    );
                  })}
            </Menu>
          </StyledSider>
        );
      })}
    </div>
  );
};

export default CheckMenuBar;
