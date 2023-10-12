import React from 'react';
import styled from 'styled-components';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/RegisterForm';
import LoginGamgi from '../lib/images/realGamgi2.png';

const ImgBox = styled.img`
  width: 100%;
  height: 100%;
`;

const RegisterPage = () => {
  return (
    <div>
      <ImgBox src={LoginGamgi}></ImgBox>
      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
    </div>
  );
};

export default RegisterPage;
