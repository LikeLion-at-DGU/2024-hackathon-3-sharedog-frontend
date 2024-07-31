// Styled.js 파일에서
import styled from "styled-components";
import ProfileMyPageSVG from "../../assets/icons/profileMyPage.svg?react"; // SVG 파일 가져오기
import CautionSVG from "../../assets/icons/Caution.svg?react";

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
  width: 91%;
  display: flex;
  flex-direction: column; /* 요소들을 수직 정렬 */
  align-items: flex-start; /* 수평 중앙 정렬 */
  gap: 30px;
`;

// MyInfo: 프로필 정보를 감싸는 박스 스타일
export const MyInfo = styled.div`
  width: 100%;
  height: 15vh;
  flex-shrink: 0;
  border-radius: 11.587px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column; /* 요소들을 수직 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  align-items: center; /* 수평 중앙 정렬 */
`;

export const CautionBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  background: rgba(255, 105, 105, 0.10);
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
    color: var(--Gray-Gray03, #3A3A3C);
    font-family: SUIT;
    font-size: 14px;
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
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    display: flex;
    justify-content: center;
  }
`;

export const ProfileImg = styled.div`
  padding: 15.058px 15.83px;

  border-radius: 32.047px;
  border-style: none;
  background: #eaeaec;
`;

export const InPutBox = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
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
export { ProfileMyPageSVG, CautionSVG };
