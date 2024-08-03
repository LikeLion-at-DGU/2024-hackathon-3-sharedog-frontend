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

export const Container = styled.div`
  max-width: 800px;
  width: 88%;
  margin: 0 auto;
  font-family: SUIT;
`;

export const Image = styled.img`
  width: 100%;
  height: 25vh;
  border-radius: 6px;
`;

export const HosInfo = styled.div`
  width: 100%;
  height: 15vh;
  border-radius: 10px;
  border: 1px solid var(--Color-Gray-Gray01, #EAEAEA);
  background: #FFF;

  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-top: 2vh;
`;

export const HosName = styled.div`
  width: 80%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #000;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const HosDetail = styled.div`
  width: 100%;
  height: 9vh;
  flex-shrink: 0;
  border-radius: 0px 0px 9px 9px;
  background: rgba(255, 105, 105, 0.08);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TextContent = styled.div`
  color: var(--Gray-Gray03, #3A3A3C);
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 80%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`;

export const HosPhone = styled.div`
  color: var(--Gray-Gray03, #3A3A3C);
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 80%;
  margin: 0 auto;
  gap : 5px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const NextBtn = styled.div`
  display: flex;
  padding: 10px 47px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  width: 88%;
  max-width: 528px;

  border-radius: 30px;
  background: rgba(156, 156, 161, 0.5);
  color: #fff;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;

  position:fixed;
  bottom: 12vh; 
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1000;
`;

export const Week = styled.div`
  width: 100%;
  color: #000;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 2vh;
`;

export const Time = styled.div`
  width: 100%;
  color: #000;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 2vh;
`;

export const TimeSelect = styled.div`
  
`;

export const Am = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Pm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PmText = styled.div`
  display: flex;
  color: #000;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 1vh;
`;

export const AmText = styled.div`
  display: flex;
  color: #000;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 1vh;
`;

export const TimeContainer = styled.div`
  display: flex;
  height: 10vh;
  margin-top: 2vh;
  padding: 2vh 2vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 14.576px;
  border: 1px solid var(--Color-Gray-Gray01, #EAEAEA);
  background: #FFF;
`;

export const TimeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding: 5px 15px;
  border: 1px solid ${props => (props.active ? '#FF6969' : '#D9D9D9')};
  background: ${props => (props.active ? 'rgba(255, 105, 105, 0.20)' : '#FFF')};
  color: ${props => (props.active ? '#FF6969' : '#9C9CA1')};
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0px 5px;

  &:focus {
    outline: none;
  }
`;