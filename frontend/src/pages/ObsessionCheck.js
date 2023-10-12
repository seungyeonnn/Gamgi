import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import HeaderContainer from '../containers/HeaderContainer';
import CheckMenuBar from '../components/common/CheckMenuBar';
import dummy from '../db/obsessionCheck';
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

const ObsessionCheck = () => {
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
                  <h2>강박장애 자가진단 (MOCI)</h2>
                  <div>
                    이 척도는 청소년부터 청장년층의 강박증 정도를 알아보기 위한
                    자가검진 척도입니다. 각 문항을 읽고 오래 생각하지 마시고 예
                    또는 아니오에 체크해 주십시오.
                  </div>
                  <BottomLine />
                </TitleBox>
                <table border="black" width="120%">
                  <colgroup>
                    <col width="6%" />
                    <col width="auto" />
                    <col width="10%" />
                    <col width="10%" />
                  </colgroup>
                  <thead>
                    <tr align="center" bgcolor="#EBEFF7">
                      <th colSpan="2">문항</th>
                      <th>예</th>
                      <th>아니오</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummy.obsession.map((content, idx) => (
                      <tr align="center" key={idx}>
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
                <h2 align="left">강박장애 검사결과</h2>
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
                  <table width="120%" border="black">
                    <colgroup>
                      <col width="2%" />
                      <col width="8%" />
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
                    <p>출처: Maudsley Obsessional-Compulsive Inventory(MOCI)</p>
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

export default ObsessionCheck;
