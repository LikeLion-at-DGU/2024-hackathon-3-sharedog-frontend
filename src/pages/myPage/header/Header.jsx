import styled from "styled-components";
import BackBtnSVG from "../../../assets/icons/backMyPage.svg?react";
import AlramBtnSVG from "../../../assets/icons/alramMyPage.svg?react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;

`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%; /* 부모 컨테이너에 맞추기 */
  max-width: 886px; /* 최대 너비 */
  min-width: 316px; /* 최소 너비 */
  margin: 0 auto;
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
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <HeaderBox>
        <BackBtn onClick={goBack}>
          <BackBtnSVG />
        </BackBtn>
        <TitleTxt>{title}</TitleTxt>
        <div style={{width : "19px"}}></div>
      </HeaderBox>
    </Wrapper>
  );
};

export default Header;
