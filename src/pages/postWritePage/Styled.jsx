
import styled from "styled-components";
import PictureMyPageSVG from "../../assets/icons/pictureMyPage.svg?react"; // SVG 파일 가져오기

export const Wrapper = styled.div`
  display: flex;
  align-items: center; /* 수평 중앙 정렬 */
  flex-direction: column; /* 요소들을 수직 정렬 */
  width: 100%;
  min-height: 80vh;
  font-size: 20px;
  font-family: SUIT, sans-serif;
  font-weight: 800;
  padding-top: 10vh; /* 상단 여백 추가 */
`;

export const DropDownBox = styled.div`
  height: 8vh;
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  flex-direction: row; /* 요소들을 수평 정렬 */
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(234, 234, 234, 0.7);
  margin-top: 10px;
`;

export const FormContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  margin: 10px;
  color: var(--Gray-Gray03, #3a3a3c);
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 5vh;
  padding: 10px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  border: 1px solid #EFF1F3;
  background: var(--Grayscale-White, #fff);

  color: var(--Gray-Gray01, #9C9CA1);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:focus {
    border-color: #EFF1F3; /* 포커스 되었을 때의 보더 색상 설정 */
    outline: none; /* 포커스 시 생기는 기본 아웃라인 제거 */
  }
`;

export const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  height: 20vh;
  padding: 10px 14px 0px 14px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  border: 1px solid #eff1f3;
  background: var(--Grayscale-White, #fff);

  color: var(--Gray-Gray01, #9c9ca1);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:focus {
    border-color: #eff1f3; /* 포커스 되었을 때의 보더 색상 설정 */
    outline: none; /* 포커스 시 생기는 기본 아웃라인 제거 */
  }
`;

export const ImgBox = styled.div`
  display: flex;
  height: 20vh;
  padding: 0px 47px 92px 0px;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
  flex-shrink: 0;

  color: var(--Gray-Gray01, #9c9ca1);
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ImgPlusDiv = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;

  border-radius: 8px;
  background: rgba(255, 105, 105, 0.1);
  border-style: none;

  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-right: 5px;
  background-image: ${({ imageUrl }) =>
    imageUrl ? `url(${imageUrl})` : "none"};
  background-size: cover;
  background-position: center;
  overflow: hidden; /* 이미지가 요소의 경계를 넘어가지 않도록 */
border: 1px solid #9c9ca1;
  color: var(--Red-Red04, #ff6969);
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 16px */
`;

export const PostBtn = styled.button`
  display: flex;
  width: 100%;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  border-radius: 30px;
  background: rgba(156, 156, 161, 0.5);
  border-style: none;

  color: var(--Legacy-White, #fff);
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: 0.016px;
`;

export { PictureMyPageSVG };