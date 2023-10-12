import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import CheckMenuBar from '../components/common/CheckMenuBar';
import HeaderContainer from '../containers/HeaderContainer';
import dummy from '../db/anxietyCheck.json';
import palette from '../lib/styles/palette';
import { Radio } from 'antd';

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

const AnxietyCheck = () => {
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
                  <h2>불안장애 자가진단 (STAI-X-1)</h2>
                  <div>
                    다음 문장들은 사람들이 자신을 표현하는데 사용되는
                    것들입니다.
                    <br />각 문장을 잘 읽으시고 각 문장의 오른편에 있는 네 개의
                    항목 중에서 당신이 지금 이 순간에 바로 느끼고 있는 상태를
                    가장 잘 나타내주는 문항 하나에 체크 하여 주십시오
                  </div>
                  <BottomLine />
                </TitleBox>
                <table border="black" width="120%">
                  <colgroup>
                    <col width="6%" />
                    <col width="auto" />
                    <col width="9%" />
                    <col width="9%" />
                    <col width="9%" />
                    <col width="9%" />
                  </colgroup>
                  <thead>
                    <tr align="center" bgcolor="#EBEFF7">
                      <th colSpan="2">문항</th>
                      <th>
                        거의 <br /> 그렇지 않다
                      </th>
                      <th>가끔 그렇다</th>
                      <th>자주 그렇다</th>
                      <th>
                        거의 <br /> 언제나 그렇다
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummy.anxiety.map((content, idx) => (
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
                <h2 align="left">불안장애 검사결과</h2>
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
                      출처: Spielberger, C. D.(1970). Manual for the State-Trait
                      Anxiety Inventory. Palo alto, CA, Consulting Psychologist
                      Press
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
export default AnxietyCheck;
