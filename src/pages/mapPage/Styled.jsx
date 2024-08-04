import styled from "styled-components";

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
  background: url(<path-to-image>) lightgray -377.187px -212.32px / 405.973%
    344.382% no-repeat;
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
  flex-wrap: wrap; // 추가됨
  gap: 10px; // 좁은 간격으로 수정
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
  flex: 3; // 추가됨: 요소가 남은 공간을 차지하도록
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
  background: rgba(156, 156, 161, 0.5);

  color: var(--Legacy-White, #fff);
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 16px */
  letter-spacing: 0.016px;

  &:hover {
    background: var(--Red-Red04, #ff6969);
    color: var(--Legacy-White, #fff);
    font-weight: 700;
  }
`;
