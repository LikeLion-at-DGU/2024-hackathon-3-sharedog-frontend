import styled from "styled-components";
import Check2MyPageSVG from "../../assets/icons/check2MyPage.svg?react";
import PinkLineSVG from "../../assets/icons/pinkLine.svg?react";
import StandardArrowSVG from "../../assets/icons/StandardArrow.svg?react";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
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

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(234, 234, 234, 0.7);
  margin: 3vh;
`;

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: auto;
`;

export const FaqBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 3vh;
  margin-bottom: 5vh;
  align-self: stretch;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid var(--Color-Gray-Gray01, #eaeaea);
  background: var(--Gray-White, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.03);
  overflow: hidden; // 내용이 넘치지 않도록 추가
  word-break: break-word; // 단어가 박스를 넘지 않도록 추가
  box-sizing: border-box; // padding 포함 크기 계산
`;

export const FaqTitle = styled.div`
  display: flex;
  padding: 7px 12px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 3vh;

  border-radius: 30px;
  background: rgba(255, 165, 165, 0.7);

  color: #fff;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 14px */
`;

export const QnABox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vh;
  align-items: flex-start;
  align-self: stretch;
`;

export const QnATitle = styled.div`
  color: var(--Gray-Gray03, #3a3a3c);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5; /* 12px */
  margin-bottom: 1vh;
`;

export const AnswerBox = styled.div`
  display: inline-flex;
  align-items: flex-start;
  flex-direction: row;
`;

export const ArrowImg = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 1vh;
`;

export const AnswerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4vh;

  color: var(--Gray-Gray02, #636366);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 16.8px */
`;

export { Check2MyPageSVG, PinkLineSVG, StandardArrowSVG };
