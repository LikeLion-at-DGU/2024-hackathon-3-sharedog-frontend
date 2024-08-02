// 담당자: 최효은
import styled from "styled-components";
import React from "react";
import LoginIConPNG from "../../assets/images/LoginIcon.png?react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 수직 중앙 정렬 */
  width: 100%;
  height: 100vh; /* 전체 화면 높이 */
  position: relative; /* 자식 요소의 절대 위치를 위해 필요 */
`;

const BackgroundImg = styled.div`
  width: 323px;
  height: 351px;
  background-image: url(${LoginIConPNG});
  background-size: cover;
  position: absolute; /* 부모 요소에 상대적으로 위치 */
`;

const Overlay = styled.div`
  width: 323px;
  height: 351px;
  background: rgba(255, 255, 255, 0.6);
  filter: blur(50px);
  position: absolute; /* 부모 요소에 상대적으로 위치 */
`;

const Login = () => {
  return (
    <Wrapper>
      <BackgroundImg />
      <Overlay />
    </Wrapper>
  );
};

export default Login;
export { LoginIConPNG };
