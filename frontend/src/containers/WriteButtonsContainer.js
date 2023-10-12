import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WriteActionButtons from '../components/write/WriteButtons';
import { writePost, updatePost } from '../modules/write';
import ErrorModal from '../components/common/ErrorModal';

const WriteButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, emotion, post, postError, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      emotion: write.emotion,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    // 에러 처리
    if (!emotion) {
      ErrorModal('오늘의 감기를 선택해주세요');
      return;
    }
    if (!title) {
      ErrorModal('제목을 입력해주세요');
      return;
    }
    if (!body) {
      ErrorModal('내용을 입력해주세요');
      return;
    }
    // 에러가 없으면 보냄
    if (originalPostId) {
      dispatch(updatePost({ title, body, emotion, id: originalPostId }));
      return;
    }
    dispatch(
      writePost({
        title,
        body,
        emotion,
      }),
    );
  };
  // 취소
  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (post) {
      history.push(`/postlist`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);
  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default withRouter(WriteButtonsContainer);
