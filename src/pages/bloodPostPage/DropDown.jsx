import React, { useState } from 'react';
import styled from 'styled-components';
import DropDownIcon from '../../assets/icons/dropdown.svg?react'
// 드롭다운 컨테이너 스타일: 드롭다운의 기본 레이아웃을 정의
const DropdownContainer = styled.div`
  position: relative; // DropdownButton과 DropdownContent를 같은 컨테이너 내에서 상대적으로 배치
  display: inline-block; // 컨테이너를 인라인 블록 요소로 설정
`;

// 드롭다운 버튼 스타일: 드롭다운을 열거나 닫는 버튼 스타일 정의
const DropdownButton = styled.button`
    border-radius: 30px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 70px; */
    width:90px;
    height: 29px;
    /* padding: 7px 7px 7px 9px; */
    /* flex-direction: column;
    align-items: flex-start; */
    gap: 10px;
  padding: 10px; // 버튼 안쪽 여백 설정
  cursor: pointer; // 마우스를 올렸을 때 포인터 커서 표시

    color: #9C9CA1;
    text-align: center;
    font-family: SUIT;
    font-size: 10px;;
    font-weight: 400;
`;

// 드롭다운 내용 스타일: 드롭다운이 열릴 때 표시되는 내용의 스타일 정의
const DropdownContent = styled.div`
   display: ${({ $isDropdownOpen }) => ($isDropdownOpen ? 'block' : 'none')};// 드롭다운 열림/닫힘 상태에 따라 표시 여부 결정// isOpen 상태에 따라 표시 여부 결정
    position: absolute; // 부모 컨테이너에 상대적으로 위치 설정
    border: 1px solid #D9D9D9;
    /* border-left: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9; */
    background: #FFF;
    /* box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); // 그림자 효과 추가 */
    z-index: 1; // 드롭다운이 다른 요소들보다 위에 표시되도록 설정
    margin-top: 0px; // 버튼과 드롭다운 내용 사이의 간격 설정

    color: var(--Gray-Gray01, #9C9CA1);
    text-align: center;
    font-family: SUIT;
    font-size: 10px;
    font-weight: 400;

    width:90px;
    border-radius: 10px 10px 10px 10px;//드롭다운 끝부분둥글게
`;

// 옵션 스타일: 드롭다운 내 각 옵션의 스타일 정의
const Option = styled.div`
  padding: 10px; // 옵션 내부 여백 설정
  cursor: pointer; // 마우스를 올렸을 때 포인터 커서 표시
  &:hover { // 옵션에 마우스를 올렸을 때 배경색 변경
    background-color: rgba(255, 105, 105, 0.20);
    border: 0.5px solid #FF6969;
    color: var(--Red-Red04, #FF6969);
}`;

// Dropdown 컴포넌트: 드롭다운 버튼과 내용을 포함하는 컴포넌트
const Dropdown = ({ options, label }) => {
  // 드롭다운의 열림/닫힘 상태를 관리하기 위한 상태
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  
  // 드롭다운 열림/닫힘 상태를 토글하는 함수
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  
  // 선택된 옵션을 관리하기 위한 상태
  const [selectedOption, setSelectedOption] = useState(label);
  
  // 옵션 클릭 시 호출되는 함수
  const handleOptionClick = (option) => {
    setSelectedOption(option); // 선택된 옵션 업데이트
    setDropdownOpen(false); // 드롭다운 닫기
  };

  return (
    <DropdownContainer>
      {/* 드롭다운 버튼 */}
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption} {/* 선택된 옵션을 버튼에 표시 */}
        <DropDownIcon /> {/* 드롭다운 아이콘 */}
      </DropdownButton>
      {/* 드롭다운 내용 */}
      <DropdownContent $isDropdownOpen={isDropdownOpen}>
        {options.map((option, index) => (
          <Option
            key={index}
            onClick={() => handleOptionClick(option)} // 옵션 클릭 시 함수 호출
          >
            {option} {/* 옵션 텍스트 */}
          </Option>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown; // Dropdown 컴포넌트를 기본 내보내


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