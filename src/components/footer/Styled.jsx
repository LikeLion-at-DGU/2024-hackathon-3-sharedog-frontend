// 푸터 스타일 담당자: 이동건
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`// 푸터 프레임 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
    background-color: #FAFAFC;
    box-shadow: 0px -6px 14px 0px rgba(47, 47, 47, 0.04);
`;

const IconWrapper = styled.div`
  // 아이콘 프레임
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  /* border: 2px solid blue; */
`;

const IconBox = styled.div`
  // 아이콘과 텍스트를 묶는 박스
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Icon = styled.svg`
  // 아이콘 svg
  width: 26px;
  height: 26px;
  margin-bottom: 5px;
`;

const IconText = styled.div`
  // 아이콘 텍스트
  font-size: 10px;
  color: rgba(156, 156, 161, 0.7);
  font-family: SUIT;
  font-size: 10px;
  font-weight: 400;
`;

const Path = styled(NavLink)`
  // NavLink
  text-decoration: none;
  &:visited {
    color: inherit; // 방문한 링크의 텍스트 색상 유지
  }
  &.active ${Icon} path {
    // 클릭됐을때 아이콘 색상 변경
    fill: #ff6969;
  }

  &.active ${IconText} {
    // 클릭됐을때 텍스트 색상 변경
    color: #ff6969;
  }


`;

const FooterIcon = ({ Svg, label, to }) => (
  <Path to={to} className={({ isActive }) => (isActive ? "active" : "")}>
    <IconBox>
      <Icon as={Svg} />
      <IconText>{label}</IconText>
    </IconBox>
  </Path>
);
{
  /* <Path to={to} activeClassName="active">
    **원래 이렇게썼었는데 작동은되지만 오류떠서 수정함 
이 방식은 activeClassName prop을 직접 설정하지 않으며, 
대신 className prop을 동적으로 설정하여 스타일을 적용합니다. 
이로 인해 경고 메시지가 발생하지 않으며, 스타일도 올바르게 적용됩니다. */
}
const styles = {
  Wrapper,
  IconWrapper,
  IconBox,
  Icon,
  IconText,
  Path,
  FooterIcon,
};

export default styles;
