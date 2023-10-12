import React from 'react';
import { Layout } from 'antd';
import dummy from '../db/depressionCheck';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import CheckMenuBar from '../components/common/CheckMenuBar';
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

const DepressionCheck = () => {
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
                  <h2>우울증 자가진단 (CES-D)</h2>
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
                        극히 <br />
                        드물었다 <br />
                        (1일 미만)
                      </th>
                      <th>
                        가끔 있었다 <br /> (1-2일)
                      </th>
                      <th>
                        종종 있었다 <br /> (3-4일)
                      </th>
                      <th>
                        대부분
                        <br /> 그랬다 <br /> (5-7일)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummy.depression.map((content, idx) => (
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
                <h2 align="left">우울증 검사결과</h2>
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
                      출처: Spitzer RL., Kroenke K., Williams JBW. Validation
                      and utility of a self-report version of PRIME-MD: the PHQ
                      primary care study. The Journal of the American Medical
                      Association. 1999:282(18);1737-1744.
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
export default DepressionCheck;
