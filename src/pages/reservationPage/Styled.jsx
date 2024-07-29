import styled from 'styled-components';
import VectorIcon from '../../assets/icons/Vector.svg?react';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  font-size: 20px;
  font-family: SUIT; // 폰트 사용 예시
  font-weight: 800;

  flex: 1;
  overflow-y: auto;
`;

export const RegionButtonsContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background: white; // 고정될 때 배경색을 지정하여 스크롤 시 병원 카드와 구분되도록 함
  z-index: 1000;
  padding: 10px 0;
`;

export const RegionButtons = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

export const RegionButton = styled.button`
  display: flex;
  padding: auto;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid #D9D9D9;
  background-color: white;
  color: var(--Gray-Gray01, #9C9CA1);
  text-align: center;
  font-family: SUIT;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  box-sizing: border-box; // 패딩과 보더를 포함하여 크기를 계산
  cursor: pointer;
  &.active {
    border-radius: 50px;
    border: 1px solid var(--Red-Red04, #FF6969);
    color: var(--Red-Red04, #FF6969);
    background: rgba(255, 105, 105, 0.20);
  }
`;

export const HospitalContainer = styled.div`
  width: 80%;
  padding: 20px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center; // Center the content horizontally
  justify-content: center;
`;

export const HospitalCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--Color-Gray-Gray01, #EAEAEA);
  background: #FFF;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

export const HospitalImage = styled.img`
  width: 103px;
  height: 68px;
  margin-right: 20px;
`;

export const HospitalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
  h1 {
    color: #000;
    font-family: SUIT;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: var(--Gray-Gray03, #3A3A3C);
    font-family: SUIT;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const HosPlace = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 6px;
`;

export {VectorIcon};