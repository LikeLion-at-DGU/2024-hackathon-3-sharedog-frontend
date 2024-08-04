import styled from "styled-components";
import Modal from 'react-modal';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  align-items: center;
`;

export const MapBox = styled.div`
  width: 90%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  background: url(<path-to-image>) lightgray -377.187px -212.32px / 405.973% 344.382% no-repeat;
`;

export const InfoCheck = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 20px;
  align-self: center;
`;

export const InfoCheckText = styled.div`
  display: flex;
  width: 90%;
  height: 14px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  color: #000;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const InfoBox2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 17vh;
  padding: 13px 20px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid var(--Color-Gray-Gray01, #eaeaea);
  background: #fff;
`;

export const Text1 = styled.div`
  color: var(--Red-Red04, #ff6969);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Text2 = styled.div`
  color: var(--Gray-Gray02, #636366);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  flex: 3;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(234, 234, 234, 0.7);
`;

export const CautionBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 18vh;
  padding: 13px 20px;
  align-items: flex-start;
  gap: 10px;
  justify-content: center;
  align-self: stretch;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid var(--Color-Gray-Gray01, #eaeaea);
  background: #fff;
`;

export const ReservationBtn = styled.button`
  display: flex;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  border-style: none;
  margin-bottom: 10px;
  border-radius: 30px;
  background: var(--Red-Red04, #ff6969);
  color: var(--Legacy-White, #fff);
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: 0.016px;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 35vh;
  width: 35vh;
  border-radius: 17.125px;
  background: #FFF;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  color: var(--Gray-Gray03, #3A3A3C);
  text-align: center;
  font-family: SUIT;
  font-weight: 700;
  font-style: normal;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 20px;
  z-index: 1000;
`;

export const ModalBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 1000;
`;

export const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #FFF;
  padding-top: 10px;
  margin-top: 20px;
  z-index: 1000;
`;

export const ModalText = styled.div`
  display: flex;
  color: #FF6969;
  text-align: center;
  font-family: SUIT;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 13.7px */
  letter-spacing: 0.014px;
`;

export const ModalButton = styled.div`
  display: flex;
  flex-shrink: 0;
  color: #FFF;
  text-align: center;
  font-family: SUIT;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 13.7px */
  letter-spacing: 0.014px;
  border-radius: 25.688px;
  border: 0.856px solid var(--Red-Red04, #FF6969);
  background: #FF6969;
  padding: 3%;
  align-items: center;
  gap: 8.563px;
  flex-shrink: 0;
  cursor: pointer;
`;


export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  padding: 20px;
  z-index: 1001; /* 모달이 오버레이 위에 있도록 설정 */
`;

// Make sure to bind the Modal component to your styled-components
Modal.setAppElement('#root');
