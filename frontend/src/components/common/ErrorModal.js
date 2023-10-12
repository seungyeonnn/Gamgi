import { Modal } from 'antd';

const ErrorModal = (error) => {
  Modal.error({
    title: '에러발생',
    content: error,
  });
};

export default ErrorModal;
