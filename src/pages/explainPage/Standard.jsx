import React from "react";
import {
  Wrapper,
  ExplainBox,
  ExplainTitleBox,
  ExplainDetailBox,
  TitleBox,
  TitleContainer,
  TitleText,
  TitleText2,
  NumberCircle,
  Check2MyPageSVG,
  PinkLineSVG,
  LineBox,
  NumberContainer,
  DottedLine, // 새로 추가된 컴포넌트 임포트
} from "./Styled";
import Header from "./header/Header";

const Standard = () => {
  return (
    <Wrapper>
      <Header title={"헌혈 기준"} />
      <ExplainBox>
        <ExplainTitleBox>헌혈견 기준이 궁금해요!</ExplainTitleBox>
        <ExplainDetailBox>
          <TitleBox>
            <TitleContainer>
              <NumberContainer>
                <NumberCircle>1</NumberCircle>
              </NumberContainer>
              <TitleText>나이</TitleText>
            </TitleContainer>
            <TitleText2>만 2~8세를 충족해야 해요.</TitleText2>
          </TitleBox>
          <TitleBox>
            <TitleContainer>
              <NumberContainer>
                <NumberCircle>2</NumberCircle>
              </NumberContainer>
              <TitleText>몸무게</TitleText>
            </TitleContainer>

            <TitleText2>
              <LineBox></LineBox>
              25kg 이상이어야 해요.
              <br />
              (20~25kg의 강아지들은 전문가의 상담 하에 진행돼요.)
            </TitleText2>
          </TitleBox>
          <TitleBox>
            <TitleContainer>
              <NumberContainer>
                <NumberCircle>3</NumberCircle>
              </NumberContainer>
              <TitleText>기타</TitleText>
            </TitleContainer>
            <TitleText2>
              <Check2MyPageSVG />
              매월 심장사상충 및 구충 예방약을 복용해야 해요.
              <br />
              <Check2MyPageSVG />
              혈액 관련 질병 이력이 없어야 해요. (바베시아 등)
              <br />
              <Check2MyPageSVG />
              중성화 수술 후 6개월 경과 후 가능해요.
              <br />
              <Check2MyPageSVG />
              암컷의 경우, 출산 후 1년 경과 후 가능해요.
            </TitleText2>
          </TitleBox>
        </ExplainDetailBox>
      </ExplainBox>
    </Wrapper>
  );
};

export default Standard;
