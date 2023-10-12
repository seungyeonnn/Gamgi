import styled from 'styled-components';
import Emotion from '../../pages/Emotion';
import { Layout } from 'antd';
import palette from '../../lib/styles/palette';

const { Content } = Layout;

const TitleInput = styled.input`
  width: 100%;
  padding-bottom: 20px;
  border: none;
  font-size: 22px;
  border-bottom: solid 1px #ababab;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`;

const ContentBox = styled.textarea`
  padding-top: 20px;
  width: 100%;
  resize: none;
  border: none;
  height: 500px;
  &:focus {
    outline: none;
  }
`;

const StyledContent = styled(Content)`
  background-color: #ffffff;
  border: 2px solid ${palette.gray[4]};
  border-radius: 10px;
  padding: 3rem;
`;

const Editor = ({ title, body, onChangeField }) => {
  const onChangeContent = (e) => {
    onChangeField({ key: 'body', value: e.target.value });
  };
  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  return (
    <div>
      <Emotion />
      <h3>✿ 오늘의 감정을 기록해 주세요✿</h3>
      <br />
      <StyledContent>
        <TitleInput
          placeholder="제목을 입력하세요_ 최대 8글자"
          onChange={onChangeTitle}
          value={title}
        />
        <ContentBox
          placeholder="내용을 입력하세요"
          onChange={onChangeContent}
          value={body}
        />
      </StyledContent>
    </div>
  );
};

export default Editor;
