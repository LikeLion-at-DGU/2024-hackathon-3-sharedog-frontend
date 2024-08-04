
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
const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

const Login = () => {
  const navigate = useNavigate();

  // Editbtn 클릭 핸들러
  const handleSignupClick = () => {
    navigate("/SignUp"); // 경로 확인
  };


  const handleKakaoLogin = () => {
    window.location.href =  `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

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
          <NameText>포피 ForPpy</NameText>
        </NameBox>
      </Content>
      <KakaoLoginBtn onClick={handleKakaoLogin}>
        <KakaoIconSVG /> 카카오 로그인
      </KakaoLoginBtn>
      <LoginBtn onClick={handleSignupClick}>이메일로 로그인</LoginBtn>
    </Wrapper>
  );
};



export default Login;
