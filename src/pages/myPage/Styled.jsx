import styled, { css } from "styled-components";
import EditMyPageSVG from "../../assets/icons/editMyPage.svg?react"; // SVG 파일 가져오기
import ProfileMyPageSVG from "../../assets/icons/profileMyPage.svg?react"; // SVG 파일 가져오기
import PictureMyPageSVG from "../../assets/icons/pictureMyPage.svg?react"; // SVG 파일 가져오기
import GoMyPageSVG from "../../assets/icons/goMyPage.svg?react"; // SVG 파일 가져오기
import PetFootMyPageSVG from "../../assets/icons/petFootMyPage.svg?react"; // SVG 파일 가져오기

// Wrapper: 전체 컨테이너 스타일
export const Wrapper = styled.div`
  display: flex;
  align-items: center; /* 수평 중앙 정렬 */
  flex-direction: column; /* 요소들을 수직 정렬 */
  width: 100%;
  min-height: 80vh;
  font-size: 20px;
  font-family: SUIT, sans-serif;
  font-weight: 800;
  padding-top: 12vh; /* 상단 여백 추가 */
`;

// MyInfo: 프로필 정보를 감싸는 박스 스타일
export const MyInfo = styled.div`
  width: 80%;
  height: 20vh;
  flex-shrink: 0;
  border-radius: 11.587px;
  margin-top: 10vh;

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
  width: 100%;
  height: 50px;
  border-radius: 0px 0px 10px 10px;
  border: none;
  background: rgba(255, 105, 105, 0.15);

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--Red-Red04, #ff6969);
  font-family: SUIT;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.24px;
`;

export const ProfileImg = styled.div`
  padding: 15.058px 15.83px;

  border-radius: 32.047px;
  border-style: none;
  background: #eaeaec;
`;

export const PictureImg = styled.div`
  width: 20px;
  height: 15px;
  flex-shrink: 0;
`;

export const InfoList = styled.div`
  width: 80%;
  height: auto;
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
  height: auto;
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

export const EmailText = styled.div`
  display: flex;
  align-items: center;
  color: var(--Gray-Gray01, #9c9ca1);
  text-align: right;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 21.6px */
  letter-spacing: -0.24px;
`;

export const GoBtn = styled.div`
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
  height: 30vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-shrink: 0;
  gap: 10px;
`;

export const BtnBox = styled.div`
  width: 80%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  flex-shrink: 0;
  gap: 10px;
`;

export const CompleteBtn = styled.button`
  display: flex;
  padding: 10px 47px;
  justify-content: center;
  margin-top: 1vh;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 30px;
  border: none;
  background: rgba(156, 156, 161, 0.5);
  color: #fff;
  font-family: SUIT;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  cursor: ${({ isActive }) => (isActive ? "pointer" : "default")};

  ${({ isActive }) =>
    isActive &&
    `
      background-color: #ff6969;
      &:hover {
        background-color: #ff4d4d; /* hover 시 색상을 약간 더 어둡게 */
      }
  `}
`;

export const PlusBtn = styled.button`
  display: flex;
  width: 112px;
  padding: 10px;
  margin-top: 2vh;
  justify-content: center;
  align-items: center;
  border-radius: 22.252px;
  border: 1px solid var(--Red-Red04, #ff6969);
  background: #fff;

  color: var(--Red-Red04, #ff6969);
  text-align: center;
  font-family: SUIT;
  font-size: 11.868px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 11.868px */
  letter-spacing: 0.012px;

  &:hover {
    background: var(--Red-Red04, #ff6969);
    color: var(--Gray-White, #fff);
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: var(--Graysclae-Gray700, #191f28);
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
`;

export const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10vh;
  margin-top: 1vh;

  color: var(--Graysclae-Gray700, #191f28);
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 16px;
  font-weight: 700;

  color: var(--Gray-Gray03, #3a3a3c);
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;

  color: var(--Grayscale-Gray700, #222b39);
  cursor: pointer;

  input {
    margin-right: 8px;
  }
`;

export const RadioButton = styled.input.attrs({ type: "radio" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ff6969;
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  &:checked::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: #ff6969;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

// EditMyPageSVG: SVG 아이콘 컴포넌트 내보내기
export {
  EditMyPageSVG,
  ProfileMyPageSVG,
  GoMyPageSVG,
  PictureMyPageSVG,
  PetFootMyPageSVG,
};
