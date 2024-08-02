import styled from "styled-components";
import DropDownSVG from "../../assets/icons/dropdownMyPage.svg?react"; // SVG 파일 가져오기

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
`;

export const DropDown = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--Grayscale-Gray200, #eff1f3);
  background: var(--Grayscale-White, #fff);
  justify-content: space-between;

  color: var(--Gray-Gray01, #9c9ca1);
  font-family: SUIT, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 19.2px */
  letter-spacing: -0.24px;
`;

export const DropDownSelect = styled.select`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  color: #9c9ca1;
  color: var(--Gray-Gray01, #9c9ca1);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 19.2px */
  letter-spacing: -0.24px; // 필요에 따라 색상 조정
  cursor: pointer; // 커서가 포인터로 변경되도록 추가
`;

const InputDropDown = ({ title, inputtext, value, options = [], onChange }) => {
  return (
    <Wrapper>
      <InPutSection>
        <InPutText>{title}</InPutText>
        <DropDown>
          <DropDownSelect value={value} onChange={onChange}>
            <option value="" disabled>
              {inputtext}
            </option>
            {options.length > 0 &&
              options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
          </DropDownSelect>
          <DropDownSVG />
        </DropDown>
      </InPutSection>
    </Wrapper>
  );
};

export default InputDropDown;
export { DropDownSVG };
