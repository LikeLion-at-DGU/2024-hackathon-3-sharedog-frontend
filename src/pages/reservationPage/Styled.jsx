import styled from 'styled-components';

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
  justify-content: center;
  width: 100%;
  position: sticky;
  top: 0;
  background: white; // 고정될 때 배경색을 지정하여 스크롤 시 병원 카드와 구분되도록 함
  z-index: 1000;
`;

export const RegionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-shrink: 0;
  padding: 5px 15px;
`;

export const RegionButton = styled.button`
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
  &.active {
    border-radius: 50px;
    border: 1px solid var(--Red-Red04, #FF6969);
    background: rgba(255, 105, 105, 0.20);
  }
`;

export const HospitalContainer = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const HospitalCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--Color-Gray-Gray01, #EAEAEA);
  background: #FFF;
  padding: 10px;
  margin-bottom: 10px;
`;

export const HospitalImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

export const HospitalInfo = styled.div`
  h1 {
    font-size: 18px;
    margin: 0;
  }
  p {
    margin: 5px 0 0;
  }
`;

