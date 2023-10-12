import React from 'react';
import { Layout } from 'antd';
import dummy from '../db/depressionCheck';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import CheckMenuBar from '../components/common/CheckMenuBar';
import palette from '../lib/styles/palette';

const { Content } = Layout;

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
  width: 100%;
  background: white;
`;

const BottomLine = styled.div`
  border-bottom: 1px solid ${palette.gray[3]};
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const checkTable = styled.table`
  border: 2px solid ${palette.gray[3]};
  padding: 10px;
  border-collapse: collapse;
`;

const Calculator = () => {
  const itemSum = () => {
    let sum = 0;
    const cbox = document.getElementsByName('chkbox');
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
      <TopBox />
      <StyledLayout>
        <CheckMenuBar />
        <StyledLayout style={{ padding: '0 100px 24px' }}>
          <StyledContent>
            <TitleBox>
              <h2>우울증 자가진단</h2>
              <div>
                아래에 있는 항목들은 지난 일주일 동안의 당신의 상태에 대한
                질문입니다. 이와 같은 일들이 지난 일주일 동안 얼마나 자주
                일어났었는지 답변해 주십시오
              </div>
              <BottomLine />
            </TitleBox>
            <table border="black">
              <colgroup>
                <col width="6%" />
                <col width="auto" />
                <col width="10%" />
                <col width="10%" />
                <col width="10%" />
                <col width="10%" />
              </colgroup>
              <thead>
                <tr align="center" bgcolor="#EBEFF7">
                  <th colSpan="2">지난 1주일간 나는</th>
                  <th>
                    극히 드물었다 <br />
                    (1일 미만)
                  </th>
                  <th>
                    가끔 있었다 <br /> (1-2일)
                  </th>
                  <th>
                    종종 있었다 <br /> (3-4일)
                  </th>
                  <th>
                    대부분 그랬다 <br /> (5-7일)
                  </th>
                </tr>
              </thead>
              <tbody>
                {dummy.depression.map((content, idx) => (
                  <tr align="center" key={idx}>
                    <td>{content.id}</td>
                    <td>{content.content}</td>

                    {dummy.scores.map((score, idx) => (
                      <td align="center" key={idx}>
                        <input
                          name="chkbox"
                          type="checkbox"
                          onClick={itemSum}
                          value={score.score}
                          id={idx}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td align="center" colSpan="2">
                    합계
                  </td>
                  <td colSpan="4" align="right">
                    <input
                      border-color="white"
                      id="total_sum"
                      type="text"
                      size="5"
                      value="0"
                      readOnly
                    />
                    점
                  </td>
                </tr>
              </tfoot>
            </table>
          </StyledContent>
        </StyledLayout>
      </StyledLayout>
    </div>
  );
};
export default Calculator;
