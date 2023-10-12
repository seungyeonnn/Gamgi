import React from 'react';
import dummy from '../db/obsessionData.json';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const ListBox = styled.div`
  width: 70rem;
  background: white;
  border: 1px solid ${palette.gray[5]};
  border-radius: 10px;
  padding: 3rem;
`;

const BottomLine = styled.div`
  border-bottom: 1px solid ${palette.gray[3]};
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const ObsessionList = (props) => {
  const obsessionList = dummy.obsessionContent.filter(
    (content) => content.id === parseInt(props.keys) + 4,
  );
  return (
    <>
      {obsessionList.map((script, index) => (
        <Content
          header={script.header}
          body={script.body}
          body2={script.body2}
          subheader={script.subheader}
          subbody={script.subbody}
          key={index}
        />
      ))}
    </>
  );
};

const Content = ({ header, body, body2, subheader, subbody }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>{header}</th>
          </tr>
        </thead>
      </table>
      <BottomLine />
      <table>
        <tbody>
          <tr>
            <td>{body}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <table>
        <tbody>
          <tr>
            <td>{body2}</td>
          </tr>
        </tbody>
      </table>
      <br /> <br />
      <table>
        <thead>
          <tr>
            <th>{subheader}</th>
          </tr>
        </thead>
      </table>
      <BottomLine />
      <table>
        <tbody>
          <tr>
            <td>{subbody}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ObsessionList;
