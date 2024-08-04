import styled from "styled-components";
import Check2MyPageSVG from "../../assets/icons/check2MyPage.svg?react";
import PinkLineSVG from "../../assets/icons/pinkLine.svg?react";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  font-size: 20px;
  align-items: center;
  flex-direction: column;
  font-family: SUIT, sans-serif; // 폰트 사용 예시
  font-weight: 800;
  margin-top: 15vh;
`;

export const ExplainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const ExplainTitleBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  border-radius: 12px 12px 0px 0px;
  border: 1px solid var(--Color-Gray-Gray01, #eaeaea);
  background: var(--Gray-White, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.03);

  border-radius: 12px 12px 0px 0px;
  background: rgba(255, 105, 105, 0.08);

  color: var(--Red-Red04, #ff6969);
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 187.5% */
`;

export const ExplainDetailBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 3vh;
  align-self: stretch;
  flex-direction: column;

  border-radius: 0px 0px 12px 12px;
  border: 1px solid var(--Color-Gray-Gray01, #eaeaea);
  background: var(--Gray-White, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.03);
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  margin: 1vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-direction: row;
  text-align: left;
`;

export const TitleText = styled.div`
  color: var(--Gray-Black, #1c1c1e);
  text-align: center;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 214.286% */
`;

export const TitleText2 = styled.div`
  padding: 0vh 0vh 0vh 4vh;
  color: var(--Gray-Gray03, #3a3a3c);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
`;

export const NumberCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 9.5px;
  background: #ff6969;
  color: #ffffff;
  font-family: SUIT;
  font-size: 12px;
  font-weight: 700;
`;

export const LineBox = styled.div`
  width: 32px;
  height: 0px;
  justify-content: center;
  display: flex;
`;

export const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DottedLine = styled.div`
  width: 2px;
  height: 20px;
  border-left: 2px dotted #ff6969;
`;

export { Check2MyPageSVG, PinkLineSVG };
