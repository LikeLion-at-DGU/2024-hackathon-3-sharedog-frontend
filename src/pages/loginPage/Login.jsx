
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




  const handleKakaoLogin = () => {
    window.location.href =  `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  };

  return (
    <Wrapper>
      <BackgroundImg />
      <Overlay />
      <Content>
        <TitleDetail>
          반려견 헌혈 및 수혈까지 편리하게!
        </TitleDetail>
        <NameBox>
          <IconImg>
            <AppIconSVG />
          </IconImg>
          <NameText>나눠주개</NameText>
        </NameBox>
      </Content>
      <KakaoLoginBtn onClick={handleKakaoLogin}>
        <KakaoIconSVG /> 카카오 로그인 / 회원가입
      </KakaoLoginBtn>
    </Wrapper>
  );
};



export default Login;
