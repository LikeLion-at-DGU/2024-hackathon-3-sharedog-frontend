import Header from './header/Header';
import { useNavigate } from 'react-router-dom';
import Footer from './footer/testFooter';
import React from 'react';
import styled from "styled-components";
import Test13 from '../../assets/images/test13.jpg';
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
  color: #9C9CA1;
  text-align: center;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 214.286% */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 3vw;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 30vh;
`
const Text2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 250% */
`;


const testResult2 = () => {
  const navigate = useNavigate();

  const handleFooterClick = () => {
    navigate('/home'); // 페이지 네비게이션
  };

  return (
    <>
      <Header/>
      <Wrapper>
        <Title>헌혈 대상이 아니에요</Title>
        <img src={Test13} alt="Test13" />
        <InputBox>
          <Content>
            <Check2MyPageSVG /> 
            <Text2>헌혈 가능 나이인 만 2~8세를 초과했을 수 있어요.</Text2>
          </Content>
          <Content>
            <Check2MyPageSVG />
            <Text2>20~25kg이 되어야 헌혈견이 될 수 있어요.</Text2>
          </Content>
          <Content>
            <Check2MyPageSVG />
            <Text2>헌혈이 불가한 과거 질병 이력이 있을 수 있어요.</Text2>
          </Content>
          <Content>
            <Check2MyPageSVG />
            <Text2>주기적으로 예방접종을 진행하지 않았을 수 있어요.</Text2>
          </Content>
        </InputBox>
      </Wrapper>
      <Footer 
        btnColor="#FF6969" // 상태에 따라 버튼 색깔 변경
        buttonText="확인"
        onClick={handleFooterClick} // 클릭 핸들러 전달
      />
    </>
  );
};

export default testResult2;