// 스플래시 스타일 담당자: 이동건 

import styled from 'styled-components';
import SplashLogo  from '../../assets/icons/SplashLogo.svg?react';
//svg파일을 import하는방법이 vite로 넘어오면서 달라짐 끝에 ?react를 붙여야되네..

export const Wrap = styled.div`
    display  :flex ;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    /* min-width: 360px; */
    margin: 0 auto;
    background: linear-gradient(180deg, #FFF 0%, #FFB4B4 42.64%, #FF6969 100%);
`;


export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:26px;
`;

export const Logo = styled(SplashLogo)`
    width: 77px;
    height: 77px;
`;
export const Slogan = styled.div`
    color: #FFF;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
    font-family: 'SUIT', sans-serif;
    font-size: 16px;
    font-weight: 600;
    /* line-height: 30px; //187.5%  */
    

`;
export const Title = styled.div`
    color: #FFF;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);

    font-size: 32px;
    font-family: 'SUIT', sans-serif;
    font-weight: 800;
    line-height: 30px; //93.75% 
`;

