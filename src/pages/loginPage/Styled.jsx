// Styled.js
import styled from "styled-components";
import LoginIConPNG from "../../assets/images/LoginIcon.png?react";
import AppIconSVG from "../../assets/icons/appIcon.svg?react";
import KakaoIconSVG from "../../assets/icons/kakaoIcon.svg?react";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative; /* 자식 요소의 절대 위치를 위해 필요 */
`;

export const BackgroundImg = styled.div`
  width: 90%;
  height: 50vh;
  background-image: url(${LoginIConPNG});
  background-size: cover;
`;

export const Overlay = styled.div`
  width: 323px;
  height: 351px;
  background: rgba(255, 255, 255, 0.6);
  filter: blur(50px);
  position: absolute; /* 부모 요소에 상대적으로 위치 */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  margin-top: 550px;
  width: 90%;
  padding: 20px;
  border-radius: 10px;
  z-index: 1; /* BackgroundImg와 Overlay 위에 위치 */
`;

export const TitleBold = styled.div`
  color: var(--Gray-Gray03, #3a3a3c);
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 30px; /* 150% */
  margin-bottom: 10px;
`;

export const TitleDetail = styled.span`
  color: var(--Gray-Gray03, #3a3a3c);
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
`;

export const NameBox = styled.div`
  display: flex;
  height: 10vh;
  width: 90%;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  align-self: stretch;
`;

export const IconImg = styled.div`
  border-radius: 5.2px;
  background: var(--Red-Red04, #ff6969);

  display: flex;
  width: 39px;
  height: 39px;
  padding: 7.28px 6.76px;
  flex-direction: column;
  align-items: flex-start;
  gap: 5.2px;
`;

export const NameText = styled.div`
  display: flex;
  width: 80%;
  height: 43px;
  flex-direction: column;
  justify-content: center;

  color: var(--Red-Red04, #ff6969);
  font-family: SUIT;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px; /* 107.143% */
`;

export const KakaoLoginBtn = styled.button`
  display: flex;
  width: 90%;
  height: 7vh;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 800px;
  position: absolute;
  gap: 7.492px;

  border-radius: 46.828px;
  border-style: none;
  background: #ffe812;

  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const LoginBtn = styled.button`
  display: flex;
  width: 90%;
  height: 7vh;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 900px;
  position: absolute;
  gap: 7.492px;
  background: none;

  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: underline;

  border-style: none;
  border-bottom: black 1px;
`;

// export the image
export { LoginIConPNG, AppIconSVG, KakaoIconSVG };
