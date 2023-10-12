import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoginModal from '../components/common/LoginModal';

export default (SpecialComponent, option, adminRoute = null) => {
  /*
     예)  option: null -> 누구나 출입이 가능한 페이지 (home)
                 true -> 로그인한 유저만 출입이 가능한 페이지
                 false -> 로그인한 유저는 출입이 불가능한 페이지
  */

  const AuthenticateCheck = (props) => {
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
      if (!user && option) {
        props.history.push('/');
      }
    }, []);

    return <SpecialComponent />;
  };

  return AuthenticateCheck;
};
