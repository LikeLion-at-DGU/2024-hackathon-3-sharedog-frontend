import Header from './header/Header';
import { useNavigate } from 'react-router-dom';
import Footer from './footer/testFooter';
import React, { useState } from 'react'; // 상태 관리를 위해 useState를 import합니다.
import styled from "styled-components";
import Test11SVG from '../../assets/icons/test11.svg?react';
import Test12SVG from '../../assets/icons/test12.svg?react';
import { Wrapper } from './Styled';

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
  align-items: center;
  width: 88%;
  height: 45vh;
  justify-content: space-evenly;
  gap: 5vw;
`;

const Body = styled.div`
  width: 88%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 5vw;
`;

const SVGWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center; /* 텍스트와 이미지를 수직 중앙에 정렬 */
  justify-content: flex-start; /* 텍스트와 이미지를 수평 중앙에 정렬 */
  padding: 0; /* 패딩을 0으로 설정하여 여백 제거 */
  margin: 0 auto; /* 마진을 0으로 설정하여 여백 제거 */
  gap: 3vw;
  border-radius: 10px;
  background: #FAFAFC;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 11px 22px;
  border-radius: 15px;
  border: ${props => (props.isActive ? '2px solid rgba(255, 105, 105, 0.60)' : 'none')}; /* 클릭 시 보더 색상 */
  background: ${props => (props.isActive ? '#FAFAFC' : 'transparent')}; /* 클릭 시 배경 색상 */
  box-shadow: ${props => (props.isActive ? '0px 0px 10px 0px rgba(255, 105, 105, 0.25)' : '0px 0px 4px 0px rgba(0, 0, 0, 0.25)')}; /* 클릭 시 그림자 */

  cursor: pointer; /* 클릭 가능하다는 것을 나타내기 위해 커서를 포인터로 설정 */

  &:hover {
    border: 3px solid rgba(255, 105, 105, 0.60);
    background: #FAFAFC;
    box-shadow: 0px 0px 10px 0px rgba(255, 105, 105, 0.25);
  }
`;

const SVGContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0;
`;

const TestSixth = () => {
  const navigate = useNavigate();
  const [activeSVG, setActiveSVG] = useState(null); // 클릭된 SVG를 추적할 상태

  const handleFooterClick = () => {
    navigate('/testFinal'); // 페이지 네비게이션
  };

  const handleSVGClick = (id) => {
    setActiveSVG(id); // 클릭된 SVG의 ID를 상태에 저장
  };

  const sendDataToAPI = async () => {
    try {
      const response = await API.post('/api/diseasetests', {
        has_disease: activeSVG === 'test11' ? '네! 앓았던 적이 있어요' : '아니요! 앓았던 적이 없어요' // activeSVG 값에 따라 size 설정
      });
      console.log('API 요청 성공:', response.data);
    } catch (error) {
      console.error('API 요청 실패:', error);
    }
  };

  return (
    <>
      <Header progress={20} />
      <Wrapper>
        <Wrap>
          <Title>과거에 심장사상충, 바베시아, <br /> 혈액 및 바이러스 질병 이력이 있나요? </Title>
          <Body>
            <SVGWrapper
              onClick={() => handleSVGClick('test11')}
              isActive={activeSVG === 'test11'}>
              <SVGContainer>
                <Test11SVG />
              </SVGContainer>
              <Content>네! 앓았던 적이 있어요</Content>
            </SVGWrapper>
            <SVGWrapper
              onClick={() => handleSVGClick('test12')}
              isActive={activeSVG === 'test12'}>
              <SVGContainer>
                <Test12SVG />
              </SVGContainer>
              <Content>아니요! 앓았던 적이 없어요</Content>
            </SVGWrapper>
          </Body>
        </Wrap>
      </Wrapper>
      <Footer 
        btnColor={activeSVG ? "#FF6969" : "#C4C4C4"} // 상태에 따라 버튼 색깔 변경
        buttonText="결과 확인하기"
        onClick={handleFooterClick} // 클릭 핸들러 전달
      />
    </>
  );
};

export default TestSixth;
