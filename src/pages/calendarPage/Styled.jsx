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

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 25vh;
  border-radius: 6px;
`;

export const TextContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
`;

export const HosInfo = styled.div`
  
`;

