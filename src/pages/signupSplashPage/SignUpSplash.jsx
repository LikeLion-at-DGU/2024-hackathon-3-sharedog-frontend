import {
  Wrap, Box, Logo, Slogan
} from './Styled';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpSplash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2000); // 2초 후 로그인 페이지로 이동
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Wrap>
      <Box>
        <Slogan><p>황민영</p>님,<br/><br/>회원가입을 축하드립니다!</Slogan>
        <br></br>
        <Logo/>
      </Box>
    </Wrap>
  );
};

export default SignUpSplash;
