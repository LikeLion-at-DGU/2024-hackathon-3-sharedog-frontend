import styled from "styled-components";
import ProfileMyPageSVG from "../../assets/icons/profileMyPage.svg?react"; // SVG 파일 가져오기
import CautionSVG from "../../assets/icons/Caution.svg?react";
import PictureMyPageSVG from "../../assets/icons/pictureMyPage.svg?react";

// Wrapper: 전체 컨테이너 스타일
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  font-size: 20px;
  font-family: SUIT, sans-serif; // 폰트 사용 예시
  font-weight: 800;
  display: flex;
  flex-direction: column; /* 요소들을 수직 정렬 */
  align-items: center; /* 수평 중앙 정렬 */
`;

export const Field = styled.div`
  display: flex;
  width: 88%;
  display: flex;
  flex-direction: column; /* 요소들을 수직 정렬 */
  align-items: center; /* 수평 중앙 정렬 */
  justify-content: space-between;
  gap: 30px;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column; /* 요소들을 수직 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  align-items: center;
  width: 100%;
`;

// MyInfo: 프로필 정보를 감싸는 박스 스타일
export const MyInfo = styled.div`
  width: 100%;
  height: 15vh;
  flex-shrink: 0;
  border-radius: 11.587px;
  margin-top: 10px;

  display: flex;
  flex-direction: column; /* 요소들을 수직 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  align-items: center; /* 수평 중앙 정렬 */
`;

export const Editbtn = styled.button`
  width: 100%;
  height: 6vh;
  border-radius: 0px 0px 10px 10px;
  border: none;
  background: rgba(255, 105, 105, 0.15);
  transform: translateY(23%);

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--Red-Red04, #ff6969);
  font-family: SUIT;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.24px;
  gap: 8px;
`;

export const CautionBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  background: rgba(255, 105, 105, 0.1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
`;

export const CautionField = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 11px auto;
  gap: 5px;
`;

export const CautionTitle = styled.div`
  h1 {
    color: var(--Gray-Gray03, #3a3a3c);
    font-family: SUIT;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    display: flex;
    justify-content: center;
    margin: 0 0 9px 0;
  }
  p {
    color: var(--Gray-Gray02, #636366);
    text-align: center;
    font-family: SUIT;
    font-size: 9px;
    font-style: normal;
    font-weight: 600;
    display: flex;
    justify-content: center;
  }
`;

export const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px; /* 고정된 크기로 설정 */
  height: 70px; /* 고정된 크기로 설정 */
  padding: 15.058px 15.83px;
  border-radius: 50%;
  flex-shrink: 0;
  background: #eaeaec;
  background-image: ${({ imageUrl }) =>
    imageUrl ? `url(${imageUrl})` : "none"};
  background-size: cover;
  background-position: center;
  overflow: hidden; /* 이미지가 요소의 경계를 넘어가지 않도록 */
`;

export const PictureImg = styled.div`
  width: 20px;
  height: 15px;
  flex-shrink: 0;
`;

export const InPutBox = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
`;

export const InPut = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  gap: 10px;
`;

export const CompleteBtn = styled.div`
  display: flex;
  padding: 10px 47px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 30px;
  background: rgba(156, 156, 161, 0.5);
  color: #fff;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
`;

// EditMyPageSVG: SVG 아이콘 컴포넌트 내보내기
export { ProfileMyPageSVG, CautionSVG, PictureMyPageSVG };
