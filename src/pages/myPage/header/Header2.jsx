import styled from "styled-components";
import AlramBtnSVG from "../../../assets/icons/alramMyPage.svg?react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  margin: 0 auto;
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* 다른 요소들 위에 표시되도록 */
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); 
  `;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  gap: 22px;
`;

const TitleTxt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  width: 100%; /* 또는 필요한 너비로 설정 */
`;

const Header2 = ({ title }) => {
  return (
    <Wrapper>
      <HeaderBox>
        <TitleTxt>{title}</TitleTxt>
      </HeaderBox>
    </Wrapper>
  );
};

export default Header2;
