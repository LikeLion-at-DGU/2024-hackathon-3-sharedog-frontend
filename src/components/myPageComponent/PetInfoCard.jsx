import React, { useState } from "react";
import styled from "styled-components";
import CheckMyPageSVG from "../../assets/icons/checkMyPage.svg?react";
import Check2MyPageSVG from "../../assets/icons/check2MyPage.svg?react";
import EditMyPageSVG from "../../assets/icons/editMyPage.svg?react";
import BasicProfile from "../../assets/icons/petFootMyPage.svg?react";
import TrashSVG from "../../assets/icons/trash.svg?react";
import Modal from "../../components/myPageComponent/Modal";
import Modal2 from "../../components/myPageComponent/Modal2";

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
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid var(--Color-Gray-Gray01, #eaeaea);
  background: #fff;
  padding: 20px;
`;

export const MainProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainProfile = styled.div`
  display: flex;
  padding: 4px 8px;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const PetImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--Gray-White, #fff);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  width: 90px;
  display: flex;
  align-items: center;
  padding: 2px 4px;
  justify-content: center;
  gap: 4px;
  border-radius: 10px;
  border-style: none;
  background: var(--Grayscale-Gray100, #f6f7f8);
  color: var(--Grayscale-Gray400, #8490a0);
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  width: 11px;
  height: 12px;
  flex-shrink: 0;
  cursor: pointer;
  display: flex;
  border-style: none;
  background: none;
  padding: 0;
`;

const PetInfoCard = ({
  dogname,
  gender,
  dog_age,
  dog_weight,
  dog_blood,
  dog_image,
  kingdog,
  onEditClick,
  onDeleteClick,
}) => {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleDeleteClick = () => setShowFirstModal(true);
  const handleCloseFirstModal = () => setShowFirstModal(false);
  const handleCloseSecondModal = () => setShowSecondModal(false);

  const handleConfirmDelete = () => {
    setShowFirstModal(false);
    onDeleteClick();
    setShowSecondModal(true);
  };

  return (
    <Wrapper>
      <PetInfoBox>
        <MainProfileBox>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {kingdog && (
              <>
                <CheckMyPageSVG />
                <MainProfile>대표 프로필</MainProfile>
              </>
            )}
          </div>
          {!kingdog && (
            <DeleteBtn onClick={handleDeleteClick}>
              <TrashSVG />
            </DeleteBtn>
          )}
        </MainProfileBox>
        <InfoTextBox>
          <PetImg>
            {dog_image ? (
              <img src={dog_image} alt={`${dogname} Info`} />
            ) : (
              <BasicProfile />
            )}
          </PetImg>
          <InfoList>
            <NameBox>
              {dogname}
              <Editbtn onClick={onEditClick}>
                <EditMyPageSVG />
                프로필 수정
              </Editbtn>
            </NameBox>
            <InfoListDetail>
              <Check2MyPageSVG />
              <div>성별 | {gender}</div>
            </InfoListDetail>
            <InfoListDetail>
              <Check2MyPageSVG />
              <div>나이 | {dog_age}</div>
            </InfoListDetail>
            <InfoListDetail>
              <Check2MyPageSVG />
              <div>몸무게 | {dog_weight}</div>
            </InfoListDetail>
            <InfoListDetail>
              <Check2MyPageSVG />
              <div>혈액형 | {dog_blood}</div>
            </InfoListDetail>
          </InfoList>
        </InfoTextBox>
      </PetInfoBox>

      {showFirstModal && (
        <Modal
          onClose={handleCloseFirstModal}
          text1="정말로 프로필을 삭제하시겠습니까?"
          btn1Text="취소"
          btn2Text="확인"
          onConfirm={handleConfirmDelete}
        />
      )}

      {showSecondModal && (
        <Modal2
          onClose={handleCloseSecondModal}
          text1="삭제되었습니다."
          btn2Text="확인"
        />
      )}
    </Wrapper>
  );
};

export default PetInfoCard;
export { TrashSVG };
