//인포 카드 담당자: 최효은

import React from "react";
import styled from "styled-components";
import CheckMyPageSVG from "../../assets/icons/checkMyPage.svg?react";
import Check2MyPageSVG from "../../assets/icons/check2MyPage.svg?react";
import EditMyPageSVG from "../../assets/icons/editMyPage.svg?react"; // SVG 파일 가져오기
import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기
import dummyPetInfo from "../../data/dummyPetInfo"; // 더미 데이터 가져오기

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 20px;
  font-family: SUIT, sans-serif;
  font-weight: 800;
  flex-direction: column;
  margin: 3px;
  gap: 10px;
`;

export const PetInfoBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column; // Ensuring content stacks vertically
  border-radius: 10px;
  border: 1px solid var(--Color-Gray-Gray01, #eaeaea);
  background: #fff;
  padding: 20px; // Added padding for spacing
  gap: 15px; // Gap between elements
`;

export const MainProfileBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const MainProfile = styled.div`
  display: flex;
  padding: 4px 8px; // Adjusted padding
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 0.5px solid var(--Red-Red04, #ff6969);
  background: #fff;

  color: var(--Red-Red04, #ff6969);
  font-family: SUIT;
  font-size: 10px;
  font-weight: 600;
`;

export const InfoTextBox = styled.div`
  display: flex;
  flex-direction: row; // Elements arranged horizontally
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const PetImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; // Ensures the image fits within the border-radius
  width: 100px; // Set a fixed size for the image container
  height: 100px;
  border-radius: 50%; // Make it circular
  background: var(--Gray-White, #fff);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // Ensures the image covers the container
  }
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: var(--Gray-Gray03, #3a3a3c);
  font-family: SUIT;
  font-size: 10px;
  font-weight: 600;
`;

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 9px;
  font-size: 12px;
  font-weight: bold;
`;

export const InfoListDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  color: var(--Gray-Gray03, #3a3a3c);
`;

export const Editbtn = styled.button`
  display: flex;
  align-items: center;
  padding: 2px 4px;
  justify-content: center; /* 버튼 내용 중앙 정렬 */
  gap: 4px;

  border-radius: 10px;
  border-style: none;
  background: var(--Grayscale-Gray100, #f6f7f8);

  color: var(--Grayscale-Gray400, #8490a0);
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 10px */
`;

const PetInfoCard = () => {
  const navigate = useNavigate(); // useNavigate 훅 초기화

  // Editbtn 클릭 핸들러
  const handleEditClick = () => {
    navigate("/PetEdit"); // petedit 경로로 이동
  };

  return (
    <Wrapper>
      {dummyPetInfo.map((pet) => (
        <PetInfoBox key={pet.id}>
          <MainProfileBox>
            <CheckMyPageSVG />
            <MainProfile>대표 프로필</MainProfile>
          </MainProfileBox>
          <InfoTextBox>
            <PetImg>
              <img src={pet.image} alt={`${pet.name} Info`} />
            </PetImg>
            <InfoList>
              <NameBox>
                {pet.name}
                <Editbtn onClick={handleEditClick}>
                  <EditMyPageSVG />
                  프로필 수정
                </Editbtn>
              </NameBox>
              <InfoListDetail>
                <Check2MyPageSVG />
                <div>성별 | {pet.gender}</div>
              </InfoListDetail>
              <InfoListDetail>
                <Check2MyPageSVG />
                <div>나이 | {pet.age}</div>
              </InfoListDetail>
              <InfoListDetail>
                <Check2MyPageSVG />
                <div>몸무게 | {pet.weight}</div>
              </InfoListDetail>
              <InfoListDetail>
                <Check2MyPageSVG />
                <div>혈액형 | {pet.blood}</div>
              </InfoListDetail>
            </InfoList>
          </InfoTextBox>
        </PetInfoBox>
      ))}
    </Wrapper>
  );
};

export default PetInfoCard;
export { CheckMyPageSVG, Check2MyPageSVG, EditMyPageSVG };
