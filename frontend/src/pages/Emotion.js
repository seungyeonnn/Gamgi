import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeField } from '../modules/write';
import { Layout } from 'antd';
import palette from '../lib/styles/palette';

const { Content } = Layout;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;
`;

const Img = styled.img`
  width: 70%;
`;

const ClickImg = styled.img`
  width: 100%;
`;

const StyledContent = styled(Content)`
  background-color: #ffffff;
  border: 2px solid ${palette.gray[4]};
  border-radius: 10px;
`;

const importAll = (r) => {
  let images = [];
  r.keys().forEach((item, index) => {
    images[index] = r(item);
  });
  return images;
};

// default 부분이 필요한지에 대한 의문이 조금 있음.
const Emotion = () => {
  const [num, setNum] = useState(-1);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const emotion_names = [
    '행복',
    '기쁨',
    '사랑',
    '화남',
    '슬픔',
    '우울',
    '불안',
    '생각없음',
  ];
  useEffect(() => {
    setImages(
      importAll(require.context('../lib/images/emotions', false, /.png/)),
    );
  }, []);

  //Todo : 다른 부분도 클릭하면 바로 그 아이콘이 커져야하는데 그렇지 못함. 부자연스럽게 커짐
  const onClick = (index) => {
    num === index ? setNum(-1) : setNum(index);
    dispatch(changeField({ key: 'emotion', value: emotion_names[index] }));
  };

  return (
    <div>
      <Box>
        <h3>✿ 오늘의 감기를 선택해 주세요✿</h3>
        <StyledContent>
          <table>
            <tbody>
              <tr height="10" />
              <tr align="center">
                {images.map((img, index) => (
                  <td
                    width="130"
                    height="130"
                    key={index}
                    onClick={() => onClick(index)}
                  >
                    {index === num ? (
                      <ClickImg src={images[index].default} />
                    ) : (
                      <Img src={images[index].default} />
                    )}
                  </td>
                ))}
              </tr>
              <tr align="center">
                {emotion_names.map((emotion_name, idx) => (
                  <td width="130" key={idx}>
                    {emotion_name}
                  </td>
                ))}
              </tr>
              <tr height="30" />
            </tbody>
          </table>
        </StyledContent>
      </Box>
    </div>
  );
};

export default Emotion;
