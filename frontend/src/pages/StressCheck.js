import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import HeaderContainer from '../containers/HeaderContainer';
import CheckMenuBar from '../components/common/CheckMenuBar';
import dummy from '../db/stressCheck';
import { Radio } from 'antd';
import palette from '../lib/styles/palette';

const { Content } = Layout;

const TextBox = styled.div`
  width: 120%;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
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

const TitleBox = styled.div`
  width: 120%;
  background: white;
`;

const BottomLine = styled.div`
  border-bottom: 1px solid ${palette.gray[3]};
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const StressCheck = () => {
  const itemSum = () => {
    let sum = 0;
    const cbox = document.getElementsByClassName('chkbox');
    for (let i = 0; i < cbox.length; i++) {
      if (cbox[i].checked == true) {
        sum += parseInt(cbox[i].value);
      }
    }
    document.getElementById('total_sum').value = sum;
  };
  return (
    <div>
      <HeaderContainer />
      <DivBox>
        <ContentLayout>
          <StyledLayout>
            <CheckMenuBar />
            <StyledLayout style={{ padding: '0 100px 24px' }}>
              <StyledContent>
                <TitleBox>
                  <h2>스트레스 자가진단 (PSS)</h2>
                  <div>
                    이 척도는 일상생활에서 주관적으로 느끼는 스트레스의 정도를
                    평가하기 위한 척도입니다. <br /> 최근 1개월 동안 문항에
                    해당하는 내용을 얼마나 자주 느꼈는지 체크해 주십시오.
                  </div>
                  <BottomLine />
                </TitleBox>
                <table border="black" width="120%" height="40%">
                  <colgroup>
                    <col width="6%" />
                    <col width="50%" />
                    <col width="8%" />
                    <col width="8%" />
                    <col width="8%" />
                    <col width="8%" />
                    <col width="8%" />
                  </colgroup>
                  <thead>
                    <tr align="center" bgcolor="#EBEFF7">
                      <th colSpan="2">지난 1개월간 나는</th>
                      <th>전혀없음</th>
                      <th>거의없음</th>
                      <th>
                        때때로
                        <br /> 있음
                      </th>
                      <th>자주 있음</th>
                      <th>
                        매우
                        <br />
                        자주 있음
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummy.stress.map((content, idx) => (
                      <tr key={idx}>
                        <td align="center">{content.id}</td>
                        <td align="left">{content.content}</td>

                        {dummy.scores.map((score, idx) => (
                          <td align="center" key={idx}>
                            <input
                              className="chkbox"
                              name={content.id}
                              type="radio"
                              onClick={itemSum}
                              value={score.score}
                              id={idx}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                <br />
                <br />
                <h2 align="left">스트레스 검사결과</h2>
                <BottomLine />
                <div align="right">
                  <table width="120%">
                    <tbody>
                      <tr align="right">
                        <td colSpan="4" align="right">
                          <h3>
                            <b>합계 : </b>
                            <input
                              border-color="white"
                              id="total_sum"
                              type="text"
                              size="5"
                              value="0"
                              readOnly
                            />
                            <b> 점</b>
                          </h3>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <table border="black" width="120%">
                    <colgroup>
                      <col width="4%" />
                      <col width="10%" />
                    </colgroup>
                    <tbody>
                      {dummy.result.map((content, idx) => (
                        <tr align="center" key={idx}>
                          <td bgcolor="#EBEFF7">{content.header}</td>
                          <td align="left">
                            <tr>{content.content}</tr>
                            <tr>{content.content2}</tr>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <TextBox>
                    <p>
                      출처: 한국판 지각된 스트레스 척도(Perceived Stress Scale,
                      PSS)
                      <br />
                      이종하, 신철민, 고영훈, 임재형, 조숙행, 김승현, 정인과,
                      한창수 (2012), 한글판 스트레스 자각척도의 신뢰도와 타당도
                      연구, 정신신체의학, 20(2), 127-134
                    </p>
                  </TextBox>
                </div>
              </StyledContent>
            </StyledLayout>
          </StyledLayout>
        </ContentLayout>
      </DivBox>
    </div>
  );
};

export default StressCheck;
