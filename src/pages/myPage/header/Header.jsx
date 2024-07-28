// 마이페이지 헤더 담당자: 최효은
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackBtnSVG from "../../../assets/icons/backMyPage.svg?react"; // SVG 파일 가져오기
import AlramBtnSVG from "../../../assets/icons/alramMyPage.svg?react"; // SVG 파일 가져오기

const Wrapper = styled.div`
  // 헤더 전체 프레임
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10vh;
`;

const HeaderBox = styled.div`
  // 헤더 요소를 감싸는 프레임
  display: flex;
  justify-content: space-between; /* BackBtn과 TitleTxt의 위치를 조정 */
  align-items: center;
  width: 88%;
  height: 8vh;
  flex-shrink: 0;
`;

const BackBtn = styled.button`
  // 백 버튼 스타일링
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
  // 백 버튼 스타일링
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

const TitleTxt = styled.text`
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

const Header = () => {
  return (
    <Wrapper>
      <HeaderBox>
        <BackBtn>
          <BackBtnSVG /> {/* SVG 컴포넌트를 사용 */}
        </BackBtn>
        <TitleTxt>마이페이지</TitleTxt>
        <AlramBtn>
          <AlramBtnSVG /> {/* SVG 컴포넌트를 사용 */}
        </AlramBtn>
      </HeaderBox>
    </Wrapper>
  );
};

export default Header;
