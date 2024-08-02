import styled from 'styled-components';
import BgImg from '../../assets/images/HomeBG.svg'
import PetIcon from '../../assets/icons/PetIcon.svg'
export const Wrapper = styled.div`
    display  :flex ;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90vh;
    font-size: 20px;
    font-family: SUIT, sans-serif;//폰트사용 예시 
    font-weight: 800;
    
`;

export const Bg = styled.div`//배경 이미지 
    background: url(${BgImg}) no-repeat ;
    background-size: cover;
    background-position: bottom center;
    width: 100%; 
    height:30vh; // 화면의 40% 높이
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    /* padding: 20px; */
    position: relative; 
`;


export const OverlapContent = styled.div`//배경이미지와 겹치는 헌혈견테스트 부분 
    position: absolute;
    top: 65%; // 배경 이미지와 겹치는 부분의 위치 조정
    width: 90%;

    height: 172px;
    background-color: white;
    padding: 20px;
    border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); // 그림자 효과
`;

export const PetTest = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
`;
export const ContentWrapper=styled.div`
    display: flex;
    width: 90%;
    margin-top: 115px;
    border: solid 1px green;
`;