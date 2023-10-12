import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import HeaderContainer from '../containers/HeaderContainer';
import CheckMenuBar from '../components/common/CheckMenuBar';
import dummy from '../db/suicideCheck';
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

const SuicideCheck = () => {
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
                  <h2>자살위험성 자가진단 (SSI)</h2>
                  <div>
                    다음은 여러분이 일상생활에서 경험할 수 있는 내용들로
                    구성되어 있습니다. <br />
                    지난 1주일 동안 본인이 느끼시고 행동한 것을 생각하는 칸에
                    체크해주세요.
                  </div>
                  <BottomLine />
                </TitleBox>
                <table border="black" width="120%">
                  <colgroup>
                    <col width="6%" />
                    <col width="auto" />
                    <col width="10%" />
                    <col width="10%" />
                    <col width="10%" />
                  </colgroup>
                  <thead>
                    <tr align="center" bgcolor="#EBEFF7">
                      <th colSpan="2">지난 1주일간 나는</th>
                      <th>극히 드물었다</th>
                      <th>가끔 있었다</th>
                      <th>종종 있었다</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummy.suicide.map((content, idx) => (
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
                <h2 align="left">자살위험성 검사결과</h2>
                <BottomLine />
                <div align="right">
                  <table width="120%">
                    <tbody>
                      <tr align="right">
                        <td colSpan="4" align="right">
                          <h3>
                            <b>합계 : </b>
                            <input
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
                      1. Dube P., Kurt K., Bair MJ., Theobald D., Williams LS.
                      The p4 screener: evaluation of a brief measure for
                      assessing potential suicide risk in 2 randomized
                      effectiveness trials of primary care and oncology
                      patients. Primary care companion to the Journal of
                      clinical psychiatry. 2010;12(6).
                      <br />
                      2. 박주언, 김원형, 노대영, 원성두, 김하경, 강석훈, 홍나래,
                      박성용, 김대호, 채정호. 재난정신건강평가 워크북.
                      대한불안의학회, 정신건강기술개발사업단. 2016.
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
export default SuicideCheck;
