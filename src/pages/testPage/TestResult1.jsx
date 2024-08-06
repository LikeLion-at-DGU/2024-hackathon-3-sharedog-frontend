import Header from './header/Header';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import styled from "styled-components";
import Test1SVG from '../../assets/icons/test1.svg?react';
import Check2MyPageSVG from '../../assets/icons/check2MyPage.svg?react';
import { 
  Wrapper 
} from './Styled';

const Title = styled.div`
  color: var(--Red-Red04, #FF6969);
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px; /* 150% */
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  color: #9C9CA1;
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 214.286% */
  align-items: center;
  justify-content: flex-start;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15vh;
  background-color: #FAFAFC;
    /* box-shadow: 0px -6px 14px 0px rgba(47, 47, 47, 0.04); */
`;

const Container = styled.div`
  display: flex;
  width: 88%;
  padding: 16px 0px;
  justify-content: space-around;
  align-items: center;
`;

const FooterButton1 = styled.div`
  display: flex;
  padding: 16px 0px;
  width: 40%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 30px;
  background: rgba(156, 156, 161, 0.50);
  color: #FFFFFF;
`;

const FooterButton2 = styled.div`
  display: flex;
  padding: 16px 0px;
  width: 40%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 30px;
  background: #FF6969;
  color: #FFFFFF;
`;

const Text2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2vw;
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 250% */
`;

const testResult1 = () => {
  const navigate = useNavigate();

  const handleFooterClick1 = () => {
    navigate('/home'); // 페이지 네비게이션
  };

  const handleFooterClick2 = () => {
    navigate('/reservation'); // 페이지 네비게이션
  };

  return (
    <>
      <Header progress={0} />
      <Wrapper>
        <Title>헌혈견이 될 수 있어요!</Title>
        <Test1SVG />
        <InputBox>
          <Content>
            <Check2MyPageSVG />
            <Text2>한 번의 헌혈로 네 마리의 생명을 살릴 수 있어요.</Text2>
          </Content>
          <Content>
            <Check2MyPageSVG />
            <Text2>무료 건강검진도 받을 수 있고, 헌혈 후 강아지는 건강한 새 혈액을 생성해요.</Text2>
          </Content>
          <Content>
            <Check2MyPageSVG />
            <Text2>반려견 헌혈은 지정 동물병원에서 진행할 수 있어요.</Text2>
          </Content>
        </InputBox>
      </Wrapper>
      <Footer>
        <Container>
          <FooterButton1 onClick={handleFooterClick1}>
            확인
          </FooterButton1>
          <FooterButton2 onClick={handleFooterClick2}>
            헌열 예약하기
          </FooterButton2>
        </Container>
      </Footer>
    </>
  );
};

export default testResult1;