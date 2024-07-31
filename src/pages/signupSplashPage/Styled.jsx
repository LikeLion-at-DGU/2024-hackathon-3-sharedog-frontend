import styled from 'styled-components';
import SIgnUpLogo from '../../assets/icons/SignUpLogo.svg?react';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(180deg, #FFF 0%, rgba(255, 217, 217, 0.50) 100%);
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;
`;

export const Logo = styled(SIgnUpLogo)`
  width: 184px;
  height: 184px;
  background: linear-gradient(180deg, #FFF 0%, rgba(255, 217, 217, 0.50) 100%);
`;

export const Slogan = styled.div`
  text-align: center;
  color: var(--Gray-Gray03, #3A3A3C);
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  p {
    color: #FF6969;
    display: inline; 
  }
`;
