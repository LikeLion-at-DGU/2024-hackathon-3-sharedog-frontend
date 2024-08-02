//r긴급헌혈 상세페이지 헤더 

import styled from "styled-components";
import BackBtnSVG from "../../../assets/icons/backMyPage.svg?react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8vh;
    background-color: #FFF;
    
    position: fixed;  /* 헤더를 고정 */
  top: 0;
  z-index: 1001;    /* 다른 요소 위에 표시되도록 z-index 설정 */
`;

const HeaderBox = styled.div`
    min-width: 316px;
    max-width: 886px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 88%;
    height: 8vh;
    flex-shrink: 0;
`;

const BackBtn = styled.button`
    display: flex;
    font-size: 19px;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
`;

const TitleTxt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-family: SUIT;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
`;

const Header = ({ title }) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Wrapper>
        <HeaderBox>
            <BackBtn onClick={goBack}>
            <BackBtnSVG />
            </BackBtn>
            <TitleTxt>{title}</TitleTxt> {/*props 수정*/}
            <div  style={{ width: '11px' }}></div> {/*가운데 맞추기용ㅋㅋ*/}
        </HeaderBox>
        </Wrapper>
    );
};

export default Header;
