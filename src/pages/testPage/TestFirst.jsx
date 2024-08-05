import Header from './header/Header';
import { useNavigate } from 'react-router-dom';
import Footer from './footer/testFooter';
import React from 'react';
import styled from "styled-components";
import Test1SVG from '../../assets/icons/test1.svg?react';
import { 
  Wrapper 
} from './Styled';

const Title = styled.div`
  color: var(--Gray-Gray03, #3A3A3C);
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px; /* 150% */
  p{
    color: #FF6969;
    display: inline;
    font-family: SUIT;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
  }
`;

const Content = styled.div`
  color: #9C9CA1;
  text-align: center;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 214.286% */
`;

const testFirst = () => {
  const navigate = useNavigate();

  const handleFooterClick = () => {
    navigate('/testSecond'); // 페이지 네비게이션
  };

  return (
    <>
      <Header progress={0} />
      <Wrapper>
        <Title>우리집 강아지는 <br></br> <p>헌혈견</p>이 될 수 있을까?</Title>
        <Test1SVG />
        <Content>3분만에 우리집 강아지가 <br></br> 헌혈견이 될 수 있는지 알아보세요!</Content>
      </Wrapper>
      <Footer 
        btnColor="#FF6969" 
        buttonText ="테스트 시작하기"
        onClick={handleFooterClick} // 클릭 핸들러 전달
      />
    </>
  );
};

export default testFirst;