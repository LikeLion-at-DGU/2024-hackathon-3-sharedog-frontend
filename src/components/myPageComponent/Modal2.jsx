import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 400px;
  height: auto;
  text-align: center;
`;

const ModalText1 = styled.div`
  color: var(--Gray-Gray03, #3a3a3c);
  margin-top: 10px;
  font-family: SUIT;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.6;
`;

const ModalText2 = styled.div`
  color: var(--Gray-Gray02, #767678);
  margin-top: 20px;
  font-family: SUIT;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.6;
`;

const ModalBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ModalBtn1 = styled.button`
  height: 35px;
  padding: 0 20px;
  border-radius: 20px;
  background: var(--Grayscale-Gray300, #c3c9d0);
  color: #fff;
  font-family: SUIT;
  font-size: 14px;
  font-weight: 500;
  line-height: 160%;
  border: none;
  cursor: pointer;
`;

const ModalBtn2 = styled.button`
  height: 35px;
  padding: 0 20px;
  border-radius: 20px;
  background: var(--Red-Red04, #ff6969);
  color: #fff;
  font-family: SUIT;
  font-size: 14px;
  font-weight: 500;
  line-height: 160%;
  border: none;
  cursor: pointer;
`;

const Modal2 = ({ onClose, text1, text2, btn1Text, btn2Text, onConfirm }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalText1>{text1}</ModalText1>
        <ModalText2>{text2}</ModalText2>
        <ModalBtnContainer>
          <ModalBtn2 onClick={onConfirm}>{btn2Text}</ModalBtn2>
        </ModalBtnContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal2;
