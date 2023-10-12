// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie';
import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import Button from '../components/common/Button';
import HeaderContainer from '../containers/HeaderContainer';
import palette from '../lib/styles/palette';
import Responsive from '../components/common/Responsive';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
  {
    id: '우울',
    label: '우울',
    value: 12,
    color: 'hsl(203,91%,83%)',
  },
  {
    id: '행복',
    label: '행복',
    value: 5,
    color: 'hsl(33,90%,77%)',
  },
  {
    id: '기쁨',
    label: '기쁨',
    value: 4,
    color: 'hsl(51,98%,80%)',
  },
  {
    id: '사랑',
    label: '사랑',
    value: 3,
    color: 'hsl(353,53%,87%)',
  },
  {
    id: '분노',
    label: '분노',
    value: 3,
    color: 'hsl(1,97%,77%)',
  },
  {
    id: '불안',
    label: '불안',
    value: 2,
    color: 'hsl(264,65%,85%)',
  },
  {
    id: '슬픔',
    label: '슬픔',
    value: 2,
    color: 'hsl(188,83%,84%)',
  },
  {
    id: '생각없음',
    label: '생각없음',
    value: 1,
    color: 'hsl(0,0%,67%)',
  },
];

const { Content } = Layout;

const StyledContent = styled(Content)`
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 100;
  margin: 0;
  overflow: 'initial';
`;

const TopBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4rem;
`;

const ButtonBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const MyResponsiveBar = () => {
  return (
    <div>
      <HeaderContainer />
      <TopBox />
      <ButtonBlock>
        <WritePostButtonWrapper>
          <h3>2021 JULY</h3>
          <Button to="/calendar">캘린더</Button>
        </WritePostButtonWrapper>
      </ButtonBlock>
      <StyledContent>
        <div style={{ height: '500px' }}>
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={data.map((data) => data.color)}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#000',
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </StyledContent>
    </div>
  );
};

export default MyResponsiveBar;
