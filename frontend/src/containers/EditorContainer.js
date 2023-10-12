import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Editor from '../components/write/Editor';
import { changeField, initialize } from '../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body, emotion } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    emotion: write.emotion,
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <Editor
      onChangeField={onChangeField}
      title={title}
      body={body}
      emotion={emotion}
    />
  );
};

export default EditorContainer;
