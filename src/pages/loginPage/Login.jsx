// 담당자: 최효은
import React from "react";
import {
  Wrapper,
  BackgroundImg,
  Overlay,
  TitleBold,
  TitleDetail,
  Content,
  IconImg,
  NameBox,
  NameText,
  AppIconSVG,
  KakaoLoginBtn,
  KakaoIconSVG,
  LoginBtn,
} from "./Styled";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // Editbtn 클릭 핸들러
  const handleSignupClick = () => {
    navigate("/SignUp"); // 경로 확인
  };

  return (
    <Wrapper>
      <BackgroundImg />
      <Overlay />
      <Content>
        <TitleBold>
          반려견 헌혈
          <br /> 신청
          <TitleDetail>부터</TitleDetail> 관리
          <TitleDetail>까지</TitleDetail> 한 번에
        </TitleBold>
        <NameBox>
          <IconImg>
            <AppIconSVG />
          </IconImg>
          <NameText>포피 Poppy</NameText>
        </NameBox>
      </Content>
      <KakaoLoginBtn>
        <KakaoIconSVG /> 카카오 로그인
      </KakaoLoginBtn>
      <LoginBtn onClick={handleSignupClick}>이메일로 로그인</LoginBtn>
    </Wrapper>
  );
};

export default Login;
