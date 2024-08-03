import styled from "styled-components";
import BackBtnSVG from "../../../assets/icons/backMyPage.svg?react";
import AlramBtnSVG from "../../../assets/icons/alramMyPage.svg?react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* 다른 요소들 위에 표시되도록 */
  background-color: #fff; /* 헤더 배경색 */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); /* 헤더 하단에 그림자 추가 */
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  height: 8vh;
  flex-shrink: 0;
`;

const BackBtn = styled.button`
  display: flex;
  font-size: 19px;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const AlramBtn = styled.button`
  display: flex;
  font-size: 19px;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const TitleTxt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

const Header = ({ title }) => {
  return (
    <Wrapper>
      <HeaderBox>
        <BackBtn>
          <BackBtnSVG />
        </BackBtn>
        <TitleTxt>{title}</TitleTxt>
        <AlramBtn>
          <AlramBtnSVG />
        </AlramBtn>
      </HeaderBox>
    </Wrapper>
  );
};

export default Header;
