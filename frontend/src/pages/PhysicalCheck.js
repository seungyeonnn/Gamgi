import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import HeaderContainer from '../containers/HeaderContainer';
import CheckMenuBar from '../components/common/CheckMenuBar';
import dummy from '../db/physicalCheck';
import { Radio } from 'antd';
import palette from '../lib/styles/palette';

const { Content } = Layout;

const TextBox = styled.div`
  width: 120%;
  margin-top: 1rem;
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

const PhysicalCheck = () => {
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
                  <h2>신체장애 자가진단 (DSM-V)</h2>
                  <div>
                    아래에 있는 항목들은 지난 일주일 동안의 당신의 상태에 대한
                    질문입니다. 이와 같은 일들이 지난 일주일 동안 얼마나 자주
                    일어났었는지 답변해 주십시오
                  </div>
                  <BottomLine />
                </TitleBox>
                <table border="black" width="120%">
                  <colgroup>
                    <col width="6%" />
                    <col width="50%" />
                    <col width="10%" />
                    <col width="10%" />
                    <col width="10%" />
                  </colgroup>
                  <thead>
                    <tr align="center" bgcolor="#EBEFF7">
                      <th colSpan="2">
                        지난 4주 동안, 다음 나열되는 증상들에 얼마나 자주
                        시달렸습니까?
                      </th>
                      <th>
                        전혀 <br />
                        시달리지 않음
                      </th>
                      <th>약간 시달림</th>
                      <th>대단히 시달림</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummy.physical.map((content, idx) => (
                      <tr key={idx}>
                        <td align="center">{content.id}</td>
                        <td align="left">{content.content}</td>

                        {dummy.scores.map((score, idx) => (
                          <td align="center" key={idx}>
                            <div id={content.id}>
                              <input
                                className="chkbox"
                                name={content.id}
                                type="radio"
                                onClick={itemSum}
                                value={score.score}
                                id={idx}
                              />
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                <br />
                <br />
                <h2 align="left">신체증상장애 검사결과</h2>
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
                      출처
                      <br />
                      1. Kroenke K., Spitzer RL., Williams JB. The PHQ–15:
                      validity of a new measure for evaluating the severity of
                      somatic symptoms. Psychosomatic Medicine. 2002;64:258–266.
                      <br /> 2. Han C, Pae CU, Patkar AA, Masand PS, Kim KW, Joe
                      SH, Jung IK. Psychometric properties of the Patient Health
                      Questionnaire-15(PHQ-15) for measuring the somatic
                      symptoms of psychiatric outpatients. Psychosomatics. 2009;
                      50(6):580-585.
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

export default PhysicalCheck;
