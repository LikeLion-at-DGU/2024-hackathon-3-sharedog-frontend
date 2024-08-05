// 스플래시 페이지 담당자: 이동건 
import {
  Wrap,Box,Logo,Slogan,Title,CopyRight,
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
        <Title>나눠주개</Title>
        <Slogan>반려견 헌혈 및 수혈까지 편리하게!</Slogan>

      </Box>
      <CopyRight>COPYRIGHT.나눠주개.ALL RIGHTSRESERVED.</CopyRight>
  </Wrap>
  )
};

export default Splash;


