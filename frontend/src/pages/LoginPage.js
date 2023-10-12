import React from 'react';
import styled from 'styled-components';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/LoginForm';
import LoginGamgi from '../lib/images/realGamgi2.png';

const ImgBox = styled.img`
  width: 100%;
  height: 100%;
`;

const LoginPage = () => {
  return (
    <div>
      <ImgBox src={LoginGamgi}></ImgBox>

      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </div>
  );
};

export default LoginPage;
