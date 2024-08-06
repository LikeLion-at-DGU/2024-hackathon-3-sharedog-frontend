import Header from './header/Header';
import { useNavigate } from 'react-router-dom';
import Footer from './footer/testFooter';
import React, { useState } from 'react'; // 상태 관리를 위해 useState를 import합니다.
import styled from "styled-components";
import Test2SVG from '../../assets/icons/test2.svg?react';
import Test3SVG from '../../assets/icons/test3.svg?react';
import { Wrapper } from './Styled';
import { API } from '../../api';

const Title = styled.div`
  color: var(--Gray-Gray03, #3A3A3C);
  text-align: center;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px; /* 166.667% */
`;

const Content = styled.div`
  color: var(--Gray-Gray02, #636366);
  text-align: center;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 214.286% */
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  justify-content: space-evenly;
  gap: 5vw;
`;

const Body = styled.div`
  width: 88%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5vw;
`;

const SVGWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 텍스트와 이미지를 수직 중앙에 정렬 */
  justify-content: center; /* 텍스트와 이미지를 수평 중앙에 정렬 */
  padding: 0; /* 패딩을 0으로 설정하여 여백 제거 */
  margin: 0; /* 마진을 0으로 설정하여 여백 제거 */
  width: fit-content; /* 컨테이너의 너비를 콘텐츠에 맞춤 */
  height: fit-content;
`;

const SVGContainer = styled.div`
  border-radius: 15px;
  border: ${props => (props.isActive ? '2px solid rgba(255, 105, 105, 0.60)' : 'none')}; /* 클릭 시 보더 색상 */
  background: ${props => (props.isActive ? '#FAFAFC' : 'transparent')}; /* 클릭 시 배경 색상 */
  box-shadow: ${props => (props.isActive ? '0px 0px 10px 0px rgba(255, 105, 105, 0.25)' : 'none')}; /* 클릭 시 그림자 */
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0;
  cursor: pointer; /* 클릭 가능하다는 것을 나타내기 위해 커서를 포인터로 설정 */

  &:hover {
    border: 3px solid rgba(255, 105, 105, 0.60);
    background: #FAFAFC;
    box-shadow: 0px 0px 10px 0px rgba(255, 105, 105, 0.25);
  }
`;

const TestSecond = () => {
  const navigate = useNavigate();
  const [activeSVG, setActiveSVG] = useState(null); // 클릭된 SVG를 추적할 상태

  const handleSVGClick = (id) => {
    setActiveSVG(id); // 클릭된 SVG의 ID를 상태에 저장
  };

  const sendDataToAPI = async () => {
    try {
      const response = await API.post('/api/sizetests', {
        size: activeSVG === 'test2' ? '소형견' : '대형견' // activeSVG 값에 따라 size 설정
      });
      console.log('API 요청 성공:', response.data);
    } catch (error) {
      console.error('API 요청 실패:', error);
    }
  };

  const handleFooterClick = () => {
    if (activeSVG) {
      sendDataToAPI();
      navigate('/testThird');
    } else {
      alert('견종을 선택해주세요.'); // 견종 선택이 안되었을 때의 예외 처리
    }
  };

  return (
    <>
      <Header/>
      <Wrapper>
        <Wrap>
          <Title>강아지의 견종은 <br /> 어디에 해당하나요?</Title>
          <Body>
            <SVGWrapper>
              <SVGContainer
                onClick={() => handleSVGClick('test2')}
                isActive={activeSVG === 'test2'}
              >
                <Test2SVG />
              </SVGContainer>
              <Content>소형견</Content>
            </SVGWrapper>
            <SVGWrapper>
              <SVGContainer
                onClick={() => handleSVGClick('test3')}
                isActive={activeSVG === 'test3'}
              >
                <Test3SVG />
              </SVGContainer>
              <Content>대형견</Content>
            </SVGWrapper>
          </Body>
        </Wrap>
      </Wrapper>
      <Footer 
        btnColor={activeSVG ? "#FF6969" : "#C4C4C4"} // 상태에 따라 버튼 색깔 변경
        buttonText="다음"
        onClick={handleFooterClick} // 클릭 핸들러 전달
      />
    </>
  );
};

export default TestSecond;
