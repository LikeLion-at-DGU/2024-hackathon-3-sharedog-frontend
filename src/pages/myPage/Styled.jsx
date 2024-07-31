// Styled.js 파일에서
import styled from "styled-components";
import EditMyPageSVG from "../../assets/icons/editMyPage.svg?react"; // SVG 파일 가져오기
import ProfileMyPageSVG from "../../assets/icons/profileMyPage.svg?react"; // SVG 파일 가져오기
import PictureMyPageSVG from "../../assets/icons/pictureMyPage.svg?react"; // SVG 파일 가져오기
import GoMyPageSVG from "../../assets/icons/goMyPage.svg?react"; // SVG 파일 가져오기

// Wrapper: 전체 컨테이너 스타일
export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start; /* 요소들을 상단에 배치 */
  align-items: center; /* 수평 중앙 정렬 */
  flex-direction: column; /* 요소들을 수직 정렬 */
  width: 100%;
  min-height: 80vh;
  font-size: 20px;
  font-family: SUIT, sans-serif;
  font-weight: 800;
  padding-top: 20px; /* 상단 여백 추가 */
`;

// MyInfo: 프로필 정보를 감싸는 박스 스타일
export const MyInfo = styled.div`
  width: 80%;
  height: 25vh;
  flex-shrink: 0;
  border-radius: 11.587px;
  border: 1.159px solid rgba(234, 234, 234, 0.8);
  background: #fff;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column; /* 요소들을 수직 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  align-items: center; /* 수평 중앙 정렬 */
`;

// InfoBox: 사용자 이름을 표시하는 박스 스타일
export const InfoBox = styled.div`
  display: flex;
  padding: 0px 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  box-shadow: 0px 7.679px 19.197px 0px rgba(154, 170, 207, 0.1);
  margin-top: 5px;

  color: var(--Grayscale-Gray700, #222b39);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
  letter-spacing: -0.36px;
`;

// Editbtn: 프로필 수정 버튼 스타일
export const Editbtn = styled.button`
  display: flex;
  align-items: center;
  padding: 2px 4px;
  justify-content: center; /* 버튼 내용 중앙 정렬 */
  gap: 4px;
  margin-top: 5px;

  border-radius: 10px;
  border-style: none;
  background: var(--Grayscale-Gray100, #f6f7f8);

  color: var(--Grayscale-Gray400, #8490a0);
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 10px */
`;

export const ProfileImg = styled.div`
  padding: 15.058px 15.83px;

  border-radius: 32.047px;
  border-style: none;
  background: #eaeaec;
`;

export const PictureImg = styled.div`
  padding: 22px 22px;

  border-radius: 32.047px;
  border-style: none;
  background: #eaeaec;
`;

export const InfoList = styled.div`
  width: 80%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 5px;
  padding: 10px 15px;
  border-radius: 11.518px;
  border: 0.96px solid var(--Grayscale-Gray200, #eff1f3);
  background: var(--Grayscale-White, #fff);
  box-shadow: 0px 7.679px 19.197px 0px rgba(154, 170, 207, 0.1);
`;

export const InfoList2 = styled.div`
  width: 80%;
  min-height: 32vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px; /* 하단 여백 */
  padding: 10px 15px;
  border-radius: 11.518px;
  border: 0.96px solid var(--Grayscale-Gray200, #eff1f3);
  background: var(--Grayscale-White, #fff);
  box-shadow: 0px 7.679px 19.197px 0px rgba(154, 170, 207, 0.1);
`;

export const InfoListItem = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  height: 10vh;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;

  color: var(--Grayscale-Gray400, #8490a0);
  font-family: Pretendard;
  font-size: 11.518px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 11.518px */
`;

export const ItemDetail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;
  color: var(--Grayscale-Gray600, #333d4b);
  font-family: Pretendard;
  font-size: 13.438px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 21.5px */
  letter-spacing: -0.269px;
  flex: 1;
`;

export const GoBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;
  width: 10px;
  height: 10px;
  flex-shrink: 0;
`;

export const InPutBox = styled.div`
  width: 80%;
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
export { EditMyPageSVG, ProfileMyPageSVG, GoMyPageSVG, PictureMyPageSVG };
