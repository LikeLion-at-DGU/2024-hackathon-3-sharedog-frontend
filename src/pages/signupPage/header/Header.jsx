// Header.jsx
import styled from "styled-components";
import BackBtnSVG from "../../../assets/icons/backMyPage.svg?react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10vh;
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
        <TitleTxt>{title}</TitleTxt> {/*props 수정*/}
      </HeaderBox>
    </Wrapper>
  );
};

export default Header;
