import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15vh;
  font-size: 20px;
  font-family: SUIT, sans-serif; // 폰트 사용 예시
  font-weight: 800;
  display: flex;
  flex-direction: column; /* 요소들을 수직 정렬 */
  margin: 3px;
`;

export const InPutSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

export const InPutText = styled.div`
  color: var(--Graysclae-Gray700, #191f28);
  font-family: SUIT, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
`;

export const Holder = styled.div`
  width: 100%;

  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid var(--Grayscale-Gray200, #eff1f3);
  background: var(--Grayscale-White, #fff);

  color: var(--Gray-Gray01, #9c9ca1);
  font-family: SUIT, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 19.2px */
  letter-spacing: -0.24px;
`;

const InputHolder = ({ title, inputtext }) => {
  return (
    <Wrapper>
      <InPutSection>
        <InPutText>{title}</InPutText>
        <Holder>{inputtext}</Holder>
      </InPutSection>
    </Wrapper>
  );
};

export default InputHolder;
