// 스플래시 페이지 담당자: 이동건 
import {
  Wrap,Box,Logo,Slogan,Title,
} from './Styled';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000); // 2초 후 로그인 페이지로 이동
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
  <Wrap>
    
      <Box>
        <Logo/>
        <Slogan>반려견 헌혈,<br/><br/>신청부터 관리까지 한 번에</Slogan>
        <Title>나눠주개</Title>
      </Box>
  </Wrap>
  )
};

export default Splash;


