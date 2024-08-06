import React, { useState } from "react";
import styled from "styled-components";
import DropDownIcon from "../../assets/icons/dropdown.svg?react";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const DropdownContainer = styled.div`
  width: 80%;
  position: relative; /* position relative 추가 */
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const DropdownButton = styled.div`
  border-radius: 12px;
  border: 1px solid #d9d9d9;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  height: 29px;
  gap: 10px;
  padding: 10px;
  cursor: pointer;

  color: #9c9ca1;
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-weight: 400;
`;

const DropdownContent = styled.div`
  display: ${({ $isDropdownOpen }) => ($isDropdownOpen ? "block" : "none")};
  position: absolute; /* 절대 위치 지정 */
  top: 100%; /* 버튼 바로 아래에 위치하도록 설정 */
  left: 0; /* 버튼과 정렬되도록 설정 */
  border: 1px solid #d9d9d9;
  background: #fff;
  z-index: 1;
  color: var(--Gray-Gray01, #9c9ca1);
  text-align: center;
  font-family: SUIT;
  font-size: 10px;
  font-weight: 400;
  width: 140px;
  border-radius: 10px;
`;

const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 105, 105, 0.2);
    border: 0.5px solid #ff6969;
    color: var(--Red-Red04, #ff6969);
  }
`;

const PostDropdown = ({ options, label, selected, setSelected }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleOptionClick = (option) => {
    setSelected(option);
    setDropdownOpen(false);
  };

  return (
    <Wrapper>
      <DropdownContainer>
        <DropdownButton onClick={toggleDropdown}>
          {selected || label}
          <DropDownIcon />
        </DropdownButton>
        <DropdownContent $isDropdownOpen={isDropdownOpen}>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </DropdownContent>
      </DropdownContainer>
    </Wrapper>
  );
};

export default PostDropdown;