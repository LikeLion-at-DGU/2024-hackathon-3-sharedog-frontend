import React, { useState } from 'react';
import styled from 'styled-components';
import DropDownIcon from '../../assets/icons/dropdown.svg?react';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  border-radius: 30px;
  border: 1px solid #D9D9D9;
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 29px;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  color: #9C9CA1;
  text-align: center;
  font-family: SUIT;
  font-size: 10px;
  font-weight: 400;
`;

const DropdownContent = styled.div`
  display: ${({ $isDropdownOpen }) => ($isDropdownOpen ? 'block' : 'none')};
  position: absolute;
  border: 1px solid #D9D9D9;
  background: #FFF;
  z-index: 1;
  margin-top: 0px;
  color: var(--Gray-Gray01, #9C9CA1);
  text-align: center;
  font-family: SUIT;
  font-size: 10px;
  font-weight: 400;
  width: 90px;
  border-radius: 10px;
`;

const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 105, 105, 0.20);
    border: 0.5px solid #FF6969;
    color: var(--Red-Red04, #FF6969);
  }
`;

const PostDropdown = ({ options, label, selected, setSelected }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleOptionClick = (option) => {
    setSelected(option); // 부모 컴포넌트의 상태를 업데이트
    setDropdownOpen(false); // 드롭다운 닫기
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selected || label} {/* 선택된 옵션 표시, 없을 경우 라벨 표시 */}
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
  );
};

export default PostDropdown; // Dropdown 컴포넌트를 기본 내보내


// return (
//     <DropdownContainer>
//     <DropdownButton onClick={toggleDropdown}>
//         {label} {/* 드롭다운 버튼에 표시될 라벨 */}
//         <DropDownIcon /> {/*버튼옆에 삼각형아이콘*/}
//     </DropdownButton>
//     <DropdownContent isOpen={isOpen}>
//         {options.map((option, index) => ( // options 배열을 반복하여 각 옵션을 표시
//         <Option key={index}>
//             {option} {/* 각 옵션의 텍스트 */}
//         </Option>
//         ))}
//     </DropdownContent>
//     </DropdownContainer>
// );
// };