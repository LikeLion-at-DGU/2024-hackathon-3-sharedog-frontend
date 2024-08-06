import React, { useState } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15vh;
  font-size: 20px;
  font-family: SUIT, sans-serif; // 폰트 사용 예시
  font-weight: 800;
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
  justify-content: space-between;

  display: flex;
  flex-direction: row;
`;

export const AlertText = styled.div`
  color: var(--Gray-Gray01, #ff6565);
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 12.8px */
  letter-spacing: -0.16px;

  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 2vh;
`;

export const SelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-self: stretch;
`;

export const Option = styled.div`
  display: flex;
  width: 90px;
  height: 40px;
  padding: 14px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 20px;
  background: ${(props) =>
    props.$isSelected ? "#FF6969" : "rgba(156, 156, 161, 0.5)"};

  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 22.4px */
  letter-spacing: -0.28px;
  cursor: pointer;
`;

const Select = ({ title, value, onChange, alerttext }) => {
  const options = ["수컷", "중성화", "암컷"];

  return (
    <Wrapper>
      <InPutSection>
        <InPutText>
          {title}
          <AlertText>{alerttext}</AlertText>
        </InPutText>
        <SelectBox>
          {options.map((option) => (
            <Option
              key={option}
              $isSelected={value === option}
              onClick={() => onChange(option)}
            >
              {option}
            </Option>
          ))}
        </SelectBox>
      </InPutSection>
    </Wrapper>
  );
};

export default Select;
