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
  LineBox,
  NumberContainer,
  Line,
  FaqBox,
  FaqContainer,
  FaqTitle,
  QnABox,
  QnATitle,
  AnswerBox,
  AnswerText,
  StandardArrowSVG,
  ArrowImg,
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
      <Line></Line>
      <FaqContainer>
        <FaqBox>
          <FaqTitle>반려견 헌혈 FAQ</FaqTitle>
          <QnABox>
            <QnATitle>Q. 헌혈 시 혈액은 어느 정도 뽑나요?</QnATitle>
            <AnswerBox>
              <ArrowImg>
                <StandardArrowSVG />
              </ArrowImg>
              <AnswerText>
                헌혈은 한 번 진행할 때, 몸무게의 총 1%에 해당하는 혈액을
                채혈해요.
              </AnswerText>
            </AnswerBox>
            <QnATitle>
              Q. 몸무게의 1%에 해당하는 혈액을 채혈하면, <br></br>몸무게 기준이
              중요한가요?
            </QnATitle>
            <AnswerBox>
              <ArrowImg>
                <StandardArrowSVG />
              </ArrowImg>
              <AnswerText>
                강아지는 사람처럼 체내에 혈액이 많지 않아요. 기준 몸무게에서
                완전히 벗어나는 강아지의 경우, 무리가 갈 수 있기 때문에 몸무게
                기준이 매우 중요해요!
              </AnswerText>
            </AnswerBox>
          </QnABox>
        </FaqBox>
      </FaqContainer>
    </Wrapper>
  );
};

export default Standard;
